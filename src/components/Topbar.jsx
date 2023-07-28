import React from "react";
import { Link } from "react-router-dom";

const Topbar = ({ dark, onClick }) => {
  return (
    <div
      className={`relative mb-32 flex h-28 min-w-full flex-col items-center bg-[#5964E0] bg-[url("\\assets\\desktop\\bg-pattern-header.svg")] bg-cover bg-center text-[#19202D] sm:rounded-bl-[56px]`}
    >
      <div className={`mt-5 flex w-[80%] items-end justify-between`}>
        <Link to={"/"} className={`text-xl font-black text-white`}>
          devjobs
        </Link>
        <div className="flex items-center justify-center gap-2">
          <img
            src="\assets\desktop\icon-sun.svg"
            alt="sun icon"
            className="dark:hidden"
          />
          <img
            src="\assets\desktop\icon-moon.svg"
            alt="sun icon"
            className="hidden dark:block"
          />
          <div
            onClick={onClick}
            className={`flex h-4 w-8 items-center rounded-full bg-white ${
              dark ? "justify-end" : "justify-start"
            } cursor-pointer`}
          >
            <div
              className={`m-1 h-2 w-2 rounded-full bg-blue-500 hover:bg-blue-400`}
            ></div>
          </div>
          <img
            src="\assets\desktop\icon-moon.svg"
            alt="moon icon"
            className="dark:hidden"
          />
          <img
            src="\assets\desktop\icon-sun.svg"
            alt="moon icon"
            className="hidden dark:block"
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
