import React from 'react'
import Grocery from "../../assets/grocery.png"
import Button from '../Button/Button'

const Hero = () => {
  return (
   <section>
    <div className='max-w-[1400px] mx-auto px-10 flex items-center '>

      {/* Hero content */}
      <div className='flex-1'>
       <span className="bg-orange-100 text-orange-500 text-lg px-5 py-2 rounded-full">
  Export Best Quality...
</span>

        <h1 className='text-7xl/20 mt-4 font-bold '>
            Tasty Orange <br /><span className='text-orange-500' >Fruits</span> & <span className='text-orange-500'>Veggies</span> <br />In Your City
        </h1>
        <p className='text-zinc-600 text-lg max-w[530] mt-5 mb-10'>
           Bred for a high content of beneficial substances. Our products are all fresh and healthy.
        </p>
        <Button content="Shop Now"/>

      </div>


      {/* hero image */}
      <div className='flex-1'>
        <img src={ Grocery} alt="Hero Image" />
      </div>

    </div>
   </section>
  )
}

export default Hero
