"use client";
import Navbar from "@/app/components/Navbar";
import React from "react";
import Footer from "@/app/components/Footer";
import Cards from "./Cards";
import Body from "./Body";
import Collection from "./Collection";


function HomeContent() {
  return (
    <div className="bg-[#fef7f1]">
      <Navbar />

     <Body/>

      {/* our collection*/}

      <Collection/>

      {/* Featured categories*/}
      <Cards />



      {/**Footer */}
      <Footer />
    </div>
  );
}

export default HomeContent;
