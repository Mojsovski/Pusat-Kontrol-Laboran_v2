import React from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";

function Home() {
  return (
    <div className="bg-stone-300">
      <Sidebar />
      <Navbar title="Menu Utama" />
      <div className=" px-4 py-28 sm:ml-[266px] flex flex-col gap-5 relative bg-[#DBD9D5]"></div>
    </div>
  );
}

export default Home;
