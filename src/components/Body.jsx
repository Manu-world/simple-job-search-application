import { useState } from "react";
import Card from "./Card";
import Detail from "./Details";

const Body = ({ dark, data, click }) => {
  const [visibleItems, setVisibleItems] = useState(12);

  const handleLoadMore = () => {
    // Increase the number of visible items by 12
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 12);
  };

  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 w-[80%] gap-x-5 gap-y-14">
      {data.slice(0, visibleItems).map((item) => (
        <Card key={item.id} {...item} dark={dark} onClick={click} />
      ))}

      {visibleItems < data.length && (
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
  );
};

export default Body;
