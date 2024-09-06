import React, { useContext } from 'react'
import { useNavigate } from 'react-router';
import { context } from '../context/context';

const DropDown = ({dropDown,setDropDown}) => {
  const {items,setItems,setSelect}=useContext(context)

    const userCredentialsString = localStorage.getItem('userCredentials');
    const userCredentials = JSON.parse(userCredentialsString);
    const email = userCredentials?.email;
    const navigate=useNavigate()
    const handleErase=()=>{
      localStorage.removeItem('CGemini-data')
      setDropDown(!dropDown)
      setItems([])
      setSelect(null)
    }

  return (
    <section className='fixed p-2 rounded-lg top-14 right-3 dark:bg-slate-800 '>
        <h2>{email}</h2>
        <button className='hover:bg-red-600 w-full rounded' onClick={()=>handleErase()}>Erase all data</button>
        <button className='hover:bg-red-600 w-full rounded' onClick={()=>{localStorage.removeItem('userCredentials'),navigate('/login')}}>Log out</button>
    </section>
  )
}

export default DropDown