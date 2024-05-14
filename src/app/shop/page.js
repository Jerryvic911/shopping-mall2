import Navbar from '@/app/components/Navbar'
import {PRODUCTS} from "@/app/Products"
import React from 'react'
import Product from "@/app/shop/product"
import Footer from '../components/Footer';




function Cart() {
  return (
    <div className=' bg-secondary h-full text-black'>
      <Navbar/>


      
      <div className='grid grid-cols-4 mt-[5rem] ml-20 mr-20 gap-7'>
        {PRODUCTS.map ((product) =><Product data={product}/>)}
      </div>

      <div>
        
      </div>

    <Footer/>
    </div>
  )
}

export default Cart
