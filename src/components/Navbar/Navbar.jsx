import React from 'react'
import { GoHeartFill } from 'react-icons/go';
import { HiShoppingBag } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import { TbMenu2 } from "react-icons/tb";

const Navbar = () => {
  return (
   <header className=' bg-white fixed top-0 right-0 left-0'>
    <nav className='items-center flex justify-between max-w-[1400px] mx-auto md:h-[14vh] px-10 h-[12vh]'>
        {/* Logo */}
        <a href="" className='text-3xl font-bold'>
            Gr<span className='text-orange-500 uppercase'>o</span>cify
        </a>

        {/* Desktop Menu */}
        <ul className='hidden items-center gap-x-15 md:flex'>
            <li><a href="" className='font-semibold tracking-wider text-orange-500 hover:text-orange-500'>Home</a></li>
            <li><a href="" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>About Us</a></li>
            <li><a href="" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Process</a></li>
            <li><a href="" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Contact Us</a></li>
        </ul>

        {/* Nav Action  */}

        <div className='flex items-center gap-x-10'>

            {/* input field */}
            <div className='hidden md:flex p-1 border-2 border-orange-500 rounded-full gap-x- '>
                <input type="text" name='text' id='text' placeholder='Search...' autoComplete='off' className='flex-1 height-[5vh] px-3 focus:outline-none ml-1'/>
                <button className='bg-gradient-to-b from-red-600 to-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl'><IoIosSearch /></button>
            </div>

            <a href="" className='text-zinc-800 text-xl'>
                <GoHeartFill />
            </a>
              <a href="" className='text-zinc-800 text-xl'>
                <HiShoppingBag />
            </a>
            {/* Hamburger */}
            <a href="" className='text-3xl text-zinc-800 md:hidden  '>
               <TbMenu2 />
            </a>


        </div>

             {/* Mobile Menu  */}
           <ul className='md:hidden items-center gap-x-15 flex-col gap-y-15 absolute'>
            <li><a href="" className='font-semibold tracking-wider text-orange-500 hover:text-orange-500'>Home</a></li>
            <li><a href="" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>About Us</a></li>
            <li><a href="" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Process</a></li>
            <li><a href="" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Contact Us</a></li>
        </ul>
    </nav>
   </header>
  )
}

export default Navbar
