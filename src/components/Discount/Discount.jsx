import React from 'react'
import Button from '../Button/Button'
import DiscountBg from '../../assets/fresh-fruits.png'

const Discount = () => {
  return (
   <section className='bg-zinc-100 bg-center bg-contain bg-no-repeat bg-right mt-20  ' style={{backgroundImage:`url(${DiscountBg})`}}>

    <div className=' max-w-[1400px] mx-auto px-10 flex py-10 md:flex-row flex-col'>

          <span className='md:text-9xl text-6xl text-orange-500 font-bold transform md:-rotate-90 h-fit md:self-center'>20%</span>

          <div className='max-w-[700px]'>
            <h3 className='md:text-7xl text-4xl text-zinc-800 font-bold  '>First Order Discount</h3>
            <p className='md:text-zinc-600 my-6'>Enjoy an exclusive first order discount on our grocery website! Shop fresh essentials and save big on your first purchase. Fast delivery and quality guaranteed.</p>
            <Button content='Get a Discount'/>
          </div>
    </div>
   </section>
  )
}

export default Discount
