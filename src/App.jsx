import React from "react";
import Index from "./components/Index";
import Detail from "./components/Details";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="">
      <Routes>
        <Route path="/details" element={<Detail />} />
        <Route path="/" element={<Index />} />
      </Routes>
    </div>
  );
};

export default App;
