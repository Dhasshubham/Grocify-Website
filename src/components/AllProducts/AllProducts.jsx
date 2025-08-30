import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import BgAppProduct from '../../assets/all-banner.jpg'

const AllProducts = () => {
  return (
    <div>
      <CategoryPage title="All Products" bgImage={BgAppProduct} categories={['All']}/>
    </div>
  )
}

export default AllProducts
