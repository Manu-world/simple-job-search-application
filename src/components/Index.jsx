import React, { useState } from "react";
import Card from "./Card";
import data from "../data.json";
import Navbar from "./Navbar";

const Index = () => {
  const [visibleItems, setVisibleItems] = useState(12);

  const [searchValue, setSearchValue] = useState("");
  const [locationValue, setLocationValue] = useState("");
  const [fullTimeOnly, setFullTimeOnly] = useState(false);
  const [filteredData, setFilteredData] = useState(data);
  const [dark, setDark] = useState(false);

  const handleSearch = (searchValue, locationValue, fullTimeOnly) => {
    let newData = data;

    // Filter by search value
    if (searchValue) {
      const searchRegex = new RegExp(searchValue, "i");
      newData = newData.filter(
        (item) =>
          searchRegex.test(item.company) ||
          searchRegex.test(item.position) ||
          searchRegex.test(item.contract)
      );
    }

    // Filter by location value
    if (locationValue) {
      const locationRegex = new RegExp(locationValue, "i");
      newData = newData.filter((item) => locationRegex.test(item.location));
    }

    // Filter by full time only
    if (fullTimeOnly) {
      newData = newData.filter((item) => item.contract === "Full Time");
    }

    setFilteredData(newData);
  };

  // from the body component
  const handleLoadMore = () => {
    // Increase the number of visible items by 12
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 12);
  };

  return (
    <div className={`${dark ? "bg-black" : "bg-gray-200"}`}>
      <Navbar
        onClick={() => setDark((prev) => !prev)}
        dark={dark}
        onSearch={handleSearch}
        setLocationValue={setLocationValue}
        setFullTimeOnly={setFullTimeOnly}
        setSearchValue={setSearchValue}
        locationValue={locationValue}
        fullTimeOnly={fullTimeOnly}
        searchValue={searchValue}
      />

      {/* the Body component */}
      <div className="w-full flex flex-col items-center">
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 w-[80%] gap-x-5 gap-y-14">
          {filteredData.slice(0, visibleItems).map((item) => (
            <Card key={item.id} {...item} dark={dark} />
          ))}

          {visibleItems < filteredData.length && (
            <div className="flex">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={handleLoadMore}
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
