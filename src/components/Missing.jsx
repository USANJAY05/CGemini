import React from 'react';
import missingLogo from '../assets/Designer-12.png';
import { Link } from 'react-router-dom';

const Missing = () => {
  return (
    <div className='h-screen flex flex-col items-center justify-center'>
      <img className='h-1/2' src={missingLogo} alt="Page not found" />
      <h2 className='text-4xl font-bold text-center'>Oops! The page you're looking for doesn't exist.</h2>
      <Link to='/' className='text-blue-500 hover:underline mt-4'>Go back to homepage</Link>
    </div>
  );
};

export default Missing;