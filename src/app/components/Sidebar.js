import React from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import Link from "next/link";

export function SideBar() {
  const [open, setOpen] = React.useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <React.Fragment>
      <Button onClick={openDrawer} className=" bg-secondary text-black">
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
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </Button>
      <Drawer open={open} onClose={closeDrawer} className="p-4">
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h5" className=" text-primary">
            BWE
          </Typography>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <Typography color="gray" className="font-normal">
          <div className=" cursor-pointer">
            <ul className=" text-[#7c6037] text-lg font-bold">
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
        </Typography>
      </Drawer>
    </React.Fragment>
  );
}
