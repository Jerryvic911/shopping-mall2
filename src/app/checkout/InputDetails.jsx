"use client";
import { useRecoilValue, useRecoilState, useResetRecoilState } from "recoil";
import { cartAtom, totalAmountSelector } from "../atoms/cart";
import React from "react";
import { checkoutAtom } from "../atoms/checkout";
import { PaystackButton } from "react-paystack";
import "@/app/components/Navbar.css"

function InputDetails() {
	const total = useRecoilValue(totalAmountSelector);
	const carts = useRecoilValue(cartAtom);
	const clearCart = useResetRecoilState(cartAtom);
	const [checkutDetails, setCheckoutDetails] = useRecoilState(checkoutAtom);
	const clearCheckoutDetails = useResetRecoilState(checkoutAtom);
  

	const handleChange = (event) => {
		const { name, value } = event.target;
		setCheckoutDetails((prev) => ({ ...prev, [name]: value }));
	};

	const totalAmount = parseInt(total) * 1000;

	const checkoutPaymentComponentProps = {
		email: checkutDetails.email,
		amount: totalAmount,
		metadata: {
			name: checkutDetails.fullName,
			phone: checkutDetails.phoneNumber,
		},
		publicKey: "pk_test_e66822d2e3553a1dd1143d6dbcb609e62dbab7ac",
		text: "Confirm",

		onSuccess: () => {
			alert("Thanks for doing business with us! Come back soon!!"), clearCart();
		},
		onClose: () => alert("Wait! You need this oil, don't go!!!!"),
	};

	return (
		<div className="page ml-20 mt-7 h-full">
			<div className="check flex">
				<div className="bg-white pl-4 rounded-md shadow-md ">
					<div className="checkout-name flex gap-5 mt-4 ">
						<label className="input input-bordered bg-white flex items-center w-[15rem] gap-2">
							<input
								onChange={handleChange}
								defaultValue={checkutDetails.fullName}
								type="text"
								name="fullName"
								className="grow"
								placeholder="Full Name"
							/>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 16 16"
								fill="currentColor"
								className="w-4 h-4 opacity-70"
							>
								<path
									fillRule="evenodd"
									d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
									clipRule="evenodd"
								/>
							</svg>
						</label>

						<label className="input input-bordered flex bg-white items-center w-[15rem] gap-2">
							<input
								type="text"
								defaultValue={checkutDetails.phoneNumber}
								onChange={handleChange}
								name="phoneNumber"
								className="grow"
								placeholder="Phone Number"
							/>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="w-6 h-6"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
								/>
							</svg>
						</label>
					</div>

				
					<div className="flex gap-7 mt-5">
						<label className="input input-bordered bg-white flex items-center  w-[20rem] gap-2">
							<input
								onChange={handleChange}
								defaultValue={checkutDetails.email}
								name="email"
								type="text"
								className="grow"
								placeholder="Email address"
							/>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="w-6 h-6"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
								/>
							</svg>
						</label>
					</div>

          <label className="deliver input input-bordered bg-white flex items-center w-[40rem] mt-5 gap-2">
            <input
              type="text"
              className="grow"
              placeholder="Delivery address"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
          </label>
          <div className="checkout-2 flex gap-6">
            <label className="checkout-2-id input mt-5 input-bordered flex  bg-white items-center w-[20rem] gap-2">
              <input type="text" className="grow" placeholder="Region" />
              <details className="dropdown bg-white">
                <summary className=" text-black bg-white"></summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-white rounded-box w-52">
                  <li>
                  Item 1
                  </li>
                  <li>
                    Item 2
                  </li>
                </ul>
              </details>
            </label>

            <label className="checkout-2-id input mt-5 input-bordered flex  bg-white items-center w-[18.4rem] gap-2">
              <input type="text" className="grow" placeholder="City" />
              <details className="dropdown bg-white">
                <summary className=" text-black bg-white"></summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-white rounded-box w-52">
                  <li>
                    Item 1
                  </li>
                  <li>
                  Item 2
                  </li>
                </ul>
              </details>
            </label>
          </div>

				

					<div className=" justify-center items-center text-center mb-7">
						<button
							onClick={clearCheckoutDetails}
							className="btn bg-inherit text-black border-[#f8dbb3] border-2  hover:bg-primary w-[9rem] h-[2rem] rounded-lg hover:text-white mt-8"
						>
							Cancel
						</button>
					</div>
				</div>

				<div className="checkout-final bg-white w-[19rem] h-[15rem] ml-[10rem] rounded-md shadow-md">
					<h1 className="text-center font-bold text-xl border-b-2 mt-4 uppercase">
						Order summary
					</h1>

					<h3 className="border-b-2 mt-3 pl-5 font-medium">
						Item total ({carts.reduce((acc, curr) => acc + curr.qty, 0)})
					</h3>

					<h1 className="border-b-2 mt-3 pl-5 font-bold text-2xl">
						Total: ${total}
					</h1>

					{total > 0 && (
						<PaystackButton
							className="paystack-button btn bg-gray-300 text-black ml-[5rem] border-[#f8dbb3] border-2  hover:bg-primary w-[9rem] h-[2rem] rounded-lg hover:text-white mt-8"
							{...checkoutPaymentComponentProps}
						/>
					)}
				</div>
			</div>
		</div>
	);
}

export default InputDetails;
