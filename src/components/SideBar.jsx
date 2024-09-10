import React, { useEffect, useState } from 'react'
import { IoReorderThreeOutline } from "react-icons/io5";
import { FiPlus } from "react-icons/fi";
import useMobileSize from '../hooks/useMobileSize';
import { FaTrash } from "react-icons/fa";
import useClickOutside from '../hooks/useClickOutside';

const SideBar = ({sideBar,setSideBar,items,select,setSelect,handleDelete,collections}) => {

    const isMobile=useMobileSize()
    const sideBarRef=useClickOutside(()=>setSideBar(false))
    
  return (
    <div className={`h-full ${isMobile &&'fixed z-20'}`}>
        <IoReorderThreeOutline className='fixed text-6xl m-2 dark:text-white' onClick={()=>{setSideBar(!sideBar)}} />
        <div ref={isMobile?sideBarRef:null} className={`h-full overflow-auto ${isMobile?'w-60':'w-72'} bg-white text-black shadow-md dark:bg-slate-950 flex flex-col gap-4 dark:text-white  ${(isMobile && !sideBar) && 'hidden'} ${(!isMobile && sideBar)&&'hidden'}`}>
        <div className='text-center p-2 flex flex-col gap-4'>
        <IoReorderThreeOutline className='z-10 text-6xl dark:text-white ' onClick={()=>setSideBar(!sideBar)} />
        <button className='flex w-40 bg-gray-200 rounded-3xl items-center p-2 text-black hover:bg-gray-300' onClick={()=>setSelect(null)}>
            <FiPlus className='text-4xl' />
            New Item
        </button>
        </div>
        <div className='h-full overflow-auto p-2'>
            <ul className='overflow-auto hover:cursor-pointer'>
                {collections.map(item=>(
                    <li key={item.id} className={` hover:bg-gray-500 rounded-md flex justify-between items-center ${select===item.id?'bg-gray-500':''}`} >
                        <div className='p-2 w-full'  onClick={()=>{setSelect(item.id) , isMobile?setSideBar(!sideBar):''}}>
                            {item.id.length>25?item.id.slice(0,20)+'....':item.id}
                        </div>
                        <FaTrash onClick={()=>handleDelete(item.id)} className='text-2xl w-10 hover:text-red-500 text-gray-950' /></li>
                ))}
            </ul>
        </div>
    </div>
</div>
        
  )
}

export default SideBar