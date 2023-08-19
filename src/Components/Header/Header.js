import React from "react";
import "./Header.css";

function Header(props) {
  const { name, isChanged } = props;
  return (
    <div className="header">
      <h1>Redux Project</h1>
      <p>Hello {isChanged && name}</p>
    </div>
  );
}

export default Header;
