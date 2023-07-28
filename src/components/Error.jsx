import React from "react";

const Error = () => {
  return (
    <div
      className={`flex h-screen w-full items-center justify-center font-serif text-3xl font-bold ${
        dark ? "text-white" : "text-gray-600"
      }`}
    >
      Opps! Sorry, page not found.
    </div>
  );
};

export default Error;
