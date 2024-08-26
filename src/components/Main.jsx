import React from 'react'
import SideBar from './SideBar'
import { useNavigate } from 'react-router';
import { useEffect ,useState} from 'react';
import Header from './Header';
import { FaRegUserCircle } from "react-icons/fa";
import { FaRobot } from "react-icons/fa";
import contact from '../assets/contact.png'
import bot from '../assets/cat.png'


const Main = () => {
    const navigate = useNavigate();
    const [sideBar,setSideBar]=useState(false)


    useEffect(() => {
        const userCredentials = JSON.parse(localStorage.getItem('userCredentials'));
    
        if (!userCredentials) {
          navigate('/login');
        } else {
          navigate('/');
        }
      }, [navigate]);
  return (
    <main className='w-full h-screen bg-green-400 flex'>
        <SideBar sideBar={sideBar} setSideBar={setSideBar} />
        <section className=' w-full flex flex-col dark:bg-black dark:text-white items-center'>
            <Header sideBar={sideBar} setSideBar={setSideBar} />
            <div className='lg:w-[750px] w-full h-full  flex flex-col overflow-auto gap-3 p-3'>
                <div className=' rounded-md p-3 flex gap-2'>
                    <img src={contact} className='w-10 h-10' alt="" />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus saepe enim, quos distinctio, incidunt repellendus doloremque ratione quas nisi in fugit natus! At quae modi quaerat, tenetur voluptatibus recusandae esse itaque. Molestiae numquam ad sapiente labore laborum tenetur inventore </p>
                </div>
                <div className='  rounded-md p-3 flex gap-2 float-end'>
                    <img src={bot} className='w-10 h-10 rounded-3xl bg-white' alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae sint ducimus praesentium aliquid, quidem commodi quasi magnam veritatis unde. Veritatis consequatur autem numquam voluptatem reprehenderit consequuntur assumenda aut totam iste eos! Cumque sed, totam aut assumenda quam consequatur laudantium perspiciatis, officiis quod odit ullam asperiores, pariatur aliquam facilis quisquam voluptate.</p>
                </div>

                <div className=' rounded-md p-3 flex gap-2'>
                    <img src={contact} className='w-10 h-10' alt="" />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus saepe enim, quos distinctio, incidunt repellendus doloremque ratione quas nisi in fugit natus! At quae modi quaerat, tenetur voluptatibus recusandae esse itaque. Molestiae numquam ad sapiente labore laborum tenetur inventore </p>
                </div>
                <div className='  rounded-md p-3 flex gap-2 float-end'>
                    <img src={bot} className='w-10 h-10 rounded-3xl bg-white' alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae sint ducimus praesentium aliquid, quidem commodi quasi magnam veritatis unde. Veritatis consequatur autem numquam voluptatem reprehenderit consequuntur assumenda aut totam iste eos! Cumque sed, totam aut assumenda quam consequatur laudantium perspiciatis, officiis quod odit ullam asperiores, pariatur aliquam facilis quisquam voluptate.</p>
                </div>                <div className=' rounded-md p-3 flex gap-2'>
                    <img src={contact} className='w-10 h-10' alt="" />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus saepe enim, quos distinctio, incidunt repellendus doloremque ratione quas nisi in fugit natus! At quae modi quaerat, tenetur voluptatibus recusandae esse itaque. Molestiae numquam ad sapiente labore laborum tenetur inventore </p>
                </div>
                <div className='  rounded-md p-3 flex gap-2 float-end'>
                    <img src={bot} className='w-10 h-10 rounded-3xl bg-white' alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae sint ducimus praesentium aliquid, quidem commodi quasi magnam veritatis unde. Veritatis consequatur autem numquam voluptatem reprehenderit consequuntur assumenda aut totam iste eos! Cumque sed, totam aut assumenda quam consequatur laudantium perspiciatis, officiis quod odit ullam asperiores, pariatur aliquam facilis quisquam voluptate.</p>
                </div>                <div className=' rounded-md p-3 flex gap-2'>
                    <img src={contact} className='w-10 h-10' alt="" />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus saepe enim, quos distinctio, incidunt repellendus doloremque ratione quas nisi in fugit natus! At quae modi quaerat, tenetur voluptatibus recusandae esse itaque. Molestiae numquam ad sapiente labore laborum tenetur inventore </p>
                </div>
                <div className='  rounded-md p-3 flex gap-2 float-end'>
                    <img src={bot} className='w-10 h-10 rounded-3xl bg-white' alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae sint ducimus praesentium aliquid, quidem commodi quasi magnam veritatis unde. Veritatis consequatur autem numquam voluptatem reprehenderit consequuntur assumenda aut totam iste eos! Cumque sed, totam aut assumenda quam consequatur laudantium perspiciatis, officiis quod odit ullam asperiores, pariatur aliquam facilis quisquam voluptate.</p>
                </div>                <div className=' rounded-md p-3 flex gap-2'>
                    <img src={contact} className='w-10 h-10' alt="" />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus saepe enim, quos distinctio, incidunt repellendus doloremque ratione quas nisi in fugit natus! At quae modi quaerat, tenetur voluptatibus recusandae esse itaque. Molestiae numquam ad sapiente labore laborum tenetur inventore </p>
                </div>
                <div className='  rounded-md p-3 flex gap-2 float-end'>
                    <img src={bot} className='w-10 h-10 rounded-3xl bg-white' alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae sint ducimus praesentium aliquid, quidem commodi quasi magnam veritatis unde. Veritatis consequatur autem numquam voluptatem reprehenderit consequuntur assumenda aut totam iste eos! Cumque sed, totam aut assumenda quam consequatur laudantium perspiciatis, officiis quod odit ullam asperiores, pariatur aliquam facilis quisquam voluptate.</p>
                </div>                <div className=' rounded-md p-3 flex gap-2'>
                    <img src={contact} className='w-10 h-10' alt="" />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus saepe enim, quos distinctio, incidunt repellendus doloremque ratione quas nisi in fugit natus! At quae modi quaerat, tenetur voluptatibus recusandae esse itaque. Molestiae numquam ad sapiente labore laborum tenetur inventore </p>
                </div>
                <div className='  rounded-md p-3 flex gap-2 float-end'>
                    <img src={bot} className='w-10 h-10 rounded-3xl bg-white' alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae sint ducimus praesentium aliquid, quidem commodi quasi magnam veritatis unde. Veritatis consequatur autem numquam voluptatem reprehenderit consequuntur assumenda aut totam iste eos! Cumque sed, totam aut assumenda quam consequatur laudantium perspiciatis, officiis quod odit ullam asperiores, pariatur aliquam facilis quisquam voluptate.</p>
                </div>                <div className=' rounded-md p-3 flex gap-2'>
                    <img src={contact} className='w-10 h-10' alt="" />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus saepe enim, quos distinctio, incidunt repellendus doloremque ratione quas nisi in fugit natus! At quae modi quaerat, tenetur voluptatibus recusandae esse itaque. Molestiae numquam ad sapiente labore laborum tenetur inventore </p>
                </div>
                <div className='  rounded-md p-3 flex gap-2 float-end'>
                    <img src={bot} className='w-10 h-10 rounded-3xl bg-white' alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae sint ducimus praesentium aliquid, quidem commodi quasi magnam veritatis unde. Veritatis consequatur autem numquam voluptatem reprehenderit consequuntur assumenda aut totam iste eos! Cumque sed, totam aut assumenda quam consequatur laudantium perspiciatis, officiis quod odit ullam asperiores, pariatur aliquam facilis quisquam voluptate.</p>
                </div>                <div className=' rounded-md p-3 flex gap-2'>
                    <img src={contact} className='w-10 h-10' alt="" />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus saepe enim, quos distinctio, incidunt repellendus doloremque ratione quas nisi in fugit natus! At quae modi quaerat, tenetur voluptatibus recusandae esse itaque. Molestiae numquam ad sapiente labore laborum tenetur inventore </p>
                </div>
                <div className='  rounded-md p-3 flex gap-2 float-end'>
                    <img src={bot} className='w-10 h-10 rounded-3xl bg-white' alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae sint ducimus praesentium aliquid, quidem commodi quasi magnam veritatis unde. Veritatis consequatur autem numquam voluptatem reprehenderit consequuntur assumenda aut totam iste eos! Cumque sed, totam aut assumenda quam consequatur laudantium perspiciatis, officiis quod odit ullam asperiores, pariatur aliquam facilis quisquam voluptate.</p>
                </div>                <div className=' rounded-md p-3 flex gap-2'>
                    <img src={contact} className='w-10 h-10' alt="" />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus saepe enim, quos distinctio, incidunt repellendus doloremque ratione quas nisi in fugit natus! At quae modi quaerat, tenetur voluptatibus recusandae esse itaque. Molestiae numquam ad sapiente labore laborum tenetur inventore </p>
                </div>
                <div className='  rounded-md p-3 flex gap-2 float-end'>
                    <img src={bot} className='w-10 h-10 rounded-3xl bg-white' alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae sint ducimus praesentium aliquid, quidem commodi quasi magnam veritatis unde. Veritatis consequatur autem numquam voluptatem reprehenderit consequuntur assumenda aut totam iste eos! Cumque sed, totam aut assumenda quam consequatur laudantium perspiciatis, officiis quod odit ullam asperiores, pariatur aliquam facilis quisquam voluptate.</p>
                </div>                <div className=' rounded-md p-3 flex gap-2'>
                    <img src={contact} className='w-10 h-10' alt="" />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus saepe enim, quos distinctio, incidunt repellendus doloremque ratione quas nisi in fugit natus! At quae modi quaerat, tenetur voluptatibus recusandae esse itaque. Molestiae numquam ad sapiente labore laborum tenetur inventore </p>
                </div>
                <div className='  rounded-md p-3 flex gap-2 float-end'>
                    <img src={bot} className='w-10 h-10 rounded-3xl bg-white' alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae sint ducimus praesentium aliquid, quidem commodi quasi magnam veritatis unde. Veritatis consequatur autem numquam voluptatem reprehenderit consequuntur assumenda aut totam iste eos! Cumque sed, totam aut assumenda quam consequatur laudantium perspiciatis, officiis quod odit ullam asperiores, pariatur aliquam facilis quisquam voluptate.</p>
                </div>                <div className=' rounded-md p-3 flex gap-2'>
                    <img src={contact} className='w-10 h-10' alt="" />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus saepe enim, quos distinctio, incidunt repellendus doloremque ratione quas nisi in fugit natus! At quae modi quaerat, tenetur voluptatibus recusandae esse itaque. Molestiae numquam ad sapiente labore laborum tenetur inventore </p>
                </div>
                <div className='  rounded-md p-3 flex gap-2 float-end'>
                    <img src={bot} className='w-10 h-10 rounded-3xl bg-white' alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae sint ducimus praesentium aliquid, quidem commodi quasi magnam veritatis unde. Veritatis consequatur autem numquam voluptatem reprehenderit consequuntur assumenda aut totam iste eos! Cumque sed, totam aut assumenda quam consequatur laudantium perspiciatis, officiis quod odit ullam asperiores, pariatur aliquam facilis quisquam voluptate.</p>
                </div>                <div className=' rounded-md p-3 flex gap-2'>
                    <img src={contact} className='w-10 h-10' alt="" />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus saepe enim, quos distinctio, incidunt repellendus doloremque ratione quas nisi in fugit natus! At quae modi quaerat, tenetur voluptatibus recusandae esse itaque. Molestiae numquam ad sapiente labore laborum tenetur inventore </p>
                </div>
                <div className='  rounded-md p-3 flex gap-2 float-end'>
                    <img src={bot} className='w-10 h-10 rounded-3xl bg-white' alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae sint ducimus praesentium aliquid, quidem commodi quasi magnam veritatis unde. Veritatis consequatur autem numquam voluptatem reprehenderit consequuntur assumenda aut totam iste eos! Cumque sed, totam aut assumenda quam consequatur laudantium perspiciatis, officiis quod odit ullam asperiores, pariatur aliquam facilis quisquam voluptate.</p>
                </div>                <div className=' rounded-md p-3 flex gap-2'>
                    <img src={contact} className='w-10 h-10' alt="" />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus saepe enim, quos distinctio, incidunt repellendus doloremque ratione quas nisi in fugit natus! At quae modi quaerat, tenetur voluptatibus recusandae esse itaque. Molestiae numquam ad sapiente labore laborum tenetur inventore </p>
                </div>
                <div className='  rounded-md p-3 flex gap-2 float-end'>
                    <img src={bot} className='w-10 h-10 rounded-3xl bg-white' alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae sint ducimus praesentium aliquid, quidem commodi quasi magnam veritatis unde. Veritatis consequatur autem numquam voluptatem reprehenderit consequuntur assumenda aut totam iste eos! Cumque sed, totam aut assumenda quam consequatur laudantium perspiciatis, officiis quod odit ullam asperiores, pariatur aliquam facilis quisquam voluptate.</p>
                </div>                <div className=' rounded-md p-3 flex gap-2'>
                    <img src={contact} className='w-10 h-10' alt="" />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus saepe enim, quos distinctio, incidunt repellendus doloremque ratione quas nisi in fugit natus! At quae modi quaerat, tenetur voluptatibus recusandae esse itaque. Molestiae numquam ad sapiente labore laborum tenetur inventore </p>
                </div>
                <div className='  rounded-md p-3 flex gap-2 float-end'>
                    <img src={bot} className='w-10 h-10 rounded-3xl bg-white' alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae sint ducimus praesentium aliquid, quidem commodi quasi magnam veritatis unde. Veritatis consequatur autem numquam voluptatem reprehenderit consequuntur assumenda aut totam iste eos! Cumque sed, totam aut assumenda quam consequatur laudantium perspiciatis, officiis quod odit ullam asperiores, pariatur aliquam facilis quisquam voluptate.</p>
                </div>                <div className=' rounded-md p-3 flex gap-2'>
                    <img src={contact} className='w-10 h-10' alt="" />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus saepe enim, quos distinctio, incidunt repellendus doloremque ratione quas nisi in fugit natus! At quae modi quaerat, tenetur voluptatibus recusandae esse itaque. Molestiae numquam ad sapiente labore laborum tenetur inventore </p>
                </div>
                <div className='  rounded-md p-3 flex gap-2 float-end'>
                    <img src={bot} className='w-10 h-10 rounded-3xl bg-white' alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae sint ducimus praesentium aliquid, quidem commodi quasi magnam veritatis unde. Veritatis consequatur autem numquam voluptatem reprehenderit consequuntur assumenda aut totam iste eos! Cumque sed, totam aut assumenda quam consequatur laudantium perspiciatis, officiis quod odit ullam asperiores, pariatur aliquam facilis quisquam voluptate.</p>
                </div>                <div className=' rounded-md p-3 flex gap-2'>
                    <img src={contact} className='w-10 h-10' alt="" />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus saepe enim, quos distinctio, incidunt repellendus doloremque ratione quas nisi in fugit natus! At quae modi quaerat, tenetur voluptatibus recusandae esse itaque. Molestiae numquam ad sapiente labore laborum tenetur inventore </p>
                </div>
                <div className='  rounded-md p-3 flex gap-2 float-end'>
                    <img src={bot} className='w-10 h-10 rounded-3xl bg-white' alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae sint ducimus praesentium aliquid, quidem commodi quasi magnam veritatis unde. Veritatis consequatur autem numquam voluptatem reprehenderit consequuntur assumenda aut totam iste eos! Cumque sed, totam aut assumenda quam consequatur laudantium perspiciatis, officiis quod odit ullam asperiores, pariatur aliquam facilis quisquam voluptate.</p>
                </div>                <div className=' rounded-md p-3 flex gap-2'>
                    <img src={contact} className='w-10 h-10' alt="" />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus saepe enim, quos distinctio, incidunt repellendus doloremque ratione quas nisi in fugit natus! At quae modi quaerat, tenetur voluptatibus recusandae esse itaque. Molestiae numquam ad sapiente labore laborum tenetur inventore </p>
                </div>
                <div className='  rounded-md p-3 flex gap-2 float-end'>
                    <img src={bot} className='w-10 h-10 rounded-3xl bg-white' alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae sint ducimus praesentium aliquid, quidem commodi quasi magnam veritatis unde. Veritatis consequatur autem numquam voluptatem reprehenderit consequuntur assumenda aut totam iste eos! Cumque sed, totam aut assumenda quam consequatur laudantium perspiciatis, officiis quod odit ullam asperiores, pariatur aliquam facilis quisquam voluptate.</p>
                </div>                <div className=' rounded-md p-3 flex gap-2'>
                    <img src={contact} className='w-10 h-10' alt="" />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus saepe enim, quos distinctio, incidunt repellendus doloremque ratione quas nisi in fugit natus! At quae modi quaerat, tenetur voluptatibus recusandae esse itaque. Molestiae numquam ad sapiente labore laborum tenetur inventore </p>
                </div>
                <div className='  rounded-md p-3 flex gap-2 float-end'>
                    <img src={bot} className='w-10 h-10 rounded-3xl bg-white' alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae sint ducimus praesentium aliquid, quidem commodi quasi magnam veritatis unde. Veritatis consequatur autem numquam voluptatem reprehenderit consequuntur assumenda aut totam iste eos! Cumque sed, totam aut assumenda quam consequatur laudantium perspiciatis, officiis quod odit ullam asperiores, pariatur aliquam facilis quisquam voluptate.</p>
                </div>                <div className=' rounded-md p-3 flex gap-2'>
                    <img src={contact} className='w-10 h-10' alt="" />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus saepe enim, quos distinctio, incidunt repellendus doloremque ratione quas nisi in fugit natus! At quae modi quaerat, tenetur voluptatibus recusandae esse itaque. Molestiae numquam ad sapiente labore laborum tenetur inventore </p>
                </div>
                <div className='  rounded-md p-3 flex gap-2 float-end'>
                    <img src={bot} className='w-10 h-10 rounded-3xl bg-white' alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae sint ducimus praesentium aliquid, quidem commodi quasi magnam veritatis unde. Veritatis consequatur autem numquam voluptatem reprehenderit consequuntur assumenda aut totam iste eos! Cumque sed, totam aut assumenda quam consequatur laudantium perspiciatis, officiis quod odit ullam asperiores, pariatur aliquam facilis quisquam voluptate.</p>
                </div>
            </div>
            <footer className=' pb-12 w-full flex justify-center'>
                <input className='rounded-sm bg-inherit border p-3 w-full sm:w-[500px] lg:w-[700px] xl:w-[900px] outline-none' placeholder='Enter the text' type="text" name="" id="" />
            </footer>
        </section>
    </main>
  )
}

export default Main