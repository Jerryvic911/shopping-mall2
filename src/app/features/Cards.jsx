import React from "react";
import Image from "next/image";
import Glasses from "@/Images/Glasses.jpg"
import Hat from "@/Images/Hat.jpg"
import Bag from "@/Images/Bag.jpg"
import Sweater from "@/Images/Sweater.jpg"
import Link from "next/link";
import Perks from "./Perks";

function Cards() {
  return (
    <div>
      <div className="pt-[4rem] mt-5 h-full bg-[#faf0e6] text-black">
        <div className="text-center">
          <h1 className=" font-medium text-4xl uppercase">
            Featured Categories
          </h1>

          <div className="  text-amber-950 font-semibold text-lg mt-6">
            <ul className="flex gap-12 items-center  justify-center cursor-pointer">
              <li className=" hover:underline">All</li>
              <li  className=" hover:underline">Latest</li>
              <li  className=" hover:underline">Best-Selling</li>
              <li  className=" hover:underline">Top-Rated</li>
              <li  className=" hover:underline">Trandy</li>
            </ul>
          </div>
        </div>

        {/*Featured catigories Card */}

        <div className="ml-10 flex flex-row gap-6 justify-center mt-12">

          <div className=" bg-black w-[13rem] h-[20rem] text-center  rounded-md">
            <Image
              src={Glasses}
              width={250}
              height={200}
              alt="//"
              className=" rounded-md object-cover"
            />

            <div className="bg-white  w-[13rem] h-[11.5rem]   pt-4  rounded-md ">
              <h1 className="font-semibold">Gucci Glasses</h1>
              <div className="gap-5 flex justify-center mt-3 text-text-primary">
                <h3 className=" line-through">$26.00</h3>
                <h3 className="text-black">$22.00</h3>
              </div>

              <button className="border-[#f8dbb3] border-2  hover:bg-primary w-[9rem] h-[2rem] rounded-lg hover:text-white mt-8">
                <div className="flex justify-center gap-3 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    />
                  </svg>
                  Add to cart
                </div>
              </button>
            </div>
          </div>
          <div className=" bg-black w-[13rem] h-[20rem] text-center  rounded-md">
            <Image
              src={Bag}
              width={250}
              height={250}
              alt="//"
              className=" rounded-md"
            />

            <div className="bg-white  w-[13rem] h-[11.5rem] pt-4  rounded-md ">
              <h1 className="font-semibold">Water proof Backpack</h1>
              <div className="gap-5 flex justify-center mt-3  text-text-primary">
                <h3 className=" line-through">$86.00</h3>
                <h3 className="text-black">$82.00</h3>
              </div>

              <button className="border-[#f8dbb3] border-2  hover:bg-primary w-[9rem] h-[2rem] rounded-lg hover:text-white mt-8">
                <div className="flex justify-center gap-3 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    />
                  </svg>
                  Add to cart
                </div>
              </button>
            </div>
          </div>
          <div className=" bg-black w-[13rem] h-[20rem] text-center  rounded-md">
            <Image
              src={Hat}
              width={250}
              height={200}
              alt="//"
              className=" rounded-md "
            />

            <div className="bg-white  w-[13rem] h-[11.5rem] pt-4  rounded-md ">
              <h1 className="font-semibold">Funny Children Hat</h1>
              <div className="gap-5 flex justify-center mt-3  text-text-primary">
                <h3 className=" line-through">$26.00</h3>
                <h3 className="text-black">$20.00</h3>
              </div>

              <button className="border-[#f8dbb3] border-2  hover:bg-primary w-[9rem] h-[2rem] rounded-lg hover:text-white mt-8">
                <div className="flex justify-center gap-3 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    />
                  </svg>
                  Add to cart
                </div>
              </button>
            </div>
          </div>
          <div className=" bg-black w-[13rem] h-[20rem] text-center  rounded-md">
            <Image
              src={Sweater}
              width={250}
              height={200}
              alt="//"
              className=" rounded-md"
            />

            <div className="bg-white  w-[13rem] h-[11.5rem] pt-4  rounded-md ">
              <h1 className="font-semibold">Lady Sweater</h1>
              <div className="gap-5 flex justify-center mt-3  text-text-primary">
                <h3 className=" line-through">$120.00</h3>
                <h3 className="text-black">$100.00</h3>
              </div>

             <button className="border-[#f8dbb3] border-2  hover:bg-primary w-[9rem] h-[2rem] rounded-lg hover:text-white mt-8">
                <div className="flex justify-center gap-3 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    />
                  </svg>
                  Add to cart
                </div>
              </button>
             
            </div>
          </div>

         
          
        </div>
        <Link href='/shop'>
        <div className=" text-center mt-10">

         <button className="bg-primary w-[10rem] rounded-md h-[3rem] text-white">
          Browse All Items
          </button>
         
          
         
          
        </div>
        </Link>
        <Perks/>
      </div>

    
    </div>
  );
}

export default Cards;
