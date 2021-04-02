import React from "react";

import "./SearchBar.css";

class SearchBar extends React.Component {
  state = { searchTerm: "" };

  onFormSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <input className="api-search" placeholder="Search recipes" />
      </div>
    );
  }
}

export default SearchBar;
