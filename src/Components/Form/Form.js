import React, { useState } from "react";
import "./Form.css";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../Redux/userSlice";
import { fetchUser } from "../../Redux/api";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const { loading, error } = useSelector((state) => state.user);

  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(addUser({ name, email }));
    fetchUser({ name, email }, dispatch);
  };

  return (
    <form onSubmit={handleSubmit}>
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
      {loading ? (
        "Loading..."
      ) : (
        <div className="form-group">
          <input type="submit" placeholder="Add User" />
        </div>
      )}
      {error && "Error!!"}
    </form>
  );
}

export default Form;
