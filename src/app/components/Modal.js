import { cartAtom } from "@/app/atoms/cart";
import { useRecoilState } from "recoil";
import React, {  } from "react";
import "@/app/components/Navbar.css"

export function Modal(props) {
	const { id, productImage, productName, price, productInfo } =
		props.currentProduct;
	const { closeModal } = props;
	const [carts, setCart] = useRecoilState(cartAtom);

	const addToCart = () => {
		// Adding product to cart
		const product = { id, name: productName, price, qty: 1, img: productImage };
		// check if product exist in cart
		let existingProduct = carts.find((cart) => cart.id == product.id);
		// end the function
		if (existingProduct) {
      alert("Product already exist in cart")
      closeModal()
      return
    };
		// add product to cart
		setCart((prev) => [...prev, product]);
    closeModal()
		alert("Product was added successfully");
	};


	return (
		<>
			<div className=" flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
				<div className="md modal-box fixed top-[10rem] left-[23rem] bg-secondary text-black">
					<div className="flex ">
						<img src={productImage} className="w-[10rem]" alt={productName} />
						<div className="pl-10">
							<h1>{productName}</h1>
							<h2>${price}</h2>
							<h3>{productInfo}</h3>
						</div>
					</div>

					<div className="modal-action justify-between">
						<form method="dialog" className="flex">
							<button
								onClick={() => props.closeModal()}
								className="btn  border-[#f8dbb3] border-2  hover:bg-primary w-[9rem] h-[2rem] rounded-lg hover:text-white "
							>
								close
							</button>
							<button
								onClick={addToCart}
								className="btn ml-[10rem] border-[#f8dbb3] border-2  hover:bg-primary w-[9rem] h-[2rem] rounded-lg hover:text-white "
								type="submit"
							>
								<div className="flex justify-center gap-3 ">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										className="w-6 h-6"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
										/>
									</svg>
									Add to cart
								</div>
							</button>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}
