import Link from "next/link";
import React from "react";
import { useRecoilValue } from "recoil";
import { cartAtom } from "../atoms/cart";

function Input() {
	const carts = useRecoilValue(cartAtom);
	return (
		<div className="flex bg-[#f9e5ca] py-3 w-[20rem] rounded-md">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				className="w-6 h-6 ml-6"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
				/>
			</svg>

			<input
				type="text"
				placeholder="Search"
				className="bg-[#f9e5ca] border-none"
			/>

			<Link href="/cart">
				<div className="relative">
					<div className="border-l-2  absolute border-black">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							className="w-6 h-6 ml-3"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
							/>
						</svg>
					</div>
					<div className="bg-black flex  text-xs font-[900] items-center justify-center rounded-full w-6 h-6 text-white">
						{carts.length}
					</div>
				</div>
			</Link>
		</div>
	);
}

export default Input;
