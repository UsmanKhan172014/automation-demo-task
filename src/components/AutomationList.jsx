import { useState } from "react";
import Trash from "../assets/trash.png";
import Table from "./Table";
import TemplatesModal from "./TemplatesModal";
import Auto from "../assets/auto.png";
import Basic from "../assets/basic.png";
import Sequence from "../assets/sequence.png";
import File from "../assets/file.png";


const navItems = [
  { icon: Auto, label: "My Automations", active: true },
  { icon: Basic, label: "Basic" },
  { icon: Sequence, label: "Sequences" },
];



export default function AutomationList() {
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <>
      {/* Mobile Dropdown Navigation */}
      <div className="relative mt-3 block lg:hidden">
        <button
          className="flex items-center px-8 py-2.5 rounded-lg mx-2 my-1 cursor-pointer bg-white border border-gray-200 w-full justify-between"
          onClick={() => setDropdownOpen((open) => !open)}
        >
          <span className="flex items-center">
            <img src={navItems.find(i => i.active)?.icon} alt={navItems.find(i => i.active)?.label} />
            <span className="text-lg ml-3">{navItems.find(i => i.active)?.label}</span>
          </span>
          <svg className={`w-4 h-4 ml-2 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {dropdownOpen && (
          <div className="absolute left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
            {navItems.map((item) => (
              <div
                key={item.label}
                className={`flex items-center px-8 py-2.5 rounded-lg mx-2 my-1 cursor-pointer
                  ${item.active ? "bg-gray-200 text-[#565b65] font-semibold" : "text-[#565b65] font-semibold hover:bg-gray-100"}
                `}
              >
                <img src={item.icon} alt={item.label} />
                <span className="text-lg ml-3">{item.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="pb-10">
          <div className="flex flex flex-col lg:flex-row items-center justify-between mb-8">
            <h1 className="font-bold text-3xl">My Automations</h1>
            <button
              className="bg-[#3982f7] text-white rounded-lg px-5 py-2 font-medium text-base hover:bg-blue-700 transition mt-5 lg:mt-0"
              onClick={() => setShowModal(true)}
            >
              + New Automation
            </button>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-4 mb-8">
            <input
              type="text"
              placeholder="Search all Automations"
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="border border-gray-200 rounded-lg px-4 py-2 w-[100%] lg:w-[30%] text-lg text-[#767f90] focus:outline-none"
            />
            <div className="border border-gray-200 rounded-lg px-4 py-2 bg-white  w-[100%] lg:w-[30%] text-lg text-[#767f90]">
              <select className="w-full">
                <option>Any Trigger</option>
              </select>
            </div>
            <div className="border border-gray-200 rounded-lg px-4 py-2 bg-white w-[100%] lg:w-[30%] text-lg text-[#767f90]">
              <select className="w-full">
                <option>Any Trigger states</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row  items-center gap-4">
            <div className="flex items-center border border-gray-200 rounded-lg px-4 py-2 gap-4 bg-white text-gray-700 w-[100%] lg:w-[30%] text-lg font-medium cursor-pointer">
            <img className="w-7 h-7 " src={File} alt="" />FAQ
            </div>
            <div className="flex items-center border-2 border-dashed border-blue-500 rounded-lg px-4 py-2 bg-white text-blue-500 w-[100%] lg:w-[30%] text-lg font-medium  cursor-pointer hover:bg-blue-50 transition">
              <span className="mr-2">+</span> New Folder
            </div>
          </div>

          <div className="flex justify-end mt-6 px-3">
            <button className="text-blue-500 text-md font-medium  flex items-center gap-1 ">
              <span className="text-blue-500 text-md"><img className="w-6 h-6" src={Trash} alt="" /></span> Trash
            </button>
          </div>
        </div>


        <Table />
        {showModal && (
          <TemplatesModal onClose={() => setShowModal(false)} />
        )}
      </div>

    </>
  );
}
