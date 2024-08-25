import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import {auth} from '../firebase'
import { signInWithEmailAndPassword } from "firebase/auth";


const Login = ({email,setEmail,password,setPassword,error,setError,navigate}) => {

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth,email,password)
            console.log("login successfully")
            const userCredentials = { email, password };
            localStorage.setItem('userCredentials', JSON.stringify(userCredentials));
            navigate('/')
        } catch (error) {
            error=error.code.slice(5,error.code.length)
            console.log(error)
            setError(error)
        }
        finally{
            setTimeout(() => {
                setError('')
            }, 4000);
        }
    }
    useEffect(()=>{
        try {
            const userCredentials = JSON.parse(localStorage.getItem('userCredentials'));
            if(!userCredentials) throw Error("No crediential found")
            if(userCredentials){
                navigate('/')
              }
            else{
                navigate('login')
            }
        } catch (error) {
            console.error(error.message)
        }
    
      },[])

  return (
    <section className='grid grid-cols-2 h-screen'>
        <section className='flex items-center justify-center bg-gray-200'>
            <img src="https://png.pngtree.com/background/20210709/original/pngtree-blue-artificial-intelligent-technology-picture-image_956962.jpg" className='w-full h-full' alt=""/>
        </section>
        <section className='bg-slate-950 flex flex-col items-center gap-16 pt-20  dark:text-white'>
            <h1 className='text-3xl'>C-Gemini</h1>
            <div className='w-96 p-8 border border-slate-800 rounded flex flex-col gap-10'>
                <h2 className='text-2xl text-center'>Login</h2>
                <form className='w-full flex flex-col gap-6' onSubmit={handleSubmit}>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="email" className={error&&'text-red-500'}>Email</label>
                        <input className={`px-2 p-1 rounded border border-slate-800 outline-none dark:bg-slate-950 ${error && 'border-red-500'}`} placeholder='abc@example.com' id='email' onChange={(e)=>setEmail(e.target.value)} />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="password" className={error&&'text-red-500'}>Password</label>
                        <input className={`px-2 p-1 rounded border border-slate-800 outline-none dark:bg-slate-950 ${error && 'border-red-500'}`} placeholder='password' id='password' onChange={(e)=>setPassword(e.target.value)} />
                        <small className='text-red-500'>{error}</small>

                    </div>
                    
                    <input className='p-1 bg-blue-500 rounded hover:bg-blue-600' type="submit" value="Login" />
                </form>
                <div className='flex flex-col gap-5'>
                    <div className='flex items-center gap-4'><hr className='w-full border-slate-700' /> or <hr className='w-full border-slate-700' /></div>
                    <div className='flex justify-center gap-8'>
                        <a href=""><img className='w-8' src="https://imgs.search.brave.com/Nv4129r-xJgP8ve9P-rlAy7BHaff8OoRyN1D5jdCcVg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMtMDAuaWNvbmR1/Y2suY29tL2Fzc2V0/cy4wMC9nb29nbGUt/aWNvbi0yNTZ4MjU2/LWhxeGh1N2o3LnBu/Zw" alt="" /></a>
                        <a href=""> <img className='w-8' src="https://imgs.search.brave.com/lZtSHU0xcSaZfNN6zHo9A4aLmiNBnFIEpmjesp6VYeA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvbWljcm9zb2Z0/L21pY3Jvc29mdF9Q/TkcxMy5wbmc" alt="" /></a>
                    </div>
                    <small className='text-center'>Don't have an account?<Link className='text-blue-400 font-medium' to={'/signup'}> Signup</Link></small>
                </div>
            </div>
        </section>

    </section>
  )
}

export default Login