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
        className={`absolute top-20 w-[80%] sm:h-14 h-20 ${
          dark ? "bg-[#19202D]" : "bg-white"
        } sm:rounded-sm rounded-md flex justify-center  items-center`}
      >
        <div
          className={`w-full sm:w-[40%] sm:border-r-2 ${
            dark ? "border-[#6E8098]" : ""
          } h-full flex sm:justify-start justify-between items-center p-5`}
        >
          {/* icon */}
          <img
            src="src\assets\desktop\icon-search.svg"
            alt="search icon"
            className="hidden sm:flex w-5 h-5 mr-2"
          />
          <input
            type="text"
            name="search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Filter by title, companies, expertise..."
            className={`sm:w-[40%] w-[29%] h-10 focus:outline-none text-lg ${
              dark ? "bg-[#19202D]" : "bg-white"
            } ${dark ? "text-white" : "text-gray-300"} -mt-1 cursor-pointer`}
          />

          <div className="sm:hidden flex justify-center items-center">
            <div className="flex items-center justify-center w-12 h-12 rounded-md bg-white sm:hidden">
              <img
                src="src\assets\mobile\icon-filter.svg"
                alt=""
                className="fill-white"
              />
            </div>

            <div className="flex items-center justify-center w-12 h-12 rounded-md bg-blue-500 sm:hidden">
              <img src="src\assets\desktop\icon-search.svg" alt="" />
            </div>
          </div>
        </div>

        <div
          className={`hidden w-[30%] h-full sm:flex justify-center items-center border-r-2 p-5 ${
            dark ? "border-[#6E8098]" : ""
          } `}
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
          className={`hidden sm:flex justify-evenly items-center max-w-md ${
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
