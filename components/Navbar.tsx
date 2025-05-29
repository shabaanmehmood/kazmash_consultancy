"use client";
import Link from "next/link";
import { FaBarsStaggered } from "react-icons/fa6";
import { CgClose } from "react-icons/cg";
import { useState } from "react";
import { navLinks } from "@/data";
import Image from "next/image";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const showNavHandler = () => setShowNav(true);
  const closeNavHandler = () => setShowNav(false);

  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <nav className="w-full bg-white z-50">
      <div className="max-w-[1700px] px-4 sm:px-4 lg:px-8 w-full mx-auto flex items-center justify-between h-[80px]">
        <div className="w-24">
          <Image src={"/logo.png"} alt="Logo" height={1000} width={1000} />
        </div>
        <ul className="lg:flex hidden items-center gap-2 text-black text-[12px] font-[600] tracking-wider">
          {navLinks.map((nav, idx: number) => (
            <li
              key={idx}
              className="hover:text-primary transition duration-300 cursor-pointer"
            >
              <Link href={nav.link} className="p-3">
                {nav.title}
              </Link>
            </li>
          ))}
        </ul>
        {/* <div className="flex items-center gap-4 cursor-pointer">
          <p className="text-[12px] font-[600] tracking-widest">SEARCH</p>
          <MagnifyingGlassIcon className="w-5" />
          </div> */}
          <div onClick={showNavHandler} className=" lg:hidden ">
            <FaBarsStaggered size={18} />
          </div>
      </div>

      <div className="w-full border-[0.3px] border-[#00000073] opacity-[30%]"></div>
      <div className="lg:hidden">
        <div
          className={`fixed ${navOpen} transform transition-all duration-500  inset-0 z-[1000] bg-black opacity-70 w-full h-screen`}
        >
          {/* Nav Links */}
        </div>
        <div
          className={`top-0 fixed ${navOpen} transform transition-all duration-500 delay-300 flex justify-start flex-col h-screen w-[80%] pt-24 sm:w-[60%]  bg-[#ffffff] z-[10000] space-y-6`}
        >
          <ul className=" flex flex-col items-center gap-8 text-black/60 text-lg font-[600] tracking-widest">
            {navLinks.map((nav, idx: number) => (
              <li
                key={idx}
                className="hover:text-black transition duration-300 cursor-pointer"
              >
                <Link href={nav.link} className="p-3">
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>

          <CgClose
            onClick={closeNavHandler}
            className="absolute top-[0.7rem] right-[1.4rem] w-6 h-6 sm:w-8 sm:h-8 text-black"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
