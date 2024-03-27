import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import LoginPage from "./pages/login/LoginPage";
import Home from "./pages/home/Home";
import InvHome from "./pages/inventaris/InvHome";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/inventaris" element={<InvHome />} />
    </Routes>
  );
}

export default App;
