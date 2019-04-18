import React, { Component } from 'react';

import AddAlbum from "./components/AddAlbum";

import AlbumView from "./components/AlbumView";
class App extends Component {
  render() {
    return (
      <div className="page">
        <center>
          <h1>Reg Rotator</h1>
          <h2>By Team Sigma</h2>
        </center>
        <AddAlbum />
        <AlbumView />
      </div>
    );
  }
}

export default App;
