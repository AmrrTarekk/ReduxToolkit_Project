import React from "react";
import "./Form.css";

function Form(props) {
  const { setName, setEmail, addUser } = props;
  return (
    <form onSubmit={addUser}>
      <div className="form-group">
        <input
          type="text"
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <input
          type="Email"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <input type="submit" placeholder="Add User" />
      </div>
    </form>
  );
}

export default Form;
