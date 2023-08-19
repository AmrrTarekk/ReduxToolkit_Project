import { useState } from "react";
import "./App.css";
import Form from "./Components/Form/Form";
import Header from "./Components/Header/Header";
import SideBar from "./Components/SideBar/SideBar";

function App() {
  // const [name, setName] = useState("Amr");
  // const [email, setEmail] = useState("");
  // const [isChanged, setIsChanged] = useState(false);

  // const addUser = (e) => {
  //   e.preventDefault();
  //   setIsChanged(true);
  // };

  return (
    <div className="App">
      <Header />
      <div className="main">
        <SideBar />
        <Form />
      </div>
    </div>
  );
}

export default App;
