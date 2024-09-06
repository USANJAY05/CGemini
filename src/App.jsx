import React, { useState, useEffect, useContext } from 'react';
import { Route, Routes, useNavigate } from 'react-router';
import Signup from './components/Signup';
import Login from './components/Login';
import Main from './components/Main';
import Missing from './components/Missing';
import { context } from './context/context';

const App = () => {
  const {onSent,output,items,setItems,newItem,select,setSelect,loading,setLoading}=useContext(context)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [type, setType] = useState("");

  // Load items from localStorage on component mount
  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem('CGemini-data'));
    setItems(storage || []); // Fallback to an empty array if storage is null
  }, []);

  // Function to add a new item


  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    setSelect(null)
    if (type.trim() === "") {
      setError("Type cannot be empty"); // Set an error if the input is empty
      return;
    }
    setLoading(true); // Start loading spinner
    try {
      // Call the API and get the response
      const data = await onSent(type);
      newItem(type, data); // Add the new item with the API response
      setType(""); // Clear the input field
      setError(""); // Clear any previous errors
    } catch (error) {
      setError("An error occurred while sending data."); // Handle API error
    } finally {
      setLoading(false); // Stop loading spinner
    }
  };

  const handleDelete=(id)=>{
    const item=items.filter(item=>item.id!==id)
    setItems(item)
    localStorage.setItem("CGemini-data",JSON.stringify(item))
    setSelect(null)
  }

  return (
    <div className='font-bold'>
      <Routes>
        <Route path='/' element={<Main items={items} select={select} setSelect={setSelect} type={type} setType={setType} handleSubmit={handleSubmit} handleDelete={handleDelete}/>} />
        <Route path='/signup' element={<Signup email={email} password={password} setEmail={setEmail} setPassword={setPassword} error={error} setError={setError} navigate={navigate} />} />
        <Route path='/login' element={<Login email={email} password={password} setEmail={setEmail} setPassword={setPassword} error={error} setError={setError} navigate={navigate} />} />
        <Route path='*' element={<Missing />} />
      </Routes>
    </div>
  );
};

export default App;