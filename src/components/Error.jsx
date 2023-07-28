import React from "react";

const Error = () => {
  return (
    <div
      className={`flex h-screen w-full items-center justify-center font-serif text-3xl font-bold ${
        dark ? "text-white" : "text-gray-600"
      }`}
    >
      Opps! Sorry💔, your search did not match any job
    </div>
  );
};

export default Error;
