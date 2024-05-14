"use client";
import React from "react";

const Product = (props) => {
  const { id, productName, productImage, price, } = props.data;
  return (
    <div className=" ">
      <img className="w-[15rem] h-[18rem]  bg-white " src={productImage} />
      <div className=" bg-white w-[15rem] h-[7.9rem]">
        <div className=" pt-3 pl-5 uppercase">
          <h1 className="font-bold text-xl ">{productName}</h1>
          <p className="font-medium">${price}</p>
        </div>

        <div className="text-center">
          <button
            className="border-[#f8dbb3] border-2  hover:bg-primary w-[9rem] h-[2rem] rounded-lg hover:text-white mt-4"
            onClick={(id) =>
              document
                .getElementById("my_modal_1")
                .showModal()
            }
          >
            <div className="flex justify-center gap-3 ">
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
                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
              Preview
            </div>
          </button>
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box bg-secondary text-black">

              <div className="flex">
                <img src={productImage} className="w-[10rem]" alt={productName} />

                <h1>{productName}</h1>
              </div>

              <div className="modal-action">
                <form method="dialog">
                  <button className="btn border-[#f8dbb3] border-2  hover:bg-primary w-[9rem] h-[2rem] rounded-lg hover:text-white "
                   type="submit">
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
          </dialog>


        </div>
      </div>
    </div>
  );
};

export default Product;
