import React from "react";
import Image from "next/image";
import Backpack from "@/Images/Backpack.png"

function Orders() {
  return (
    <div>
      <div className=" bg-secondary shadow-md rounded-md shadow-slate-400/70 w-[50rem] h-[8rem] flex">
        <Image
        src={Backpack}
        width={100}
        height={100}
        alt="//"
        className="h-[8rem] w-[8rem]"/>
        <div className="pt-5">
        <h1 className=" font-bold text-lg">Backpack</h1>
          <h2 className="font-medium">$100</h2>
          <p>Description: Traveling bag</p>
        </div>
      </div>
      <div className=" bg-secondary mt-5 shadow-md rounded-md shadow-slate-400/70 w-[50rem] h-[8rem] flex">
        <Image
        src={Backpack}
        width={100}
        height={100}
        alt="//"
        className="h-[8rem] w-[8rem]"/>
        <div className="pt-5">
        <h1 className=" font-bold text-lg">Backpack</h1>
          <h2 className="font-medium">$100</h2>
          <p>Description: Traveling bag</p>
        </div>
      </div>
      <div className=" bg-secondary mt-5 shadow-md rounded-md shadow-slate-400/70 w-[50rem] h-[8rem] flex">
        <Image
        src={Backpack}
        width={100}
        height={100}
        alt="//"
        className="h-[8rem] w-[8rem]"/>
        <div className="pt-5">
          <h1 className=" font-bold text-lg">Backpack</h1>
          <h2 className="font-medium">$100</h2>
          <p>Description: Traveling bag</p>
        </div>
      </div>
    </div>
  );
}

export default Orders;
