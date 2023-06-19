import React from "react";
import { BrowserRouter, Route, Routes, Router } from "react-router-dom";
import Movie from "./Movie";
import Home from "./Home";
import Single from "./Single";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies/:id" element={<Single />} />
    </Routes>
  );
}

export default App;
