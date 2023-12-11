import React, { Component } from "react";
import api from "./api/api";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";

class PicsApp extends Component {
  constructor(props) {
    super(props);
  }
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const url = "/search/photos";
    const res = await api.get(url, {
      params: { query: term },
    });

    console.log(res.data.results);
    this.setState({ images: res.data.results });
  };
  render() {
    return (
      <>
        <div className="ui container" style={{ marginTop: "10px" }}>
          <SearchBar onSearchSubmit={this.onSearchSubmit} />
          <ImageList images={this.state.images} />
        </div>
      </>
    );
  }
}

export default PicsApp;
