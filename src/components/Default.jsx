import React from 'react'
import bot from '../assets/cat.png'

const Default = ({setType}) => {
  return (
    <div className='flex flex-col items-center gap-10 h-full mt-32'>
        <img className='w-24 bg-white rounded-[50%]' src={bot} alt="" />
        <div className='flex gap-10'>
        <div onClick={(e)=>setType("Explain programming")} className='w-40 p-3 border hover:bg-slate-800 rounded-lg flex items-center'>
        Explain programming
            </div>
            <div onClick={(e)=>setType("Explain about the internet")} className='w-40 p-3 border hover:bg-slate-800 rounded-lg flex items-center'>
            Explain about the internet
            </div>
            <div onClick={(e)=>setType("Teach me Python")} className='w-40 p-3 border hover:bg-slate-800 rounded-lg flex items-center'>
            Teach me Python
            </div>
        </div>
    </div>
  )
}

export default Default