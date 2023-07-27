import React, { useState } from "react";
import Index from "./components/Index";
import Detail from "./components/Details";
import { Route, Routes } from "react-router-dom";
import Topbar from "./components/Topbar";

const App = () => {
  const [dark, setDark] = useState(false);
  return (
    <div className={`${dark ? "bg-black" : "bg-gray-200"}`}>
      <Topbar dark={dark} onClick={() => setDark((prev) => !prev)} />
      <Routes>
        <Route path="/details" element={<Detail dark={dark} />} />
        <Route path="/" element={<Index dark={dark} />} />
      </Routes>
    </div>
  );
};

export default App;
