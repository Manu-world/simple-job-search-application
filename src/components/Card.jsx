import React from "react";
import { Link } from "react-router-dom";

// light-gray- #f4f6f8 gray- #9DAEC2 Dark-gray- #6E8098 violet- #9e7f66 violet:hover #939BF4 veryDarkBlue- #19202D midnight- #121721

const Card = ({ data, dark }) => {
  return (
    <Link
      to={`/details/${data.id} `}
      
      className={`min-h-52 relative w-full rounded-md dark:bg-[#19202D] ${
        dark ? "bg-[#19202D] dark:bg-white" : "bg-white"
      } group transform cursor-pointer transition-all duration-300 hover:scale-105`}
      onClick={() => navigate("/details", { state: data })}
    >
      {/* top logo banner */}
      <div
        style={{ background: data.logoBackground }}
        className={`absolute -top-6 left-5 flex h-12 w-12 items-center justify-center rounded-xl`}
      >
        <img src={data.logo} alt={data.logo} className="" />
      </div>

      {/* tile details */}
      <div className={`flex flex-col gap-2 px-5 py-10`}>
        <p
          className={`text-[#9DAEC2]`}
        >{`${data.postedAt} . ${data.contract}`}</p>
        <p
          className={`text-xl font-black dark:text-white ${
            dark
              ? "text-white dark:text-[hsl(214,17%,51%)]"
              : "text-[hsl(214,17%,51%)]"
          } group-hover:text-[#9DAEC2]`}
        >
          {data.position}
        </p>
        <p className={`text-[#9DAEC2]`}>{data.company}</p>
        <p className={`mt-4 text-[#5964E0]`}>{data.location}</p>
      </div>
    </Link>
  );
};

export default Card;
