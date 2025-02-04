import React from "react";
import { appleImg, bagImg, searchImg } from "../utils";
import { navLists } from "../constants";

const Navigation = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-10 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
        <img src={appleImg} alt="" width={14} height={18} />
        <div className="flex flex-1 items-center justify-center gap-2 max-sm:hidden">
          {navLists.map((nav, index) => (
            <div key={index} className="text-sm px-5 text-gray-400 hover:text-white transition-all cursor-pointer">{nav}</div>
          ))}
        </div>
        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1"> 
          <img src={searchImg} alt="" width={18} height={18} />
          <img src={bagImg} alt="" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
