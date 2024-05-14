"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Orders from "./Cart";



function Cart() {


  return (
    <div className="h-full bg-secondary text-black">
      <Navbar />

      <div className="grid grid-cols-4 mt-[5rem] ml-20 pr-20 gap-7">
          <Orders/>
      </div>

      <div className="text-center">
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <button
          className="btn bg-primary rounded-md px-5 py-2 mt-7 text-white ml-10 "
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          Check out
        </button>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box bg-secondary text-black">
            <form className="flex">
            <input type="text" placeholder="Enter card number" className="w-[10rem] bg-white"></input>
            <input type="text" placeholder="DD/MM/YY" className="ml-14  bg-white"></input>
            </form>

           <form className="mt-7 ">
            <input className=" bg-white" type="password" placeholder="***"></input>
           </form>
            
          
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn" type="submit">Accept</button>
              </form>
              
            </div>
          </div>
        </dialog>
      </div>

      <Footer />
    </div>
  );
}

export default Cart;
