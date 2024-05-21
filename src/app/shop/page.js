"use client"
import Navbar from '@/app/components/Navbar'
import {PRODUCTS} from "@/app/Products"
import React, {useState} from 'react'
import Product from "@/app/shop/product"
import Footer from '../components/Footer';
import { Modal } from '../components/Modal';

function Cart() {
  let [isOpen, setIsOpen] = useState(false)
  let [currentProduct, setCurrentProduct] = useState()


  const toggleModal = (id,  productName, productImage, price, productInfo) => {
    setIsOpen(!isOpen)
    setCurrentProduct({id, productImage, productName, price, productInfo})
  }
   const closeModal = () =>{
    setIsOpen(false)
   }


   console.log(currentProduct, "current pro")
  

  return (
    <div className=' bg-secondary h-full text-black'>
      <Navbar/>
      <div className='grid grid-cols-4 mt-[5rem] ml-20 mr-20 gap-7'>
        {PRODUCTS.map ((product) =><Product data={product} toggleModal={toggleModal}/>)}
      </div>
      <div>
        {isOpen && <Modal currentProduct={currentProduct} closeModal={closeModal}/>}
      </div>
    <Footer/>
    </div>
  )
}

export default Cart
