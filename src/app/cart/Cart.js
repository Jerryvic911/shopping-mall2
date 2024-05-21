import React from "react";
import Image from "next/image";
import Backpack from "@/Images/Backpack.png";
import { useRecoilState } from "recoil";
import { cartAtom } from "../atoms/cart";
import Link from "next/link";

function Orders() {
	const [carts, setCart] = useRecoilState(cartAtom);


  const deleteProduct = (id) => {

   const newCart = carts.filter((product) => product.id !== id);
   console.log(newCart, "carts")
   if(newCart.length > 0){
    setCart(newCart)

   }
  }

	return (
		<div>
			{carts.length > 0 ? (
				carts.map((product) => <div className=" my-4 bg-secondary gap-5 px-5 py-5 items-center justify-between shadow-md rounded-md shadow-slate-400/70 w-[50rem] h-[8rem] flex">
        <img
          src={product?.img}
          width={100}
          height={100}
          alt="//"
          className="h-[8rem] w-[8rem]"
        />
        <div className="">
          <h1 className=" font-bold text-lg">{product?.name}</h1>
          <h2 className="font-medium">${product?.price}</h2>
         
        </div>
        <div onClick={() => deleteProduct(product.id)} className="cursor-pointer hover:underline hover:text-red-700">
          <p className="text-sm">Delete</p>
          </div>
      </div>)
			) : (
				<div className=" shadow-slate-400/70 w-[50rem] flex-col items-center h-[8rem] flex justify-center">
					<p className="text-2xl font-[700]">Empty Cart</p>
          <Link className="underline" href="/shop">Please vist our shop to add products to cart</Link>
				</div>
			)}
		</div>
	);
}

export default Orders;
