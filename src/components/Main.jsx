import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import { IoIosSend } from "react-icons/io";
import SideBar from './SideBar';
import Header from './Header';
import contact from '../assets/contact.png';
import bot from '../assets/Designer-9.png';
import Default from './Default';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/atom-one-dark.css'; // Import the dark theme CSS file for syntax highlighting
import CopyButton from './CopyButton';
import TextReader from './TextReader'; // Import the TextReader component
import SpeechToText from './SpeechToText'; // Import the SpeechToText component
import LoadingSpinner from './LoadingSpinner';
import useMobileSize from '../hooks/useMobileSize';

const Main = ({ items, select, setSelect, type, setType, handleSubmit, handleDelete, loading, handleSubmit1, collections }) => {
  const navigate = useNavigate();
  const [sideBar, setSideBar] = useState(false);
  const inputRef = useRef(null);
  const isMobile=useMobileSize()

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    const userCredentials = JSON.parse(localStorage.getItem('userCredentials'));
    if (!userCredentials) {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <main className='w-full h-screen bg-white flex'>
      <SideBar
        sideBar={sideBar}
        setSideBar={setSideBar}
        items={items}
        setSelect={setSelect}
        select={select}
        handleDelete={handleDelete}
        collections={collections}
      />
      <section className='w-full flex flex-col dark:bg-black dark:text-white items-center'>
        <Header sideBar={sideBar} setSideBar={setSideBar} />
        <div className={`lg:w-[750px] ${!sideBar && !isMobile? 'sm:w-[500px]':'lg:w-[750px] sm:w-[650px] w-full'} h-full flex flex-col overflow-auto gap-3 p-3`}>
          {select === null ? (
            <Default setType={setType} handleSubmit={handleSubmit1} />
          ) : (
            collections.filter(item => item.id === select).map(item => (
              <section key={item.id}>
                {item.items.map(subItem => (
                  <div key={subItem.id}>
                    <div className='rounded-md p-3 flex flex-row-reverse items-end gap-2'>
                      <img 
                        src={subItem.type === 'human' ? contact : bot} 
                        className='w-10 h-10 bg-white rounded-3xl' 
                        alt="Contact or Bot" 
                      />
                      <p className='bg-gray-200 dark:bg-gray-800 px-4 py-2 rounded'>{subItem.content}</p>
                    </div>
                    <div className='rounded-md p-3 flex gap-1 flex-col'>
                      <img 
                        src={subItem.type === 'bot' ? contact : bot} 
                        className='w-10 h-10 bg-white rounded-3xl' 
                        alt="Contact or Bot" 
                      />
                      <div id={`content-${subItem.id}`} className='code-overflow markdown'>
                        <ReactMarkdown
                          children={subItem.data}
                          remarkPlugins={[remarkGfm]}
                          rehypePlugins={[rehypeHighlight]}
                        />
                        <div className='flex gap-4'>
                          <CopyButton targetId={`content-${subItem.id}`} title="Copy rendered text" />
                          <TextReader text={subItem.data} />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </section>
            ))
          )}
        </div>

        <form className='pb-12 w-full flex justify-center' onSubmit={e => {
          e.preventDefault();
          handleSubmit(e);
          handleFocus(); // Focus on the input after submit
        }}>
          <div className='w-full px-4 sm:w-full sm:mx-10 lg:w-[80%] xl:w-[900px] relative'>
            <input
              className='rounded-sm bg-inherit border p-3 pr-12 w-full outline-none'
              autoFocus
              placeholder='Enter the text'
              type="text"
              ref={inputRef}
              value={type}
              onChange={(e) => setType(e.target.value)}
            />
            {loading ? (
              <LoadingSpinner/>
              // <h1 className='text-xl text-gray-500'>Loading.....</h1>
            ) : (
              <IoIosSend
                className='text-4xl absolute top-2 right-6 cursor-pointer'
                onClick={e => {
                  e.preventDefault();
                  handleSubmit(e);
                  handleFocus(); // Focus on the input after submit
                }}
              />
            )}
          </div>
        </form>

        {/* <SpeechToText onTextDetected={handleTextDetected} /> Add SpeechToText component */}
      </section>
    </main>
  );
}

export default Main;