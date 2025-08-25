import React from 'react'
import { GoHeartFill } from 'react-icons/go';
import { HiShoppingBag } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";

const Navbar = () => {
  return (
   <header className='bg-white'>
    <nav className='items-center flex justify-between max-w-[1400px] mx-auto h-[14vh] px-10'>
        {/* Logo */}
        <a href="" className='text-3xl font-bold'>
            Gr<span className='text-orange-500 uppercase'>o</span>cify
        </a>

        {/* Desktop Menu */}
        <ul className='flex items-center gap-x-15'>
            <li><a href="" className='font-semibold tracking-wider text-orange-500 hover:text-orange-500'>Home</a></li>
            <li><a href="" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>About Us</a></li>
            <li><a href="" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Process</a></li>
            <li><a href="" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Contact Us</a></li>
        </ul>

        {/* Nav Action  */}

        <div className='flex items-center gap-x-10'>

            {/* input field */}
            <div className='flex p-1 border-2 border-orange-500 rounded-full gap-x- '>
                <input type="text" name='text' id='text' placeholder='Search...' autoComplete='off' className='flex-1 height-[5vh] px-3 focus:outline-none ml-1'/>
                <button className='bg-gradient-to-b from-red-600 to-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl'><IoIosSearch /></button>
            </div>

            <a href="" className='text-zinc-800 text-xl'>
                <GoHeartFill />
            </a>
              <a href="" className='text-zinc-800 text-xl'>
                <HiShoppingBag />
            </a>
            


        </div>
    </nav>
   </header>
  )
}

export default Navbar
