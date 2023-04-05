import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { LinkedIn, GitHub, CV, Mail } from "./common/Connect";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);
  return (
    <div>
      <div className="fixed w-full h-15 shadow-xl z-100">
        <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
          <Image
            width="100"
            height="10"
            src="/../public/assets/navLogo.png"
            alt="/"
          />
          <div>
            <ul className="hidden md:flex">
              <Link href="/">
                <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
              </Link>
              <Link href="/">
                <li className="ml-10 text-sm uppercase hover:border-b">
                  About
                </li>
              </Link>
              <Link href="/">
                <li className="ml-10 text-sm uppercase hover:border-b">
                  Skills
                </li>
              </Link>
              <Link href="/">
                <li className="ml-10 text-sm uppercase hover:border-b">
                  Projects
                </li>
              </Link>
              <Link href="/">
                <li className="ml-10 text-sm uppercase hover:border-b">
                  Contact
                </li>
              </Link>
            </ul>
            <div
              style={{ color: `${linkColor}` }}
              onClick={handleNav}
              className="md:hidden"
            >
              <AiOutlineMenu size={25} />
            </div>
          </div>
        </div>
      </div>

      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Image
                src="/../public/assets/navLogo.png"
                width="87"
                height="35"
              />
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 cursor-pointer mx-5"
              >
                <AiOutlineClose className="border-x-[10] mx-3 my-3" />
              </div>
            </div>
          </div>
          <div className="border-b border-gray-300 my-4">
            <p className="w-[85%] md:w-[90%] italic">
              Nathan Harris | Jr Full-Stack Engineer
            </p>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Projects
                </li>
              </Link>
              <Link href="/#contact">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <div>
                <p className="uppercase  border-b tracking-widest text-[#3F504D]">
                  C.V
                </p>
                <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                  <CV />
                </div>
              </div>
              <p className="uppercase border-b  tracking-widest text-[#3F504D]">
                Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <LinkedIn />
                <GitHub />
                <Mail />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
