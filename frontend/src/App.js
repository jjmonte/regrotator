import React, { Component } from "react";

import AddAlbum from "./components/AddAlbum";

import AlbumView from "./components/AlbumView";
class App extends Component {
  render() {
    return (
      <div className="page">
        <center>
          <h1>RegRotator</h1>
        </center>
        <AddAlbum />
        <AlbumView />
        <p id="signature">Developed by Victor Perez and J. Montesano.</p>
      </div>
    );
  }
}

export default App;
