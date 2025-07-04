import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import Logo from "../assets/logo.png";
import Profile from "../assets/profile.png";
import Home from "../assets/home.png";
import User from "../assets/user.png";
import Code from "../assets/code.png";
import Msg from "../assets/msg.png";
import Setting from "../assets/setting.png";
import FAQ from "../assets/faq.png";
import Icon from "../assets/icon.png";

const navItems = [
  { icon: Home, label: "Home" },
  { icon: User, label: "My Automations", active: true },
  { icon: Code, label: "Basic" },
  { icon: Msg, label: "Sequences" },
  { icon: Setting, label: "Sync" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="flex items-center justify-between px-8 border-b border-[#d9d9d9] p-[30.5px]">
        <h1 className="font-bold text-3xl">Automation</h1>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-3xl" onClick={() => setMenuOpen(!menuOpen)}>
          <HiMenu />
        </button>
      </header>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#e7e7e7] border-b border-gray-300 shadow-md">
          {/* Logo + Profile */}
          <div className="flex flex-col items-start p-4  border-b border-[#d9d9d9]">
            <img className="w-14 h-14 mb-2" src={Logo} alt="logo" />
            <img className="w-12 h-12" src={Profile} alt="profile" />
            <span className="user-tag text-sm font-semibold text-gray-700 mt-1">PRO</span>
          </div>

          {/* Navigation Items */}
          <nav className="flex flex-col items-start px-4 mt-4 gap-3">
            {navItems.map((item) => (
              <div
                key={item.label}
                className={`flex items-center gap-3 px-4 py-2 rounded-lg w-full
                  ${item.active ? "bg-gray-200 text-blue-600 font-semibold" : "text-gray-900 font-normal hover:bg-gray-200"}
                `}
              >
                <img className="w-6 h-6" src={item.icon} alt={item.label} />
                <span className="text-sm">{item.label}</span>
              </div>
            ))}
          </nav>

          {/* Bottom Icons */}
          <div className="flex justify-start px-8 gap-8 my-6">
            <img className="w-6 h-6" src={Icon} alt="icon" />
            <img className="w-6 h-6" src={FAQ} alt="faq" />
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
