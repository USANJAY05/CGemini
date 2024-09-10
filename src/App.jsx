import React, { useState, useEffect, useContext } from 'react';
import { Route, Routes, useNavigate } from 'react-router';
import Signup from './components/Signup';
import Login from './components/Login';
import Main from './components/Main';
import Missing from './components/Missing';
import { context } from './context/context';

const App = () => {
  const { onSent, items, setItems, handleCollection, select, setSelect, loading, setLoading, collections,setCollections } = useContext(context);
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

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    setLoading(true); // Start loading spinner
    // setSelect(null);
    if (type.trim() === "") {
      setError("Type cannot be empty"); // Set an error if the input is empty
      return;
    }
    try {
      const data = await onSent(type);
      handleCollection(type, data); // Specify type for new item
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
      setType(type);
      const data = await onSent(type);
      handleCollection("human", data); // Specify type for new item
      setType(""); // Clear the input field
      setError(""); // Clear any previous errors
    } catch (error) {
      setError("An error occurred while sending data."); // Handle API error
    } finally {
      setLoading(false); // Stop loading spinner
    }
  };

  const handleDelete = (id) => {
    const updatedItems = items.filter(item => item.id !== id);
    setItems(updatedItems);
    localStorage.setItem("CGemini-data", JSON.stringify(updatedItems));
    setSelect(null);
  };

  return (
    <div className='font-bold'>
      <Routes>
        <Route path='/' element={<Main items={items} select={select} setSelect={setSelect} type={type} setType={setType} handleSubmit={handleSubmit} handleDelete={handleDelete} handleSubmit1={handleSubmit1} collections={collections} />} />
        <Route path='/signup' element={<Signup email={email} password={password} setEmail={setEmail} setPassword={setPassword} error={error} setError={setError} navigate={navigate} />} />
        <Route path='/login' element={<Login email={email} password={password} setEmail={setEmail} setPassword={setPassword} error={error} setError={setError} navigate={navigate} />} />
        <Route path='*' element={<Missing />} />
      </Routes>
    </div>
  );
};

export default App;