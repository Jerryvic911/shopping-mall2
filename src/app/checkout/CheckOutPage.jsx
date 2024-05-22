"use client";
import Link from 'next/link'
import InputDetails from './InputDetails'
import React from "react";

function CheckOutPage() {

 
  return (
    <div>
        <div className='bg-white h-12 flex'>
            <Link href="/">
            <h1 className='pt-3 pl-10 text-primary text-lg font-bold'>BWE</h1>
            </Link>
         
        <h1 className=' ml-[35%] pt-3 uppercase font-bold text-2xl'>Fill in details</h1>
        </div>
     

     <div>
        <InputDetails/>
     </div>
    </div>
  )
}

export default CheckOutPage

