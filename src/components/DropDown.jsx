import React, { useContext, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { context } from '../context/context';

const DropDown = ({ dropDown, setDropDown }) => {
  const { items, setItems, setSelect } = useContext(context);
  const dropdownRef = useRef(null);
  const userCredentialsString = localStorage.getItem('userCredentials');
  const userCredentials = JSON.parse(userCredentialsString);
  const email = userCredentials?.email;
  const navigate = useNavigate();

  const handleErase = () => {
    localStorage.removeItem('CGemini-data');
    setDropDown(!dropDown);
    setItems([]);
    setSelect(null);
  };

  const exportData = () => {
    const data = {
      userCredentials: localStorage.getItem('userCredentials'),
      CGeminiData: localStorage.getItem('CGemini-data'),
    };
    const blob = new Blob([JSON.stringify(data)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'data.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const importData = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const data = JSON.parse(e.target.result);

      // Merge existing data with imported data
      const existingCGeminiData = JSON.parse(localStorage.getItem('CGemini-data')) || [];
      const newCGeminiData = JSON.parse(data.CGeminiData) || [];

      // Extract existing IDs
      const existingIds = new Set(existingCGeminiData.map(item => item.id));

      // Filter new data to exclude items with existing IDs
      const filteredNewData = newCGeminiData.filter(item => !existingIds.has(item.id));

      // Merge the filtered new data with existing data
      const mergedCGeminiData = [...existingCGeminiData, ...filteredNewData];

      localStorage.setItem('userCredentials', data.userCredentials);
      localStorage.setItem('CGemini-data', JSON.stringify(mergedCGeminiData));
      setItems(mergedCGeminiData);
      setSelect(null);
    };
    reader.readAsText(file);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropDown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <section ref={dropdownRef} className='fixed p-2 rounded-lg top-14 right-3 bg-gray-100 shadow-xl text-black dark:bg-slate-800 w-56 dark:text-white flex flex-col gap-2'>
      <h2 className='w-full text-center'>{email}</h2>
      <input
        type="file"
        id="importFile"
        style={{ display: 'none' }}
        onChange={importData}
      />
      <button
        className='hover:bg-gray-600 w-full rounded'
        onClick={() => document.getElementById('importFile').click()}
      >
        Import Data
      </button>
      <button
        className='hover:bg-gray-600 w-full rounded'
        onClick={exportData}
      >
        Export Data
      </button>
      <button
        className='hover:bg-red-600 w-full rounded'
        onClick={handleErase}
      >
        Erase all data
      </button>
      <button
        className='hover:bg-red-600 w-full rounded'
        onClick={() => {
          localStorage.removeItem('userCredentials');
          navigate('/login');
        }}
      >
        Log out
      </button>
    </section>
  );
};

export default DropDown;