import React from "react";
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

const Sidebar = () => (
  <aside className="hidden md:flex w-[127px] bg-[#e7e7e7] h-screen flex-col pt-4">
    <div className="border-b border-[#d9d9d9]  h-[82px] flex items-center justify-center">
      <img className="logo mx-auto" src={Logo} alt="" />
    </div>
    <div className="border-b border-[#d9d9d9]  h-[92px] flex items-center justify-center">
      <img className="user mx-auto" src={Profile} alt="" />
      <span className="user-tag px-2">PRO</span>
    </div>
    <nav className="flex-1 mt-6">
      {navItems.map((item) => (
        <div
          key={item.label}
          className={`flex items-center px-8 py-2 mx-2 my-1 rounded-lg cursor-pointer
            ${item.active ? "bg-gray-200 text-blue-600 font-semibold" : "text-gray-900 font-normal hover:bg-gray-200"}
          `}
        >
          <img className="w-10 h-10" src={item.icon} alt={item.label} />
          {/* <span className="text-sm">{item.label}</span> */}
        </div>
      ))}
    </nav>
    <div className="mt-auto p-6 items-center">
      <img className=" mx-auto mb-10" src={Icon} alt="" />
      <img className=" mx-auto" src={FAQ} alt="" />
    </div>
  </aside>
);

export default Sidebar;
