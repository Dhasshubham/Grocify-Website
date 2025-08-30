import React, { useState } from "react";
import Heading from "../Heading/Heading";
import ProductList from '../ProductList/ProductList'
import Cards from "../Cards/Cards";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const Products = () => {

    const categories =['All', 'Fruits','Vegetables','Dairy','SeaFood'];
    const [activeTab , setActiveTab] = useState("All");

    let filterItems = activeTab === 'All' ? ProductList :  ProductList.filter(item =>item.category=== activeTab) ;

    const renderCards = filterItems.slice(0,8).map(product=>{
        return (
            <Cards image={product.image} name={product.name} price={product.price} />
        )
    })

  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-10 md:py-20 ">
        <Heading highlight="Our" heading="Products" />

        {/* tabs  */}
        <div className="flex gap-3 justify-center mt-10 md:-mb-7 flex-wrap">
            {
                categories.map(category=>{
                    return (
                        <button key={category}
                        className={`px-5 py-2 text-lg rounded-lg cursor-pointer
                        ${activeTab===category ? 'bg-gradient-to-b from-orange-400 to-orange-600 text-white':'bg-zinc-100'} `} onClick={()=>setActiveTab(category)}>
                            {category}
                        </button>
                    )
                })
            }
        </div>

        {/* product listing  */}
        <div className="grid md:grid-cols-4 grid-cols-1 gap-9 mt-20 "> {renderCards}</div>
      </div>

      <div className="md:-mt-7 mx-auto w-fit mt-7">
        <Link to='/allproducts' className='bg-gradient-to-b from-red-500 to-orange-500 text-white px-8 py-3 rounded-lg md:text-lg text-md hover:scale-105 transition-all duration-300 hover:to-orange-600 to cursor-pointer' >View All</Link>
           
      </div>
    </section>
  );
};

export default Products;
