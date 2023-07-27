import React, { useState } from "react";
import Card from "./Card";
import data from "../data.json";
import Search from "./Search";

const Index = ({ dark }) => {
  const [visibleItems, setVisibleItems] = useState(12);

  const [searchValue, setSearchValue] = useState("");
  const [locationValue, setLocationValue] = useState("");
  const [fullTimeOnly, setFullTimeOnly] = useState(false);
  const [filteredData, setFilteredData] = useState(data);

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

  // manage visible items
  const handleLoadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 12);
  };

  return (
    <div className={`min-h-screen`}>
      <Search
        dark={dark}
        onSearch={handleSearch}
        setLocationValue={setLocationValue}
        setFullTimeOnly={setFullTimeOnly}
        setSearchValue={setSearchValue}
        locationValue={locationValue}
        fullTimeOnly={fullTimeOnly}
        searchValue={searchValue}
      />

      {/* business cards mapped */}
      <div className="flex w-full flex-col items-center">
        <div className="grid w-[80%] grid-cols-1 gap-x-5 gap-y-14 pb-10 sm:grid-cols-2 sm:pb-0 md:grid-cols-3">
          {filteredData.slice(0, visibleItems).map((item) => (
            <Card key={item.id} data={item} dark={dark} />
          ))}
        </div>
        {visibleItems < filteredData.length && (
          <div className="my-10 flex w-[100%] justify-center">
            <button
              className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-200 hover:text-blue-500"
              onClick={handleLoadMore}
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
