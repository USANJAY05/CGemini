import React, { useEffect, useState } from 'react'
import { IoReorderThreeOutline } from "react-icons/io5";
import { FiPlus } from "react-icons/fi";
import useMobileSize from '../hooks/useMobileSize';

const SideBar = ({sideBar,setSideBar}) => {
    // const [sideBar,setSideBar]=useState(false)
    const isMobile=useMobileSize()
  
    // const handleResize = () => {
    //   setIsMobile(window.innerWidth < 800);
    // };
    // useEffect(()=>{
    //     window.addEventListener('resize', handleResize);
    //     return () => window.removeEventListener('resize', handleResize);
    //   }, []);
    
  return (
    <div className={`h-full`}>
        <IoReorderThreeOutline className='fixed text-6xl m-2 text-white' onClick={()=>{setSideBar(!sideBar)}} />
        <div className={`h-full overflow-auto ${isMobile?'w-52':'w-72'} bg-slate-950 flex flex-col gap-4 text-white  ${(isMobile && !sideBar) && 'hidden'}`}>
        <div className='text-center p-2 flex flex-col gap-4'>
        <IoReorderThreeOutline className='text-6xl' onClick={()=>setSideBar(!sideBar)} />
        <button className='flex w-40 bg-gray-200 rounded-3xl items-center p-2 text-black hover:bg-gray-300'>
            <FiPlus className='text-4xl' />
            New Item
        </button>
        </div>
        <div className='h-full overflow-auto p-2'>
            <ul className='overflow-auto'>
            <li className='p-2 hover:bg-gray-500 rounded-md'>What is the name of my dog</li>
            <li className='p-2 hover:bg-gray-500 rounded-md'>What is the name</li>
            <li className='p-2 hover:bg-gray-500 rounded-md'>What is the name</li>
            <li className='p-2 hover:bg-gray-500 rounded-md'>What is the name</li>
            <li className='p-2 hover:bg-gray-500 rounded-md'>What is the name</li>
            <li className='p-2 hover:bg-gray-500 rounded-md'>What is the name</li>
            <li className='p-2 hover:bg-gray-500 rounded-md'>What is the name</li>
            <li className='p-2 hover:bg-gray-500 rounded-md'>What is the name</li>
            <li className='p-2 hover:bg-gray-500 rounded-md'>What is the name</li>
            <li className='p-2 hover:bg-gray-500 rounded-md'>What is the name</li>
            <li className='p-2 hover:bg-gray-500 rounded-md'>What is the name</li>
            <li className='p-2 hover:bg-gray-500 rounded-md'>What is the name</li>
            <li className='p-2 hover:bg-gray-500 rounded-md'>What is the name</li>
            <li className='p-2 hover:bg-gray-500 rounded-md'>What is the name</li>
            <li className='p-2 hover:bg-gray-500 rounded-md'>What is the name</li>
            <li className='p-2 hover:bg-gray-500 rounded-md'>What is the name</li>
            <li className='p-2 hover:bg-gray-500 rounded-md'>What is the name</li>
            <li className='p-2 hover:bg-gray-500 rounded-md'>What is the name</li>
            <li className='p-2 hover:bg-gray-500 rounded-md'>What is the name</li>
            <li className='p-2 hover:bg-gray-500 rounded-md'>What is the name</li>
            <li className='p-2 hover:bg-gray-500 rounded-md'>What is the name</li>
            <li className='p-2 hover:bg-gray-500 rounded-md'>What is the name</li>
            <li className='p-2 hover:bg-gray-500 rounded-md'>What is the name</li>
            <li className='p-2 hover:bg-gray-500 rounded-md'>What is the name</li>
            <li className='p-2 hover:bg-gray-500 rounded-md'>What is the name</li>
            <li className='p-2 hover:bg-gray-500 rounded-md'>What is the name</li>
            <li className='p-2 hover:bg-gray-500 rounded-md'>What is the name</li>
            <li className='p-2 hover:bg-gray-500 rounded-md'>What is the name</li>
            <li className='p-2 hover:bg-gray-500 rounded-md'>What is the name</li>
            <li className='p-2 hover:bg-gray-500 rounded-md'>What is the name</li>
            <li className='p-2 hover:bg-gray-500 rounded-md'>What is the name</li>
            <li className='p-2 hover:bg-gray-500 rounded-md'>What is the name</li>
            <li className='p-2 hover:bg-gray-500 rounded-md'>What is the name</li>
            <li className='p-2 hover:bg-gray-500 rounded-md'>What is the name</li>
            <li className='p-2 hover:bg-gray-500 rounded-md'>What is the name</li>
            <li className='p-2 hover:bg-gray-500 rounded-md'>What is the name</li>
            <li className='p-2 hover:bg-gray-500 rounded-md'>What is the name</li>
            <li className='p-2 hover:bg-gray-500 rounded-md'>What is the name</li>
            <li className='p-2 hover:bg-gray-500 rounded-md'>What is the name</li>
            <li className='p-2 hover:bg-gray-500 rounded-md'>What is the name</li>
            <li className='p-2 hover:bg-gray-500 rounded-md'>What is the name</li>

                
            </ul>
        </div>
    </div>
        </div>
        
  )
}

export default SideBar