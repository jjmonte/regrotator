import React, { Component } from 'react';

import AddAlbum from "./components/AddAlbum";

import AlbumView from "./components/AlbumView";
class App extends Component {
  render() {
    return (
      <div className="page">
        <AddAlbum />
        <AlbumView />
      </div>
    );
  }
}

export default App;
