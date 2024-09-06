import React, { useEffect, useState } from 'react'
import { IoReorderThreeOutline } from "react-icons/io5";
import { FiPlus } from "react-icons/fi";
import useMobileSize from '../hooks/useMobileSize';
import { FaTrash } from "react-icons/fa";

const SideBar = ({sideBar,setSideBar,items,select,setSelect,handleDelete}) => {

    const isMobile=useMobileSize()
    
  return (
    <div className={`h-full`}>
        <IoReorderThreeOutline className='fixed text-6xl m-2 text-white' onClick={()=>{setSideBar(!sideBar)}} />
        <div className={`h-full overflow-auto ${isMobile?'w-52':'w-72'} bg-slate-950 flex flex-col gap-4 text-white  ${(isMobile && !sideBar) && 'hidden'} ${(!isMobile && sideBar)&&'hidden'}`}>
        <div className='text-center p-2 flex flex-col gap-4'>
        <IoReorderThreeOutline className='text-6xl' onClick={()=>setSideBar(!sideBar)} />
        <button className='flex w-40 bg-gray-200 rounded-3xl items-center p-2 text-black hover:bg-gray-300' onClick={()=>setSelect(null)}>
            <FiPlus className='text-4xl' />
            New Item
        </button>
        </div>
        <div className='h-full overflow-auto p-2'>
            <ul className='overflow-auto'>
                {items.map(item=>(
                    <li key={item.id} className={` hover:bg-gray-500 rounded-md flex justify-between items-center ${select===item.id?'bg-gray-500':''}`} >
                        <div className='p-2 w-full'  onClick={()=>setSelect(item.id)}>
                            {item.content.length>25?item.content.slice(0,20)+'....':item.content}
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