import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full h-[80px] leading-[80px] flex items-center">
      <div className="container">
        <div className="flex items-center justify-between">
          {/* logo */}
          <div className="flex items-center gap-[10px]">
            <img
              src="src/assets/Icon.png"
              className="w-[35px]
            h-[35px]"
              alt=""
            />

            <div className="leading-[20px]">
              <h2 className="text-xl text-smallTextColor font-[700]">SaaSto</h2>
            </div>
          </div>
          {/* Logo Bitiş */}

          {/* Navbar */}
          <div className="menu">
            <ul className="xl:flex md:flex hidden  items-center gap-10">
              <li>
                <a className="text-smallTextColor font-[600]" href="#demos">
                  Demos
                </a>
              </li>
              <li>
                <a className="text-smallTextColor font-[600]" href="#features">
                  Features
                </a>
              </li>
              <li>
                <a className="text-smallTextColor font-[600]" href="#pricing">
                  {" "}
                  Pricing
                </a>
              </li>
              <li>
                <a className="text-smallTextColor font-[600]" href="#contact">
                  {" "}
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/* Login/Sign UP */}
          <div className=" flex items-center gap-4">
            <button className="items-center gap-2">Login</button>
            <button className="bg-[#5BC17F] text-white font-medium py-2 px-4 w-24 h-10 flex items-center justify-center rounded-full">
              Sign up
            </button>

            {/* hamburger menü */}

            <span
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-2xl text-smallTextColor text-[#5BC17F] md:hidden cursor-pointer "
            >
              <GiHamburgerMenu />
            </span>

            <div
              className={`absolute xl:hidden top-24 left-0 w-full bg-white flex flex-col items-center gap-6 text-lg font-semibold transition-transform ${
                isMenuOpen ? "opacity-100 " : "opacity-0"
              }`}
              style={{ transition: "transform 0.3s ease ,opacity 0.3s ease" }}
            >
              <li className="list-none w-full text-center p-4 hover:bg-[#5BC17F] hover:text-white transition-all cursor-pointer">
                Demos
              </li>
              <li className="list-none w-full text-center p-4 hover:bg-[#5BC17F] hover:text-white transition-all cursor-pointer">
                Features
              </li>
              <li className="list-none w-full text-center p-4 hover:bg-[#5BC17F] hover:text-white transition-all cursor-pointer">
                Pricing
              </li>
              <li className="list-none w-full text-center p-4 hover:bg-[#5BC17F] hover:text-white transition-all cursor-pointer">
                Contact
              </li>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
