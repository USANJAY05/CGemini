import React, { useState, useEffect, useContext } from 'react';
import { Route, Routes, useNavigate } from 'react-router';
import Signup from './components/Signup';
import Login from './components/Login';
import Main from './components/Main';
import Missing from './components/Missing';
import { context } from './context/context';

const App = () => {
  const {onSent,output,items,setItems,newItem,select,setSelect}=useContext(context)
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
    e.preventDefault();
    if (type.trim() === "") {
      setError("Type cannot be empty"); // Error handling for empty input
      return;
    }
    const data= await onSent(type)
    newItem(type,data);
    setType("");
    setError(""); // Clear the error after successful submission
  };

  const handleDelete=(id)=>{
    const item=items.filter(item=>item.id!==id)
    setItems(item)
    localStorage.setItem("CGemini-data",JSON.stringify(item))
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