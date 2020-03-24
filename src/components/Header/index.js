import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link to="/ingredients">ingredients</Link>
      <Link to="/meals">meals</Link>
      <Link to="/plans">plans</Link>
    </div>
  );
};

export default Header;
