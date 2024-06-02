import React, { useState } from "react";
import logo from "../../Assets/logo.png";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="bg-purple-800 sticky top-0 z-30">
      <div className="container mx-auto flex justify-between items-center p-2">
        <ScrollLink
          to="hero"
          spy={true}
          smooth={true}
          offset={-70}
          duration={800}
          className="cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          <img src={logo} alt="Logo" className="w-10 h-10" />
        </ScrollLink>
        <div className="hidden md:flex space-x-12 flex-grow justify-center">
          <ScrollLink
            to="hero"
            spy={true}
            smooth={true}
            offset={-70}
            duration={800}
            className="text-white font-bold font-mono cursor-pointer hover:underline"
            onClick={() => setIsOpen(false)}
          >
            ANASAYFA
          </ScrollLink>
          <ScrollLink
            to="about"
            spy={true}
            smooth={true}
            offset={-170}
            duration={800}
            className="text-white font-bold font-mono cursor-pointer hover:underline"
            onClick={() => setIsOpen(false)}
          >
            HAKKIMIZDA
          </ScrollLink>
          <ScrollLink
            to="products"
            spy={true}
            smooth={true}
            offset={-170}
            duration={800}
            className="text-white font-bold font-mono cursor-pointer hover:underline"
            onClick={() => setIsOpen(false)}
          >
            ÜRÜNLER
          </ScrollLink>
          <ScrollLink
            to="faq"
            spy={true}
            smooth={true}
            offset={-150}
            duration={800}
            className="text-white font-bold font-mono cursor-pointer hover:underline"
            onClick={() => setIsOpen(false)}
          >
            SSS
          </ScrollLink>
          <ScrollLink
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={800}
            className="text-white font-bold font-mono cursor-pointer hover:underline"
            onClick={() => setIsOpen(false)}
          >
            İLETİŞİM
          </ScrollLink>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white font-bold font-mono focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <ScrollLink
            to="hero"
            spy={true}
            smooth={true}
            offset={-470}
            duration={800}
            className="block text-white font-bold font-mono p-4 cursor-pointer hover:underline"
            onClick={() => setIsOpen(false)}
          >
            ANASAYFA
          </ScrollLink>
          <ScrollLink
            to="about"
            spy={true}
            smooth={true}
            offset={-450}
            duration={800}
            className="block text-white font-bold font-mono p-4 cursor-pointer hover:underline"
            onClick={() => setIsOpen(false)}
          >
            HAKKIMIZDA
          </ScrollLink>
          <ScrollLink
            to="products"
            spy={true}
            smooth={true}
            offset={-470}
            duration={800}
            className="block text-white font-bold font-mono p-4 cursor-pointer hover:underline"
            onClick={() => setIsOpen(false)}
          >
            ÜRÜNLER
          </ScrollLink>
          <ScrollLink
            to="faq"
            spy={true}
            smooth={true}
            offset={-410}
            duration={800}
            className="block text-white font-bold font-mono p-4 cursor-pointer hover:underline"
            onClick={() => setIsOpen(false)}
          >
            SSS
          </ScrollLink>
          <ScrollLink
            to="contact"
            spy={true}
            smooth={true}
            offset={-470}
            duration={800}
            className="block text-white font-bold font-mono p-4 cursor-pointer hover:underline"
            onClick={() => setIsOpen(false)}
          >
            İLETİŞİM
          </ScrollLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
