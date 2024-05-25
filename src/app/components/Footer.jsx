import React from "react";
import "../components/Navbar.css"

function Footer() {
  return (
    <div className="mt-20 h-full w-screen text-black ">
      <div className=" text-center">
        <h1 className=" capitalize text-3xl  font-semibold">Subscribe to our newsletter</h1>
        <h3 className="mt-5 text-base text-[#d1cac2]">Sign up and get cutting edge marketing insights</h3>
        <div className="flex justify-center mt-3">
          <input
            type="text"
            placeholder="Your Email Address"
            className=" bg-transparent border-b-2 border-[#d1cac2]"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#d1cac2"
            className="w-6 h-6 mr-3"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg>
        </div>
      </div>

      <div className="footer flex flex-row mt-20 ml-40 justify-between">
        {/**Icons */}
        <div>
          <h1 className=" text-primary font-bold text-3xl">BWE</h1>
          <ul className="flex flex-row gap-2">
            <li className="border-[#ed9e2d] rounded-full w-8 h-7 border-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                stroke="currentColor"
                stroke-width="1.5"
                className="w-4 h-4 ml-[0.35rem] mt-1"
              >
                <path
                  fill="#ed9e2d"
                  d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"
                />
              </svg>
            </li>

            <li className="border-[#ed9e2d] rounded-full w-8 h-7 border-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-4 h-4 ml-[0.35rem] mt-1"
              >
                <path
                  fill="#ed9e2d"
                  d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"
                />
              </svg>
            </li>

            <li className="border-[#ed9e2d] rounded-full w-8 h-7 border-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="w-4 h-4 ml-[0.35rem] mt-1"
              >
                <path
                  fill="#ed9e2d"
                  d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                />
              </svg>
            </li>

            <li className="border-[#ed9e2d] rounded-full w-8 h-7 border-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="w-4 h-4 ml-[0.35rem] mt-1"
              >
                <path
                  fill="#ed9e2d"
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                />
              </svg>
            </li>
          </ul>
        </div>

        {/**Information */}
        <div className="flex flex-row mr-[10rem] gap-[5rem]">


          <div>
            <h1 className="font-bold uppercase">Company</h1>
            <ul className="mt-3 text-[#d1cac2]">
              <li className="mt-3">About us</li>
              <li className="mt-3">Our Services</li>
              <li className="mt-3">Affilite Program</li>
              <li className="mt-3">Privacy policy</li>
            </ul>
          </div>

          <div>
            <h1 className="font-bold  uppercase">Get Help</h1>
            <ul className="mt-3 text-[#d1cac2]">
              <li className="mt-3">FAQ</li>
              <li className="mt-3">Returns</li>
              <li className="mt-3">Payment Options</li>
              <li className="mt-3">Shipping And Delivery</li>
            </ul>
          </div>

          <div>
            <h1 className="font-bold  uppercase">Online Shop</h1>
            <ul className="mt-3 text-[#d1cac2]">
              <li className="mt-3">Accessories</li>
              <li className="mt-3">Clothes & Apparels</li>
              <li className="mt-3">Women</li>
              <li className="mt-3">Men</li>
            </ul>
          </div>

         


        </div>
      </div>

      <div className="mt-[5rem] ml-[3rem] mr-3 w-auto  border-t-2 border-black ">

        <div className="pt-[3.5rem] flex justify-between">
<h2>@2022 BWE. All rights reserved</h2>

        <div className="">
          <ul className="flex">
            <li></li>
            <li></li>
            <li></li>
            <li className="bg-white w-7 h-5">
              <svg xmlns="http://www.w3.org/2000/svg" height="12" width="9" viewBox="0 0 384 512" className="w-4 h-4 ml-1 mt-1">
                <path fill="#74C0FC" d="M111.4 295.9c-3.5 19.2-17.4 108.7-21.5 134-.3 1.8-1 2.5-3 2.5H12.3c-7.6 0-13.1-6.6-12.1-13.9L58.8 46.6c1.5-9.6 10.1-16.9 20-16.9 152.3 0 165.1-3.7 204 11.4 60.1 23.3 65.6 79.5 44 140.3-21.5 62.6-72.5 89.5-140.1 90.3-43.4 .7-69.5-7-75.3 24.2zM357.1 152c-1.8-1.3-2.5-1.8-3 1.3-2 11.4-5.1 22.5-8.8 33.6-39.9 113.8-150.5 103.9-204.5 103.9-6.1 0-10.1 3.3-10.9 9.4-22.6 140.4-27.1 169.7-27.1 169.7-1 7.1 3.5 12.9 10.6 12.9h63.5c8.6 0 15.7-6.3 17.4-14.9 .7-5.4-1.1 6.1 14.4-91.3 4.6-22 14.3-19.7 29.3-19.7 71 0 126.4-28.8 142.9-112.3 6.5-34.8 4.6-71.4-23.8-92.6z"/>
              </svg>
            </li>
            <li></li>
          </ul>
        </div>
        </div>
        
      </div>
    </div>
  );
}

export default Footer;
