import React from "react";
import Input from "./Input";
import Link from "next/link";
import "./Navbar.css";
import { useRecoilValue } from "recoil";
import { cartAtom } from "../atoms/cart";

function Navbar() {
  const carts = useRecoilValue(cartAtom);
  return (
    <div className="head flex flex-row justify-between items-center pt-5 mr-10 md:items-center">
      <div className="ml-12  pl-12 cursor-pointer">
        <ul className="flex gap-5 text-[#7c6037] text-lg font-bold">
          <Link href="/">
            <li className="hover:underline hover:ease-in hover:duration-300">
              Home
            </li>
          </Link>
          <li className="hover:underline">New</li>
          <Link href="/shop">
            {" "}
            <li className="hover:underline">Sale</li>
          </Link>
          <li className="hover:underline">Features</li>
        </ul>
      </div>

      <div className="text-center">
        <Link href="/" className="text-[#ed9e2d] font-extrabold text-2xl">
          BWE
        </Link>
      </div>

      <Link href="/cart">
        <div className=" md:hidden relative">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </div>
          <div className="bg-black absolute left-5  flex text-xs font-[900] items-center bottom-3 justify-center rounded-full w-6 h-6 text-white">
            {carts.reduce((acc, curr) => acc + curr.qty, 0)}
          </div>
        </div>
      </Link>

      <div className="search-hide float-right mr-9">
        <Input />
      </div>
    </div>
  );
}

export default Navbar;
