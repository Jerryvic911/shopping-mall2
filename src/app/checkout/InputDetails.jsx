"use client";
import { useRecoilValue } from "recoil";
import { cartAtom } from "../atoms/cart";
import React, { useEffect, useState } from "react";

function InputDetails() {
  const [total, setTotal] = useState(0);
  const carts = useRecoilValue(cartAtom);

  useEffect(() => {
    if (carts.length > 0) {
      const totalAmount = carts.reduce(
        (acc, curr) => acc + parseInt(curr.price) * curr.qty,
        0
      );
      setTotal(totalAmount);
    }
  }, [carts]);
  return (
    <div className="ml-20 mt-7">
      <div className="flex">
        <div className="bg-white pl-4 rounded-md shadow-md ">
          <div className="flex gap-5 mt-4 ">
            <label className="input input-bordered bg-white flex items-center w-[15rem] gap-2">
              <input type="text" className="grow" placeholder="Full Name" />
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
              <input type="text" className="grow" placeholder="Phone Number" />
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

          <label className="input input-bordered bg-white flex items-center mt-5 w-[40rem] gap-2">
            <input type="text" className="grow" placeholder="Home ADDRESS" />
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
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </label>
          <div className="flex gap-7 mt-5">
            <label className="input input-bordered bg-white flex items-center  w-[20rem] gap-2">
              <input type="text" className="grow" placeholder="Email address" />
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
            <label className="input input-bordered bg-white flex items-center w-[18.3rem] gap-2">
              <input
                type="text"
                className="grow"
                placeholder="Additional phone number"
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

          <label className="input input-bordered bg-white flex items-center w-[40rem] mt-5 gap-2">
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
          <div className="flex gap-6">
            <label className="input mt-5 input-bordered flex  bg-white items-center w-[20rem] gap-2">
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

            <label className="input mt-5 input-bordered flex  bg-white items-center w-[18.4rem] gap-2">
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

          <label className="input input-bordered bg-white flex items-center w-[40rem] mt-5 gap-2">
            <input type="text" className="grow" placeholder="Pick Up Point" />
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

          <div className="flex gap-6">
            <label className="input input-bordered flex bg-white items-center w-[20rem] mt-5 gap-2">
              <input type="text" className="grow" placeholder="Card Number" />
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
                  d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
                />
              </svg>
            </label>

            <label className="input input-bordered flex bg-white items-center w-[20rem] mt-5 gap-2">
              <input type="text" className="grow" placeholder="MM/YY" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 pr-1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                />
              </svg>
            </label>
          </div>

          <label className="input input-bordered flex bg-white items-center w-[10rem] mt-5 gap-2">
            <input type="password" className="grow" placeholder="CVV" />
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

          <div className="flex gap-5 ml-[20rem] mb-7">
            <button className="btn bg-inherit text-black border-[#f8dbb3] border-2  hover:bg-primary w-[9rem] h-[2rem] rounded-lg hover:text-white mt-8">
              Cancel
            </button>
            <button
              button
              className="btn text-black bg-inherit border-[#f8dbb3] border-2  hover:bg-primary w-[9rem] h-[2rem] rounded-lg hover:text-white mt-8"
            >
              Save
            </button>
          </div>
        </div>

        <div className="bg-white w-[19rem] h-[15rem] ml-[10rem] rounded-md shadow-md">
          <h1 className="text-center font-bold text-xl border-b-2 mt-4 uppercase">
            Order summary
          </h1>

          <h3 className="border-b-2 mt-3 pl-5 font-medium">
            Item total ({carts.reduce((acc, curr) => acc + curr.qty, 0)})
          </h3>

          <h1 className="border-b-2 mt-3 pl-5 font-bold text-2xl">
            Total: ${total}
          </h1>

          <button
            type="button"
            className="btn bg-gray-300 text-black ml-[5rem] border-[#f8dbb3] border-2  hover:bg-primary w-[9rem] h-[2rem] rounded-lg hover:text-white mt-8"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

export default InputDetails;
