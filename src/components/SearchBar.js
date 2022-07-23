import React from "react";

class SearchBar extends React.Component {
  render() {
    return (
      <div className="search-container">
        <input id="name-input" type="text" placeholder="Name / id" />

        <div id="search-btn" className="ball-container">
          <div className="upper-half-ball"></div>
          <div className="bottom-half-ball"></div>
          <div className="center-ball"></div>
          <div className="center-line"></div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
