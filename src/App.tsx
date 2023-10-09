import React from "react";
import "./App.css";
import { Card } from "./Components/Card";
import { ModalComponent } from "./Components/Modal";
import { Form } from "./Components/Form";

function App() {
  return (
    <div className="App">
      <Card />
      <ModalComponent />
      <Form />
    </div>
  );
}

export default App;
