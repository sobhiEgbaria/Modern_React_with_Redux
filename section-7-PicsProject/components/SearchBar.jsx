import React, { Component } from "react";
import "./imageList.css";

class SearchBar extends Component {
  constructor(props) {
    super(props);
  }
  state = { term: "" };

  onInputChange = (e) => {
    this.setState({ term: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    this.props.onSearchSubmit(this.state.term);
  };

  render() {
    return (
      <>
        <form onSubmit={this.onSubmit}>
          <div className="ui fluid action input">
            <input
              type="text"
              placeholder="Search..."
              value={this.state.term}
              onChange={this.onInputChange}
            />
            <div className="ui button SearchBar" onClick={this.onSubmit}>
              Search
            </div>
          </div>
        </form>
      </>
    );
  }
}

export default SearchBar;
