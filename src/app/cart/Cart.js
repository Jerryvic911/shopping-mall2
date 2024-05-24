import React from "react";
import { useRecoilState } from "recoil";
import { cartAtom } from "../atoms/cart";
import Link from "next/link";

function Orders() {
	const [carts, setCart] = useRecoilState(cartAtom);

	const deleteProduct = (id) => {
		const newCart = carts.filter((product) => product.id !== id);
		setCart(newCart);
	};

	const increaseQuantity = (id) => {
		const updatedCart = carts.map((product) =>
			product.id === id ? { ...product, qty: product.qty + 1 } : product
		);
		setCart(updatedCart);
	};

	const decreaseQuantity = (id) => {
		const updatedCart = carts.map((product) =>
			product.id === id && product.qty > 1
				? { ...product, qty: product.qty - 1 }
				: product
		);
		setCart(updatedCart);
	};

	return (
		<div>
			{carts.length > 0 ? (
				carts.map((product) => (
					<div
						key={product.id}
						className="my-4 bg-secondary gap-5 shadow-md rounded-md shadow-slate-400/70 w-[50rem] h-[8rem] grid grid-cols-2 items-center"
					>
						
					<div>
          <div className="flex items-center">
            <img
							src={product.img}
							className="h-[8rem] w-[8rem]"
							alt={product.name}
						/>
							<div>
									<h1 className="font-bold text-lg">{product.name}</h1>
									<h2 className="font-normal text-sm">Unit Price: <span className="font-bold">${product.price}</span></h2>
							</div>

						
						</div>

            

          </div>


          <div className="flex justify-between  items-center px-5">
          <div className="flex">
								<button
									onClick={() => decreaseQuantity(product.id)}
									className="text-red-700 hover:underline font-[800] text-center w-5 text-xl btn"
								>
									-
								</button>
								<span className="mx-2 bg-white w-5 text-center justify-center">
									{product.qty}
								</span>
								<button
									onClick={() =>  increaseQuantity(product.id)}
									className="text-green-700 hover:underline font-[800] text-center text-xl w-5 h-5 btn"
								>
									+
								</button>
							</div>
						<div>
            <h2 className="font-normal text-sm">Subtotal: <span className="font-bold">${product.price * product.qty}</span></h2>

						</div>

            <div
							onClick={() => deleteProduct(product.id)}
							className="cursor-pointer hover:underline hover:text-red-700 "
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								className="w-6 h-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
								/>
							</svg>
						</div>
          </div>
					
					</div>
				))
			) : (
				<div className="shadow-slate-400/70 w-[50rem] flex-col items-center h-[8rem] flex justify-center">
					<p className="text-2xl font-[700]">Empty Cart</p>
					<Link href="/shop">
						<p className="underline">
							Please visit our shop to add products to the cart
						</p>
					</Link>
				</div>
			)}
		</div>
	);
}

export default Orders;
