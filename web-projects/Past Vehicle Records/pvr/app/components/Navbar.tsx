"use client";

import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { BsWhatsapp,BsFacebook, BsYoutube } from "react-icons/bs";
import Image from 'next/image';
import logo from "/public/PVR.jpeg"


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuOpen = () => {
    setIsOpen(!isOpen);
  };

  const socialLinks = [
    { href: "https://www.linkedin.com/in/saimahmed24", icon: <BsWhatsapp/> },
    { href: "https://github.com/saimahmed24", icon: <BsFacebook/> },
    { href: "https://www.behance.net/saimahmedqazi24", icon: <BsYoutube/> },
  ];

  return (
    <nav className="fixed z-10 top-0 flex items-center w-full justify-between border-b-4 border-b-[#328fd2] bg-[#141c25]  px-16 py-2 text-white ">
      <a href="#home" className="text-3xl font-semibold transition-all duration-300 hover:opacity-100 ">
        <Image src={logo} alt="" className="w-24"/>
      </a>

      <ul className="hidden md:flex gap-10  font-semibold">
        {["home", "about us", "pricing","contact"].map((item) => (
          <li key={item}>
            <a href={`#${item}`} className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 hover:text-[#328fd2]">
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          </li>
        ))}
      </ul>

      <ul className="hidden md:flex items-center justify-center gap-3 ">
        {socialLinks.map(({ href, icon }, index) => (
          <a key={index} href={href} target="_blank" rel="noopener noreferrer">
            <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:opacity-100">
              {icon}
            </li>
          </a>
        ))}
      </ul>

      <button onClick={menuOpen} className="md:hidden text-4xl">
        {isOpen ? <BiX /> : <BiMenu />}
      </button>

      {isOpen && (
        <div className={`fixed  right-0 top-[115px] md:hidden flex h-screen w-1/2 flex-col items-start justify-start gap-10 border-1 border-gray-800 bg-black/90 p-12`}>
          <ul className="flex flex-col gap-8">
            {["home", "about us", "pricing","contact"].map((item) => (
              <li key={item}>
                <a href={`#${item}`} className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
          </ul>
          <ul className="flex flex-wrap gap-5">
            {socialLinks.map(({ href, icon }, index) => (
              <a key={index} href={href} target="_blank" rel="noopener noreferrer">
                <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:opacity-100">
                  {icon}
                </li>
              </a>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;