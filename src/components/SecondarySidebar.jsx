import React from "react";
import Auto from "../assets/auto.png";
import Basic from "../assets/basic.png";
import Sequence from "../assets/sequence.png";



const navItems = [
  { icon: Auto, label: "My Automations", active: true },
  { icon: Basic, label: "Basic" },
  { icon: Sequence, label: "Sequences" },
];

const SecondarySidebar = () => (
  <aside className="w-[20%] h-[100%] hidden lg:block">
    <nav className="flex-1 mt-3">
      {navItems.map((item) => (
        <div
          key={item.label}
          className={`flex items-center px-8 py-2.5 rounded-lg mx-2 my-1 cursor-pointer
            ${item.active ? "bg-gray-200  text-[#565b65] font-normal font-semibold" : "text-[#565b65] font-semibold hover:bg-gray-200"}
          `}
        >
          <img src={item.icon} alt={item.label} />
          <span className="text-lg ml-3">{item.label}</span>
        </div>
      ))}
    </nav>
  
  </aside>
);

export default SecondarySidebar;
