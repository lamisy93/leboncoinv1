import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import AddList from "./components/AddList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <h1>Annonces</h1>
        <AddList />
      </div>
    );
  }
}

export default App;
