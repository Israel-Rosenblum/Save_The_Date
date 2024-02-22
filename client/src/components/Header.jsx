import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from 'react-router-dom';

export default function Header() {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }
    const clearStorage = () => {
        sessionStorage.clear();
    }
    return (
        <div className='text-white flex justify-between items-center  h-24 max-w-[1240px] mx-auto px-4  border-b '>
            <h1 onClick={clearStorage} className='w-full text-4xl font-bold text-[#101519]' >
                <Link to={'/'}>   SAVE THE DATE</Link></h1>
            <ul className=' hidden md:flex'>
                <li className='p-4'>אודות</li>
                <li className='p-4' >
                    <Link to={'/login'}> התחברות </Link>
                </li>
                <li className='p-4'>יצירת קשר </li>
            </ul>

            <div onClick={handleNav} className='block md:hidden  '>
                {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
            </div >

            <div className={nav ? 'ml-20 fixed left-0 top-0 w-[35%] ease-in-out duration-400 bg-[#182004] ' : 'fixed left-[-100%]'}>
                <ul className='p-4  ' >
                    <li className='p-4 border-b'>אודות</li>
                    <li className='p-4 border-b'>התחברות</li>
                    <li className='p-4'>יצירת קשר </li>
                </ul>
            </div>
        </div>

    )
}
