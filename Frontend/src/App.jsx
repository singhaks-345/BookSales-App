import React from "react";
import Home from "../src/home/Home";
import "./App.css";
import Courses from "../src/courses/Courses";
import { Routes, Route } from "react-router-dom";
import Contect from "./components/Contect";
import Abouts from "./components/About";
import SignUp from "./components/SignUp";
function App() {
  return (
    <>
      {/* <Home />
      <Course />*/}
      <div className="dark:bg-slate900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Courses />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/contect" element={<Contect />} />
          <Route path="/about" element={<Abouts />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
