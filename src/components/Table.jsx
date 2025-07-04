import React from "react";
import ActiveImg from "../assets/active.png";
import InactiveImg from "../assets/inactive.png";
import Grid from "../assets/grid.png";

const Table = () => {
  const automations = [
    {
      id: 1,
      title: "Untitled",
      tag: null,
      subtitle: "User comments on your Live and comment contains",
      statusDot: "#f7b500",
      runs: "n/a",
      ctr: "n/a",
      modified: "24 minutes ago",
      checked: false,
      right: "Off",
      active: false,
    },
    {
      id: 2,
      title: "「気になる」から収益化の方法を伝える",
      tag: "伝える",
      subtitle: "User comments on your Live and comment contains",
      statusDot: "#e14d4f",
      runs: "1",
      ctr: "100%",
      modified: "3 days ago",
      checked: false,
      right: null,
      active: true,
    },
    {
      id: 3,
      title: "Untitled",
      tag: "伝える",
      subtitle: "   User replies on any Story and message contains",
      statusDot: "#e14d4f",
      runs: "13",
      ctr: "84.6%",
      modified: "2 weeks ago",
      checked: false,
      right: null,
      active: true,
    },
  ];

  return (
      <>
        {/* Table */}
        <div className="flex justify-end mt-10 px-3">
          <button className="text-gray-500 text-md font-medium  flex items-center gap-1 ">
            <span className="text-gray-500 text-md"><img className="w-10 h-10" src={Grid} alt="" /></span> View as grid
          </button>
        </div>

        <div className=" overflow-x-auto">
          <div className="min-w-[700px]">
            <div className="flex items-center px-8 mt-12 mb-2 text-sm text-gray-400 font-medium">
              {/* <div className="w-[5%]"></div> */}
              <div className="w-[50%] lg:w-[45%] flex items-center">
                <input type="checkbox" />
                <span className="ml-2">Name</span>
              </div>
              <div className="w-[50%] lg:w-[40%] table-head  flex justify-between">
                <div className="w-full"></div>
                <div className="w-full text-center">Runs</div>
                <div className="w-full text-center">CTR</div>
                <div className="w-full text-center">Modified</div>
              </div>
            </div>
            <div>
              {automations.map((a) => (
                  <div
                      key={a.id}
                      className="flex items-center px-8 py-8 mb-4 bg-white rounded-xl shadow-sm border border-gray-200"
                  >
                    {/* <div className="w-[5%] flex justify-center">
                <input type="checkbox" checked={a.checked} readOnly className="w-4 h-4 accent-blue-500" />
              </div> */}
                    <div className="w-[50%] lg:w-[45%] flex ">
                      <input type="checkbox" checked={a.checked} readOnly className="w-4 h-5 accent-blue-500" />
                      <div className="">
                        <div className="flex ml-2 items-center">
                          {a.statusDot && (
                              <span className="w-3 h-3 rounded-full mr-2" style={{ background: a.statusDot }} />
                          )}
                          <span className="font-semibold font-lg mr-2">{a.title}</span>
                        </div>
                        {a.subtitle && (
                            <div className="flex items-center text-[#767f90] text-sm mt-4">
                              <img
                                  src={a.active ? ActiveImg : InactiveImg}
                                  alt={a.active ? "Active" : "Inactive"}
                                  className="w-5 h-5 mr-2"
                              />
                              {a.subtitle}
                              {a.tag && (
                                  <span className="font-semibold font-sm ml-2 bg-blue-50 border border-blue-200 rounded-2xl px-4 w-[40%] lg:w-[50%] xl:w-[30%]">
                            {a.tag}
                          </span>
                              )}
                            </div>
                        )}
                      </div>
                    </div>
                    <div className=" w-[50%] lg:w-[40%] table-body flex justify-between">
                      <div className="w-full text-center flex items-end justify-end ">
                        {a.right && (
                            <div className="">
                        <span className="px-3 bg-gray-600 rounded-xl text-white font-medium font-sm">
                          {a.right}
                        </span>
                            </div>
                        )}
                      </div>
                      <div className="w-full text-center">
                        <div className="font-medium text-md">{a.runs}</div>
                        <div className="text-md text-gray-400  mt-4">{a.runs === "n/a" ? "n/a" : a.runs}</div>
                      </div>
                      <div className="w-full text-center">
                        <div className="font-mediumtext-md ">{a.ctr}</div>
                        <div className="text-md text-gray-400  mt-4">{a.ctr === "n/a" ? "n/a" : a.ctr}</div>
                      </div>
                      <div className="w-full text-center">
                        <div className="font-medium text-md text-gray-400">{a.modified}</div>
                      </div>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </div>
      </>
  );
}

export default Table;
