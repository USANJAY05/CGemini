import React from 'react';
import { Route, Routes, useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import Signup from './components/Signup';
import Login from './components/Login';
import Main from './components/Main';
import Missing from './components/Missing';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();



  return (
    <div className='font-bold'>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/signup' element={<Signup email={email} password={password} setEmail={setEmail} setPassword={setPassword} error={error} setError={setError} navigate={navigate} />} />
        <Route path='/login' element={<Login email={email} password={password} setEmail={setEmail} setPassword={setPassword} error={error} setError={setError} navigate={navigate} />} />
        <Route path='*' element={<Missing />} />
      </Routes>
    </div>
  );
};

export default App;