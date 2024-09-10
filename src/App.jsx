import React, { useState, useEffect, useContext } from 'react';
import { Route, Routes, useNavigate } from 'react-router';
import Signup from './components/Signup';
import Login from './components/Login';
import Main from './components/Main';
import Missing from './components/Missing';
import { context } from './context/context';

const App = () => {
  const { onSent, items, setItems, handleCollection, select, setSelect, loading, setLoading, collections, setCollections } = useContext(context);
  const [previousOutput, setPreviousOutput] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [type, setType] = useState("");

  // Load items from localStorage on component mount
  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem('CGemini-collections'));
    setCollections(storage || []); // Fallback to an empty array if storage is null
  }, [setItems]);

  // Update previousOutput whenever the selected collection changes
  useEffect(() => {
    const selectedItem = collections.find(item => item.id === select);
    if (selectedItem) {
      const objContent = selectedItem.items.map(item => ({ content: item.content, type: 'User' }));
      const objData = selectedItem.items.map(item => ({ content: item.data, type: 'Bot' }));
      setPreviousOutput([...objContent, ...objData]);
    }
  }, [select, collections]);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    setLoading(true); // Start loading spinner

    if (type.trim() === "") {
      setError("Type cannot be empty"); // Set an error if the input is empty
      setLoading(false); // Stop loading spinner
      return;
    }

    try {
      // Construct the prompt from previous messages and the new input
      const prompt = `${previousOutput.map(item => item.content).join('\n')}\n${type}`;
      
      // Pass combined prompt to API
      const data = await onSent(prompt); 
      handleCollection(type, data); // Specify type for new item
      
      // Find the selected item from collections
      const selectedItem = collections.find(item => item.id === select);
      
      if (selectedItem) {
        // Access the content and data from the selected item
        const objContent = selectedItem.items.map(item => ({ content: item.content, type: 'User' }));
        const objData = selectedItem.items.map(item => ({ content: item.data, type: 'Bot' }));

        console.log("Selected Item Content:", objContent);
        console.log("Selected Item Data:", objData);

        // Append new message to previousOutput
        setPreviousOutput(prev => [
          ...prev,
          { content: type, type: 'User' }, // Add the new user input
          { content: data, type: 'Bot' },  // Add the API response
        ]);
      } else {
        console.log("No item found for the selected ID.");
      }

      setType(""); // Clear the input field
      setError(""); // Clear any previous errors
    } catch (error) {
      setError("An error occurred while sending data."); // Handle API error
    } finally {
      setLoading(false); // Stop loading spinner
    }
  };
  
  const handleSubmit1 = async (type) => {
    setLoading(true); // Start loading spinner
    try {
      const prompt = `${previousOutput.map(item => item.content).join('\n')}\n${type}`; // Combine previous outputs with the new input
      const data = await onSent(prompt); // Pass combined prompt to API
      handleCollection(type, data); // Specify type for new item
      setPreviousOutput(prev => [...prev, { content: type, type: 'human' }]); // Append new item to previousOutput
      setType(""); // Clear the input field
      setError(""); // Clear any previous errors
    } catch (error) {
      setError("An error occurred while sending data."); // Handle API error
    } finally {
      setLoading(false); // Stop loading spinner
    }
  };

  const handleDelete = (id) => {
    const updatedItems = collections.filter(item => item.id !== id);
    setCollections(updatedItems);
    localStorage.setItem("CGemini-collections", JSON.stringify(updatedItems));
    setSelect(null);
  };

  return (
    <div className='font-bold'>
      <Routes>
        <Route path='/' element={<Main items={items} select={select} setSelect={setSelect} type={type} setType={setType} handleSubmit={handleSubmit} handleDelete={handleDelete} handleSubmit1={handleSubmit1} collections={collections} previousOutput={previousOutput} />} />
        <Route path='/signup' element={<Signup email={email} password={password} setEmail={setEmail} setPassword={setPassword} error={error} setError={setError} navigate={navigate} />} />
        <Route path='/login' element={<Login email={email} password={password} setEmail={setEmail} setPassword={setPassword} error={error} setError={setError} navigate={navigate} />} />
        <Route path='*' element={<Missing />} />
      </Routes>
    </div>
  );
};

export default App;