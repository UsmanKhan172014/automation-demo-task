// layouts/DashboardLayout.tsx
import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";
import SecondarySidebar from "@/components/SecondarySidebar";
import Header from "@/components/Header";

export default function DashboardLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Sidebar for Desktop */}
      <Sidebar />

      {/* Sidebar Drawer for Mobile */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-40 md:hidden">
          <div className="absolute left-0 top-0 bg-[#e7e7e7] w-[200px] h-full shadow-lg z-50">
            <Sidebar />
            <button
              className="absolute top-2 right-2 text-xl text-black"
              onClick={() => setMenuOpen(false)}
            >
              ✕
            </button>
          </div>
        </div>
      )}

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header onMenuClick={() => setMenuOpen(true)} />

        <div className="flex h-full overflow-hidden">
          <SecondarySidebar />

          <main className="p-6 overflow-y-auto w-full w-[100%] md:w-[80%]">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
