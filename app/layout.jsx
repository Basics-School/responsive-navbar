"use client";

import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const navigation = [
  {
    title: "About",
    href: "/about",
  },
  {
    title: "News",
    href: "/news",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Products",
    href: "/Products",
  },
];

export default function RootLayout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="h-20 w-full fixed flex items-center justify-between px-5 text-black  bg-gray-100 z-30 ">
          {/* left */}
          <Link className="text-2xl   font-extrabold" href={"/"}>
            LOGO
          </Link>

          {/* middle */}
          <nav
            aria-label="nav "
            className="hidden font-semibold gap-x-5 lg:flex"
          >
            {navigation.map((item) => (
              <Link key={item.title} href={item.href}>
                {item.title}
              </Link>
            ))}
          </nav>

          {/* right */}

          <span className="lg:hidden" aria-label="menu">
            <button onClick={() => setOpen(!open)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                  d="M20 7H4m16 5H4m16 5H4"
                ></path>
              </svg>
            </button>
          </span>
          <span
            aria-label="buttons"
            className=" lg:flex  gap-x-3 items-center justify-center hidden"
          >
            <Link
              className="bg-black text-white px-4 py-2 rounded-lg"
              href={"/signup"}
            >
              Sign up
            </Link>
            <Link
              className="bg-black text-white px-4 py-2 rounded-lg"
              href={"/signin"}
            >
              Sign in
            </Link>
          </span>
        </header>
        {/* popover */}
        <nav
          className={` absolute lg:hidden flex flex-col items-center transition-all duration-500  justify-around rounded-b-lg bg-gray-700 z-50  w-full ${
            open ? "h-1/2" : "h-0"
          } `}
        >
          <button onClick={() => setOpen(false)} className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 0 24 24"
            >
              <g fill="currentColor">
                <path d="m8.303 11.596l3.327-3.431a.499.499 0 0 1 .74 0l6.43 6.63c.401.414.158 1.205-.37 1.205h-5.723l-4.404-4.404Z"></path>
                <path
                  d="M11.293 16H5.57c-.528 0-.771-.791-.37-1.205l2.406-2.482L11.293 16Z"
                  opacity=".5"
                ></path>
              </g>
            </svg>
          </button>
          {navigation.map((item) => (
            <Link key={item.title} href={item.href}>
              {item.title}
            </Link>
          ))}
        </nav>
        <div
          className={` z-40  absolute bg-white/20 ${open? "h-screen w-screen": "h-0"}`}
          onClick={() => setOpen(false)}
        />
        {children}
      </body>
    </html>
  );
}
