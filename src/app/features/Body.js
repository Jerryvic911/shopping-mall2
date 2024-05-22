import React from 'react'
import Image from "next/image";
import Man from "@/Images/Man.png";

function Body() {
  return (
    <div>
        <div className=" flex flex-row justify-between items-center ml-14">
      
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
        alt="man"
        width={500}
        height={500}
        className="mt-20"
      />
    </div>

    <div className=""></div>
    </div>
  )
}

export default Body
