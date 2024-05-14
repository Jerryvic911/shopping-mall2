"use client";
import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import Man from "@/Images/Man.png";
import Shoe from "@/Images/Shoe.png";
import Backpack from "@/Images/Backpack.png";
import Watch from "@/Images/Watch.jpg";
import React from "react";
import Footer from "@/app/components/Footer";
import Cards from "./Cards";


function HomeContent() {
  return (
    <div className="bg-[#fef7f1]">
      <Navbar />

      <div className=" flex items-center ml-14 ">
      
        <div className="mb-[10rem]">
          <p className=" flex-none font-semibold text-5xl ml-10">
            Better
            <br /> Way To Start
            <br />
            The Shopping
          </p>

          <div className=" text-sm flex-none">
            <div className="text-gray-300">
              <p className="pt-3 text-md  ml-10">
                Make the new experience of shopping,get the
                <br />
                high qulity products from your favorite brands.
              </p>

              
              <button className=" bg-primary rounded-md px-5 py-2 mt-7 text-white ml-10  ">
                Shop now
              </button>
              
            </div>
            
          </div>
        </div>
        
       

        <Image
          src={Man}
          alt="//"
          width={500}
          height={500}
          className=" ml-[20rem] pt-12"
        />
      </div>

      <div className=""></div>

      {/* our collection*/}

      <div className="mt-[4rem] ml-16 ">
        <h2 className=" text-4xl font-semibold">
          <span className=" border-b-2 border-[#eea034]">Our</span> Collection
        </h2>

        <div className="flex gap-5 rounded-md mt-10">
          <div className="rounded-md">
            <div className="bg-[#fbebd4] w-[22rem] h-[25rem] rounded-md">
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
                <a
                  href="/"
                  className="text-text-primary font-medium text-sm underline ml-4"
                >
                  Shop Now
                </a>
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
                <a
                  href="/"
                  className=" text-text-primary font-medium text-sm underline ml-4"
                >
                  Shop Now
                </a>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="w-full">
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
              <div className="ml-5  bg-white w-[14rem] h-[4.6rem] absolute top-[15.6rem]">
                <h1 className="ml-4  font-semibold text-lg">
                  Watches Collection
                </h1>
                
                <a
                  href="/cart"
                  className=" text-text-primary font-medium text-sm underline ml-4"
                >
                  Shop Now
                </a>
                
              </div>
            </div>
          </div>
        </div>
        
         
          
          <button
            className=" border-2 w-[10rem] h-12 mt-5 mb-5 rounded-md border-[#f8dbb3]  bg-transparent ml-[60rem]
        hover:bg-primary hover:text-white ease-in transition"
          >
            Discover Now
          </button>
          
          
          
          
        
      </div>

      {/* Featured categories*/}
      <Cards />

     
      

      {/**Other perks */}
      <div className="flex flex-box justify-center pt-[9rem] bg-[#faefe3] pb-11 uppercase text-lg font-semibold">
        <div className=" w-[13rem] h-[13rem]  hover:bg-[#fef7f1] ease-in-out transition">
          <div className="mt-[2rem] ml-[4rem] bg-white w-[5rem] h-[5rem] py-5 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#eea034"
              className="w-10 h-10 bg-white ml-5 mb-5 "
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
              />
            </svg>
          </div>
          <h1 className=" text-center pt-14">Free Shipping</h1>
        </div>

        <div className=" w-[13rem] h-[13rem]  hover:bg-[#fef7f1] ease-in-out transition">
          <div className="mt-[2rem] ml-[4rem] bg-white w-[5rem] h-[5rem] py-5 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#eea034"
              className="w-10 h-10 bg-white ml-5 mb-5 "
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
              />
            </svg>
          </div>
          <h1 className=" text-center pt-14">Special Gift</h1>
        </div>

        <div className=" w-[13rem] h-[13rem]  hover:bg-[#fef7f1] ease-in-out transition">
          <div className="mt-[2rem] ml-[4rem] bg-white w-[5rem] h-[5rem] py-5 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#eea034"
              className="w-10 h-10 bg-white ml-5 mb-5 "
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
              />
            </svg>
          </div>
          <h1 className=" text-center pt-14">Money Back</h1>
        </div>
        
        <div className=" w-[13rem] h-[13rem]  hover:bg-[#fef7f1] ease-in-out transition">
        
          <div className="mt-[2rem] ml-[4rem] bg-white w-[5rem] h-[5rem] py-5 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512 "
              className="w-10 h-10 bg-white ml-5 mb-5   "
            >
              <path
                fill="#eea034"
                d="M256 48C141.1 48 48 141.1 48 256v40c0 13.3-10.7 24-24 24s-24-10.7-24-24V256C0 114.6 114.6 0 256 0S512 114.6 512 256V400.1c0 48.6-39.4 88-88.1 88L313.6 488c-8.3 14.3-23.8 24-41.6 24H240c-26.5 0-48-21.5-48-48s21.5-48 48-48h32c17.8 0 33.3 9.7 41.6 24l110.4 .1c22.1 0 40-17.9 40-40V256c0-114.9-93.1-208-208-208zM144 208h16c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H144c-35.3 0-64-28.7-64-64V272c0-35.3 28.7-64 64-64zm224 0c35.3 0 64 28.7 64 64v48c0 35.3-28.7 64-64 64H352c-17.7 0-32-14.3-32-32V240c0-17.7 14.3-32 32-32h16z"
              />
            </svg>

          </div>
          
          <h1 className=" text-center pt-14 cursor-pointer">Support 24/7</h1>
        </div>
        
      </div>

      {/**Footer */}
      <Footer />
    </div>
  );
}

export default HomeContent;
