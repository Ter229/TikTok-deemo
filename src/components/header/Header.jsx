import React from "react";
import { Link } from "react-router-dom";
import Search from "../search/Search";

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="logo">
        <h1>Tik Tok</h1>
      </Link>
      <Search />
    </header>
  );
};

export default Header;
