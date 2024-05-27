"use client"
import { ShopContextProvider } from "@/context/Shop-Context";
import HomeContent from "./features/HomeContent";
import { BrowserRouter } from "react-router-dom";





export default function Home() {
  return (
    
    <div className="h-screen w-screen bg-[#fef7f1] overflow-x-hidden text-black">
      <ShopContextProvider>
        <BrowserRouter>
        <HomeContent/>
        </BrowserRouter>
     
      </ShopContextProvider>
      

    </div>
  );
}
