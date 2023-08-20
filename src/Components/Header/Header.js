import React from "react";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";

function Header() {
  const { userData } = useSelector((state) => state.user);

  return (
    <div className="header">
      <h1>Redux Project</h1>
      <p>Hello {userData.name}</p>
    </div>
  );
}

export default Header;
