import React from "react";
import "./SideBar.css";

function SideBar(props) {
  const { name, isChanged } = props;
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
          <a href="#">Hello {isChanged && name}</a>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
