import React from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import Pokedex from "./Pokedex";

class App extends React.Component {
  render() {
    return (
      <div>
        <Logo />
        <SearchBar />
        <Pokedex />
      </div>
    );
  }
}

export default App;
