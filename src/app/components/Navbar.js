import React from "react";
import Input from "./Input";
import Link from "next/link";
import "./Navbar.css"

function Navbar() {
  return (
    <div className="head flex flex-row justify-between items-center pt-5 mr-10 md:items-center">
        
     <div className="ml-12  pl-12 cursor-pointer">
        <ul className="flex gap-5 text-[#7c6037] text-lg font-bold">
          <Link href="/"><li className="hover:underline hover:ease-in hover:duration-300">Home</li></Link>  
            <li className="hover:underline" >New</li>
           <Link href="/shop"> <li className="hover:underline">Sale</li></Link>
            <li className="hover:underline">Features</li>
        </ul>
     </div>
         
         <div className="text-center">
            <Link href="/" className="text-[#ed9e2d] font-extrabold text-2xl">BWE</Link>
         </div>



        <div className="search-hide float-right mr-9">
            <Input/>
        </div>
    </div>
  );
}

export default Navbar;
