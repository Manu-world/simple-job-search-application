import React, { useState } from "react";
import Index from "./components/Index";
import Detail from "./components/Details";
import { Route, Routes } from "react-router-dom";
import Topbar from "./components/Topbar";

const App = () => {
  const [dark, setDark] = useState(false);
  return (
    <div
      className={`${
        dark ? "bg-black dark:bg-gray-200" : "bg-gray-200"
      } dark:bg-black`}
    >
      <Topbar dark={dark} onClick={() => setDark((prev) => !prev)} />
      <Routes>
        <Route path="/" element={<Index dark={dark} />} />
        <Route path="/details/:id" element={<Detail dark={dark} />} />
      </Routes>
    </div>
  );
};

export default App;
