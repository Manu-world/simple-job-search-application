import React from "react";

// light-gray- #f4f6f8 gray- #9DAEC2 Dark-gray- #6E8098 violet- #9e7f66 violet:hover #939BF4 veryDarkBlue- #19202D midnight- #121721

const Card = ({
  company,
  logo,
  dark,
  postedAt,
  contract,
  location,
  position,
  logoBackground,
}) => {
  return (
    <div
      className={`relative min-h-52 w-full rounded-md ${
        dark ? "bg-[#19202D]" : "bg-white"
      } cursor-pointer`}
    >
      {/* top logo banner */}
      <div
        style={{ background: logoBackground }}
        className={`absolute -top-6 left-5 w-12 h-12 rounded-xl flex justify-center items-center`}
      >
        <img src={logo} alt={logo} className="" />
      </div>

      {/* tile details */}
      <div className={`py-10 px-5 flex flex-col gap-2`}>
        <p className={`text-[#9DAEC2]`}>{`${postedAt} . ${contract}`}</p>
        <p
          className={`text-xl font-black ${
            dark ? "text-white" : "text-[hsl(214,17%,51%)]"
          }`}
        >
          {position}
        </p>
        <p className={`text-[#9DAEC2]`}>{company}</p>
        <p className={`text-[#5964E0] mt-4`}>{location}</p>
      </div>
    </div>
  );
};

export default Card;
