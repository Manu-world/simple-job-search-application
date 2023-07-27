import React, { useState } from "react";
import Modal from "./Modal";

const Navbar = ({
  dark,
  onSearch,
  fullTimeOnly,
  setFullTimeOnly,
  locationValue,
  setLocationValue,
  searchValue,
  setSearchValue,
}) => {
  const [showModal, setShowModal] = useState(false);
  const handleOpen = () => {
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div className="flex w-full flex-col items-center">
      <Modal
        showModal={showModal}
        handleClose={handleClose}
        onSearch={onSearch}
        dark={dark}
        fullTimeOnly={fullTimeOnly}
        setFullTimeOnly={setFullTimeOnly}
        locationValue={locationValue}
        setLocationValue={setLocationValue}
      />
      <div
        className={`absolute top-20 h-20 w-[80%] sm:h-14 ${
          dark ? "bg-[#19202D]" : "bg-white"
        } flex items-center justify-center rounded-md  sm:rounded-sm`}
      >
        {/* search by title */}
        <div
          className={`w-full sm:w-[33%] sm:border-r-2 md:w-[40%] ${
            dark ? "border-[#6E8098]" : ""
          } flex h-full items-center justify-between p-5 sm:justify-start`}
        >
          <img
            src="assets\desktop\icon-search.svg"
            alt="search icon"
            className="mr-2 hidden h-5 w-5 sm:flex"
          />
          <input
            type="text"
            name="search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Filter by title, companies, expertise..."
            className={`h-10 w-[40%] focus:outline-none sm:w-[85%] ${
              dark ? "bg-[#19202D]" : "bg-white"
            } ${dark ? "text-white" : "text-gray-300"} -mt-1 cursor-pointer`}
          />

          {/* mobile view Filter  */}
          <div className="flex items-center justify-center sm:hidden">
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-md ${
                dark ? "bg-[#19202D]" : "bg-white"
              } sm:hidden`}
              onClick={handleOpen}
            >
              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M19.108 0H.86a.86.86 0 00-.764.455.833.833 0 00.068.884l6.685 9.202.007.01c.242.32.374.708.375 1.107v7.502a.825.825 0 00.248.594.865.865 0 00.942.18l3.756-1.4c.337-.1.56-.41.56-.784v-6.092c0-.399.132-.787.375-1.108l.007-.009 6.685-9.202c.19-.26.217-.6.068-.884A.86.86 0 0019.108 0z"
                  fill={`${dark ? "#fff" : "#6E8098"}`}
                  fillRule="nonzero"
                />
              </svg>
            </div>

            <div
              className="flex h-12 w-12 items-center justify-center rounded-md bg-blue-500 sm:hidden"
              onClick={() => onSearch(searchValue, locationValue, fullTimeOnly)}
            >
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M17.112 15.059h-1.088l-.377-.377a8.814 8.814 0 002.15-5.784A8.898 8.898 0 008.898 0 8.898 8.898 0 000 8.898a8.898 8.898 0 008.898 8.899c2.211 0 4.23-.808 5.784-2.143l.377.377v1.081l6.845 6.832 2.04-2.04-6.832-6.845zm-8.214 0A6.16 6.16 0 118.9 2.737a6.16 6.16 0 010 12.322z"
                  fill="#fff"
                  fillRule="nonzero"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* location search  */}

        <div
          className={`hidden h-full items-center justify-center border-r-2 p-5 sm:flex sm:w-[33%] md:w-[30%] ${
            dark ? "border-[#6E8098]" : ""
          } `}
        >
          <img
            src="assets\desktop\icon-location.svg"
            alt="location icon"
            className="mr-2 h-5 w-4"
          />
          <input
            type="text"
            name="location"
            value={locationValue}
            onChange={(e) => setLocationValue(e.target.value)}
            placeholder="Filter by location..."
            className={`h-10 w-full focus:outline-none ${
              dark ? "bg-[#19202D]" : "bg-white"
            } ${dark ? "text-white" : "text-gray-300"} -mt-2 cursor-pointer`}
          />
        </div>
        <div
          className={`hidden max-w-md items-center justify-evenly sm:flex ${
            dark ? "text-white" : "text-gray-300"
          } px-2`}
        >
          <input
            type="checkbox"
            name="check"
            id="check"
            checked={fullTimeOnly}
            onChange={(e) => setFullTimeOnly(e.target.checked)}
            className="form-checkbox h-3 w-3 cursor-pointer bg-gray-300"
          />
          <p
            className={`ml-3 mr-6 text-sm font-bold ${
              dark ? "text-white" : "text-black"
            }`}
          >
            Full Time <span className="hidden md:inline-block"> Only</span>
          </p>
          <button
            onClick={() => onSearch(searchValue, locationValue, fullTimeOnly)}
            className={`flex items-center justify-center rounded-sm bg-[#5964E0] px-4 py-2 text-white hover:bg-[#939BF4]`}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
