import React from "react";
import "./styles.css";
import "bulma/css/bulma.css";

import { Header } from "./components/Header/Header";
import { Todos } from "./components/Todos/Todos";

export default function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Todos />
      </div>
    </div>
  );
}
