import React from 'react'


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

        <div>
            
        </div>
    </nav>
   </header>
  )
}

export default Navbar
