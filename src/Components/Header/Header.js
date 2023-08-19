import React from "react";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";

function Header() {
  const { name } = useSelector((state) => state.user);

  return (
    <div className="header">
      <h1>Redux Project</h1>
      <p>Hello {name}</p>
    </div>
  );
}

export default Header;
