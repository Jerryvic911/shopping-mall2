import React from 'react'
import Image from "next/image";
import Shoe from "@/Images/Shoe.png";
import Backpack from "@/Images/Backpack.png";
import Watch from "@/Images/Watch.jpg";
import "../components/Navbar.css"
import Link from 'next/link';

function Collection() {
  return (
    <div className=''>
      <div className="mt-[4rem] ml-16 w-full collection ">
        <h2 className=" text-4xl font-semibold">
          <span className=" border-b-2 border-[#eea034]">Our</span> Collection
        </h2>

        <div className="img flex gap-5 rounded-md mt-10 mr-10 justify-center ">
          <div className="rounded-md">
            <div className="bg-[#fbebd4] w-[22rem] h-[25rem] ml-[1rem] rounded-md">
              <Image
                src={Backpack}
                width={300}
                height={300}
                alt="/"
                className="w-[22rem] h-[20rem] ml-3"
                style={{
                  objectFit: "cover",
                }}
              />


              <div className="  bg-white w-[14rem] h-[5rem] ">
                <h1 className="ml-4 pt-3 font-semibold text-2xl">
                  Bag Collection
                </h1>
                <Link
                  href="/"
                  className="text-text-primary font-medium text-sm underline ml-4"
                >
                  Shop Now
                </Link>
              </div>
              
            </div>
          </div>

          <div className="">
            <div className="bg-[#fbebd4] w-[22rem] h-[20rem] rounded-md">
              <Image
                src={Shoe}
                width={300}
                height={300}
                alt="/"
                className=" w-[25rem] h-[15rem]"
                style={{
                  objectFit: "cover",
                }}
              />
              <div className=" pt-3 bg-white w-[14rem] h-[5.1rem]">
                <h1 className="text-2xl ml-4 font-semibold">Shoe collection</h1>
                <Link
                  href="/"
                  className=" text-text-primary font-medium text-sm underline ml-4"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className=" ">
              <Image
                src={Watch}
                width={310}
                height={100}
                alt="/"
                quality={100}
                className="ml-5  w-[20rem] h-[20rem]"
                style={{
                  objectFit: "cover",
                }}
              />
              <div className=" bg-white w-[14rem] h-[4.6rem] absolute top-[15.6rem] left-5">
                <h1 className="ml-4  font-semibold text-lg">
                  Watches Collection
                </h1>
                
                <Link
                  href="/cart"
                  className=" text-text-primary font-medium text-sm underline ml-4"
                >
                  Shop Now
                </Link>
                
              </div>
            </div>
          </div>
        </div>
        
         
          
          <button
            className="collection-btn border-2 w-[10rem] h-12 mt-5 mb-5 rounded-md border-[#f8dbb3]  bg-transparent ml-[60rem]
        hover:bg-primary hover:text-white ease-in transition"
          >
            Discover Now
          </button>
          
          
          
          
        
      </div>
    </div>
  )
}

export default Collection
