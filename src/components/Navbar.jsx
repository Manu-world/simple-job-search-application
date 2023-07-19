import React from "react";

const Navbar = ({
  dark,
  onClick,
  onSearch,
  fullTimeOnly,
  setFullTimeOnly,
  locationValue,
  setLocationValue,
  searchValue,
  setSearchValue,
}) => {
  return (
    <div
      className={`bg-[#5964E0] min-w-full h-28 rounded-bl-[56px] relative flex flex-col items-center mb-32 text-[#19202D] bg-[url("src/assets/desktop/bg-pattern-header.svg")] bg-cover bg-center`}
    >
      <div className={`w-[80%] flex justify-between items-end mt-5`}>
        <p className={`font-black text-xl text-white`}>devjobs</p>
        <div className="flex justify-center items-center gap-2">
          {/* icon */}
          <img src="src\assets\desktop\icon-sun.svg" alt="sun icon" />
          <div
            onClick={onClick}
            className={`w-8 h-4 bg-white rounded-full flex items-center ${
              dark ? "justify-end" : "justify-start"
            } `}
          >
            <div
              className={`m-1 w-2 h-2 rounded-full bg-blue-500 hover:bg-blue-400`}
            ></div>
          </div>
          {/* icon */}
          <img src="src\assets\desktop\icon-moon.svg" alt="moon icon" />
        </div>
      </div>
      <div
        className={`absolute top-20 w-[80%] h-14 ${
          dark ? "bg-[#19202D]" : "bg-white"
        } rounded-sm flex justify-center items-center`}
      >
        <div
          className={`w-[40%] border-r-2 ${
            dark ? "border-[#6E8098]" : ""
          } h-full flex justify-center items-center p-5 `}
        >
          {/* icon */}
          <img
            src="src\assets\desktop\icon-search.svg"
            alt="search icon"
            className="w-5 h-5 mr-2"
          />
          <input
            type="text"
            name="search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Filter by title, companies, expertise..."
            className={`w-full h-10 focus:outline-none text-lg ${
              dark ? "bg-[#19202D]" : "bg-white"
            } ${dark ? "text-white" : "text-gray-300"} -mt-1 cursor-pointer`}
          />
        </div>
        <div
          className={`w-[30%] h-full flex justify-center items-center border-r-2 p-5 ${
            dark ? "border-[#6E8098]" : ""
          }`}
        >
          {/* icon */}
          <img
            src="src\assets\desktop\icon-location.svg"
            alt="location icon"
            className="w-4 h-5 mr-2"
          />
          <input
            type="text"
            name="location"
            value={locationValue}
            onChange={(e) => setLocationValue(e.target.value)}
            placeholder="Filter by location..."
            className={`w-full h-10 focus:outline-none ${
              dark ? "bg-[#19202D]" : "bg-white"
            } ${dark ? "text-white" : "text-gray-300"} -mt-2 cursor-pointer`}
          />
        </div>
        <div
          className={`max-w-md flex justify-evenly items-center ${
            dark ? "text-white" : "text-gray-300"
          } px-2`}
        >
          <input
            type="checkbox"
            name="check"
            id="check"
            checked={fullTimeOnly}
            onChange={(e) => setFullTimeOnly(e.target.checked)}
            className="form-checkbox w-3 h-3 cursor-pointer bg-gray-300"
          />
          <p className="ml-3 mr-6">Full Time Only</p>
          <button
            onClick={() => onSearch(searchValue, locationValue, fullTimeOnly)}
            className={`px-4 py-2 bg-[#5964E0] flex justify-center items-center rounded-sm text-white hover:bg-[#939BF4]`}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

{
  /* <div className={`flex justify-center`}>
  <Body dark={dark} data={filteredData} />
</div> */
}
