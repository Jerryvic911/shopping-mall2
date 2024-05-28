"use client";
import Link from 'next/link'
import InputDetails from './InputDetails'
import React from "react";
import { useRecoilValue } from "recoil";
import { cartAtom } from "../atoms/cart";
import "@/app/components/Navbar.css"

function CheckOutPage() {
  const carts = useRecoilValue(cartAtom);
 
  return (
    <div>
        <div className='checkout-head bg-white h-12 w-full flex flex-row overflow-x-hidden'>
            <Link href="/">
            <h1 className='pt-3 pl-10 text-primary text-lg font-bold'>BWE</h1>
            </Link>
         
        <h1 className=' md:text-center md:ml-[30rem] pt-3 uppercase font-bold text-2xl'>Fill in details</h1>

        <Link href="/cart">
        <div className=" md:hidden relative pt-5 md:ml-[8rem]">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </div>
          <div className="bg-black absolute left-5  flex text-xs font-[900] items-center bottom-3 justify-center rounded-full w-6 h-6 text-white">
            {carts.reduce((acc, curr) => acc + curr.qty, 0)}
          </div>
        </div>
      </Link>
        </div>
     

     <div>
        <InputDetails/>
     </div>
    </div>
  )
}

export default CheckOutPage

