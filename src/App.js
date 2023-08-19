import { useState } from "react";
import "./App.css";
import Form from "./Components/Form/Form";
import Header from "./Components/Header/Header";
import SideBar from "./Components/SideBar/SideBar";

function App() {
  const [name, setName] = useState("Amr");
  const [email, setEmail] = useState("");
  const [isChanged, setIsChanged] = useState(false);

  const addUser = (e) => {
    e.preventDefault();
    setIsChanged(true);
  };

  return (
    <div className="App">
      <Header name={name} isChanged={isChanged} />
      <div className="main">
        <SideBar name={name} isChanged={isChanged} />
        <Form setName={setName} setEmail={setEmail} addUser={addUser} />
      </div>
    </div>
  );
}

export default App;
