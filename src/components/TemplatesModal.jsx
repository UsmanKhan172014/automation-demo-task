import React from "react";
import Star from "../assets/star.png";
import QuickIcon from "../assets/quick.png";
import FlowIcon from "../assets/flow.png";

const templates = [
    {
        title: "Auto-DM links from comments",
        desc: "Send a link when people comment on a post or reel",
        type: "Quick Automation",
        popular: true,
    },
    {
        title: "Generate leads with stories",
        desc: "Use limited-time offers in your Stories to convert leads",
        type: "Quick Automation",
        popular: true,
    },
    {
        title: "Automate conversations with AI",
        desc: "Get AI to collect your follower's info, share details or tell it how to reply",
        type: "Flow Builder",
        ai: true,
    },
    {
        title: "Use AI to answer all your FAQs",
        desc: "AI will reply to questions you get asked all the time",
        type: "Flow Builder",
        ai: true,
    },
    {
        title: "Respond to all your DMs",
        desc: "Auto-send customized replies when people DM you",
        type: "Quick Automation",
    },
    {
        title: "Grow followers from comments",
        desc: "Incentivize a follow to grow your account",
        type: "Quick Automation",
        new: true,
    },
];

const TemplatesModal = ({ onClose }) => (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
        <div className="bg-white rounded-xl shadow-xl w-[70%] modal-div mx-auto relative max-h-[90vh] flex flex-col">
            <button
                className="absolute top-4 right-8 text-gray-400 hover:text-gray-600 text-2xl"
                onClick={onClose}
            >
                &times;
            </button>
            <div className="bg-[#f6f7f9] flex-1 overflow-y-auto rounded-xl">
                <div className="flex flex-col xl:flex-row items-start xl:items-center mb-6 bg-white p-4 xl:p-8">
                    <h2 className="text-3xl  modal-head font-extrabold w-full xl:w-[30%] mb-4 xl:mb-0">Ready-to-Go Templates</h2>
                    <div className="flex flex-col lg:flex-row  items-start sm:items-center gap-4 w-full xl:w-[70%]">
                        <label className="flex items-center text-md font-medium">
                            <input type="checkbox" className="mr-2 w-5 h-5" />
                            Don't show Templates again
                        </label>
                        <button className="border border-gray-300 rounded-md pl-1 pr-3 py-1 text-sm md:text-md font-medium flex items-center h-[35px]">
                            <img className="w-8 h-8" src={Star} alt="" />
                            Create With AI
                        </button>
                        <button className="border border-gray-300 rounded-md px-3 py-1 text-sm md:text-md font-medium h-[35px]">
                            Start From Scratch
                        </button>
                    </div>
                </div>
                <div className="px-4 sm:px-8 pb-8">
                    <input
                        type="text"
                        placeholder="Search Templates"
                        className="w-full border border-gray-200 rounded px-3 py-2 mb-6 text-md"
                    />
                    <div className="text-lg font-semibold mb-3">All Templates</div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {templates.map((tpl, idx) => (
                            <div
                                key={tpl.title}
                                className={`border rounded-lg p-4 bg-white hover:shadow transition cursor-pointer ${idx === 0 ? "border-blue-500" : "border-gray-200"}`}
                            >
                                <div className="h-[180px] sm:h-[220px] modal-content">
                                    <div className="font-bold text-lg sm:text-xl mb-1">{tpl.title}</div>
                                    <div className="text-gray-500 text-md mb-4">{tpl.desc}</div>
                                </div>
                                <div className="flex items-center justify-between gap-2 ">
                                    <span className="text-sm rounded px-2 py-0.5 flex items-center">
                                        {tpl.type === "Quick Automation" && (
                                            <img src={QuickIcon} alt="Quick" className="w-8 h-8 mr-1" />
                                        )}
                                        {tpl.type === "Flow Builder" && (
                                            <img src={FlowIcon} alt="Flow" className="w-8 h-8 mr-1" />
                                        )}
                                        {tpl.type}
                                    </span>
                                    {tpl.popular && (
                                        <span className="text-sm bg-orange-400 text-white rounded px-2 py-0.5 font-medium">
                                            POPULAR
                                        </span>
                                    )}
                                    {tpl.ai && (
                                        <span className="text-sm bg-gray-900 text-white rounded px-2 py-0.5 font-medium">
                                            AI
                                        </span>
                                    )}
                                    {tpl.new && (
                                        <span className="text-sm bg-purple-500 text-white rounded px-2 py-0.5 font-medium">
                                            NEW
                                        </span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default TemplatesModal;
