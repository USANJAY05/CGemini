import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { IoIosSend } from "react-icons/io";
import SideBar from './SideBar';
import Header from './Header';
import contact from '../assets/contact.png';
import bot from '../assets/cat.png';
import Default from './Default';

const Main = ({ items, select, setSelect, type, setType, handleSubmit,handleDelete }) => {
  const navigate = useNavigate();
  const [sideBar, setSideBar] = useState(false);

  useEffect(() => {
    const userCredentials = JSON.parse(localStorage.getItem('userCredentials'));

    if (!userCredentials) {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <main className='w-full h-screen bg-green-400 flex'>
      <SideBar sideBar={sideBar} setSideBar={setSideBar} items={items} setSelect={setSelect} select={select} handleDelete={handleDelete} />
      <section className='w-full flex flex-col dark:bg-black dark:text-white items-center'>
        <Header sideBar={sideBar} setSideBar={setSideBar} />
        <div className='lg:w-[750px] w-full h-full flex flex-col overflow-auto gap-3 p-3'>
          {select==null?(<Default setType={setType} />):''}
          {items.filter(item => item.id === select).map(item => (
            <div key={item.id}>
              <div  className='rounded-md p-3 flex gap-2'>
                <img 
                  src={item.type === 'human' ? contact : bot} 
                  className='w-10 h-10 bg-white rounded-3xl' 
                  alt="" 
                />
                <p>{item.content}</p>
              </div>
              <div className='rounded-md p-3 flex gap-2'>
                <img 
                  src={item.type === 'bot' ? contact : bot} 
                  className='w-10 h-10 bg-white rounded-3xl' 
                  alt="" 
                />
                <p>{item.data}</p>
              </div>
            </div>
          ))}
        </div>

        <form className='pb-12 w-full flex justify-center' onSubmit={handleSubmit}>
          <div className='w-full sm:w-[500px] lg:w-[700px] xl:w-[900px] relative'>
            <input 
              className='rounded-sm bg-inherit border p-3 pr-12 w-full outline-none' 
              autoFocus 
              placeholder='Enter the text' 
              type="text" 
              value={type} 
              onChange={(e) => setType(e.target.value)} 
            />
            <IoIosSend 
              className='text-4xl absolute top-2 right-3 cursor-pointer' 
              onClick={(e) => handleSubmit(e)} 
            />
          </div>
        </form>
      </section>
    </main>
  );
}

export default Main;