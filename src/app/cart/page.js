"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Orders from "./Cart";
import Link from "next/link";
import { useRecoilValue } from "recoil";
import { cartAtom } from "../atoms/cart";

function Cart() {
  const [total, setTotal] = useState(0);
  const carts = useRecoilValue(cartAtom);

  useEffect(() => {
   if(carts.length > 0){
    const totalAmount = carts.reduce((acc, curr) => acc + parseInt(curr.price) * curr.qty, 0);
   setTotal(totalAmount)
   }
  }, [carts])


  console.log(total, "total")
	return (
		<div className="h-full bg-secondary text-black">
			<Navbar />

			<div className="flex">
				<div className=" mt-[5rem] ml-20">
					<Orders />
				</div>

				<div className="text-center ml-20 bg-white w-[15rem] h-[10rem] mt-20 shadow-md">
					<div className=" ml- pt-5">
						<h1 className="font-bold text-lg border-b-2 capitalize">
							Order Summary
						</h1>
						<p className="font-medium border-b-2">Total price:${total}</p>
					</div>

					<div className="pr-6">
						<Link href="/checkout">
							<button className="btn bg-primary rounded-md px-5 py-2 mt-7 text-white ml-10 ">
								Check out
							</button>
						</Link>
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
}

export default Cart;
