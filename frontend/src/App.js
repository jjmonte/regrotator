import React, { Component } from 'react';

import AddAlbum from "./components/AddAlbum";
import AddSong from "./components/AddSong";
import AlbumView from "./components/AlbumView";
class App extends Component {
  render() {
    return (
      <div className="page">
        <AddAlbum />
        <AddSong />
        <AlbumView />
      </div>
    );
  }
}

export default App;
