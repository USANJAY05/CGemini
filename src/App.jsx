import React, { useState, useEffect, useContext } from 'react';
import { Route, Routes, useNavigate } from 'react-router';
import Signup from './components/Signup';
import Login from './components/Login';
import Main from './components/Main';
import Missing from './components/Missing';
import { context } from './context/context';

const App = () => {
  const {
    onSent,
    items,
    setItems,
    handleCollection,
    select,
    setSelect,
    loading,
    setLoading,
    collections,
    setCollections,
  } = useContext(context);

  const [previousOutput, setPreviousOutput] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [type, setType] = useState('');
  const navigate = useNavigate();

  // Load collections from localStorage on mount
  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem('CGemini-collections'));
    setCollections(storage || []);
  }, [setCollections]);

  // Update previousOutput when selection or collections change
  useEffect(() => {
    if (!select) {
      setPreviousOutput([]);
      return;
    }

    const selectedItem = collections.find((item) => item.id === select);
    if (selectedItem) {
      const objContent = selectedItem.items.map((item) => ({ content: item.content, type: 'User' }));
      const objData = selectedItem.items.map((item) => ({ content: item.data, type: 'Bot' }));
      setPreviousOutput([...objContent, ...objData]);
    } else {
      setPreviousOutput([]);
    }
  }, [select, collections]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return; // Prevent double submission

    if (type.trim() === '') {
      setError('Type cannot be empty');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const prompt = `${previousOutput.map((item) => item.content).join('\n')}\n${type}`;
      const data = await onSent(prompt);
      handleCollection(type, data);

      // Update previousOutput immediately
      setPreviousOutput((prev) => [
        ...prev,
        { content: type, type: 'User' },
        { content: data, type: 'Bot' },
      ]);

      setType('');
    } catch (err) {
      setError('An error occurred while sending data.');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit1 = async (inputType) => {
    if (loading) return; // Prevent double submission

    if (!inputType || inputType.trim() === '') {
      setError('Input cannot be empty');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const prompt = `${previousOutput.map((item) => item.content).join('\n')}\n${inputType}`;
      const data = await onSent(prompt);
      handleCollection(inputType, data);

      // Append both user input and bot response here for consistency
      setPreviousOutput((prev) => [
        ...prev,
        { content: inputType, type: 'User' },
        { content: data, type: 'Bot' },
      ]);

      setType('');
    } catch (err) {
      setError('An error occurred while sending data.');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = (id) => {
    const updatedItems = collections.filter((item) => item.id !== id);
    setCollections(updatedItems);
    localStorage.setItem('CGemini-collections', JSON.stringify(updatedItems));
    setSelect(null);
  };

  return (
    <div className="font-bold">
      <Routes>
        <Route
          path="/"
          element={
            <Main
              items={items}
              select={select}
              setSelect={setSelect}
              type={type}
              setType={setType}
              handleSubmit={handleSubmit}
              handleDelete={handleDelete}
              handleSubmit1={handleSubmit1}
              collections={collections}
              previousOutput={previousOutput}
              loading={loading} // Pass loading to UI for spinner control
              error={error}     // Pass error to UI for display
            />
          }
        />
        <Route
          path="/signup"
          element={
            <Signup
              email={email}
              password={password}
              setEmail={setEmail}
              setPassword={setPassword}
              error={error}
              setError={setError}
              navigate={navigate}
            />
          }
        />
        <Route
          path="/login"
          element={
            <Login
              email={email}
              password={password}
              setEmail={setEmail}
              setPassword={setPassword}
              error={error}
              setError={setError}
              navigate={navigate}
            />
          }
        />
        <Route path="*" element={<Missing />} />
      </Routes>
    </div>
  );
};

export default App;
