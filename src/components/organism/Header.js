import Login from "components/atom/Login";
import Logo from "components/atom/Logo";
import React from "react";
import { Route, Routes } from "react-router-dom";



function Header() {
  return (
    <header className="flex justify-between items-center p-4">
      <Routes>
        <Route path="/" element={<Logo />} />
      </Routes>
    </header>
  );
}

export default Header;
