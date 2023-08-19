import React from "react";
import "./SideBar.css";
import { useSelector } from "react-redux";
function SideBar() {
  const { name, email } = useSelector((state) => state.user);
  return (
    <div className="sidebar">
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">Hello {name}</a>
          <a href="#"> {email}</a>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
