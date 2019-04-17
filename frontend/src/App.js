import React, { Component } from 'react';

import AddAlbum from "./components/AddAlbum";
import AddSong from "./components/AddSong";

class App extends Component {
  state = {
    data: [],
    intervalIsSet: false
  };

  componentDidMount() {
    this.getAlbums();
    if (!this.state.intervalIsSet) {
      let interval = setInterval(this.getAlbums, 1000);
      this.setState({
        intervalIsSet: interval
      });
    }
  }

  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState({
        intervalIsSet: null
      });
    }
  }



  getAlbums = () => {
    fetch("http://localhost:3001/api/getAlbums")
      .then(data => data.json())
      .then(res => this.setState({
        data: res.data
      }));
  };

  // add input boxes for other parameters
  render() {
        const { data } = this.state;
        const categoryH = [];
        const categoryM = [];
        const categoryL = [];
        const categoryA = [];
        const categoryUnsorted = [];
        data.forEach(album => {
          if (album.Rotation_flag === 1){
            album.Rotation_flag = "✅";
          } else {
            album.Rotation_flag = " ";
          }
          if (album.Category === 'H'){
            categoryH.push(album);
          } else if (album.Category === 'M') {
            categoryM.push(album);
          } else if (album.Category === 'L'){
            categoryL.push(album);
          } else if (album.Category === 'A'){
            categoryA.push(album);
          } else { 
            categoryUnsorted.push(album);
          }
        });
    return (
      <div className="page">
        <AddAlbum />
        <AddSong />
        <div className="album-list">
          <h1>Albums:</h1>
          <h3>H</h3>
          <div className="album-header">
            <p className="album__descriptor">Album Title</p>
            <p className="album__descriptor">Artist</p>
            <p className="album__descriptor">In Rotation?</p>
          </div>
          {categoryH.length <= 0
            ? " No albums found"
            : categoryH.map(album => (
                <div className="album" key={album.Album_id}>
                  <p className="album__descriptor">{album.Album_title}</p>
                  <p className="album__descriptor">{album.Artist}</p>
                  <p className="album__descriptor">{album.Rotation_flag}</p>
                </div>
              ))}
          <h3>M</h3>
          <div className="album-header">
            <p className="album__descriptor">Album Title</p>
            <p className="album__descriptor">Artist</p>
            <p className="album__descriptor">In Rotation?</p>
          </div>
          {categoryM.length <= 0
            ? " No albums found"
            : categoryM.map(album => (
                <div className="album" key={album.Album_id}>
                  <p className="album__descriptor">{album.Album_title}</p>
                  <p className="album__descriptor">{album.Artist}</p>
                  <p className="album__descriptor">{album.Rotation_flag}</p>
                </div>
              ))}
          <h3>L</h3>
          <div className="album-header">
            <p className="album__descriptor">Album Title</p>
            <p className="album__descriptor">Artist</p>
            <p className="album__descriptor">In Rotation?</p>
          </div>
          {categoryL.length <= 0
            ? " No albums found"
            : categoryL.map(album => (
                <div className="album" key={album.Album_id}>
                  <p className="album__descriptor">{album.Album_title}</p>
                  <p className="album__descriptor">{album.Artist}</p>
                  <p className="album__descriptor">{album.Rotation_flag}</p>
                </div>
              ))}
          <h3>A</h3>
          <div className="album-header">
            <p className="album__descriptor">Album Title</p>
            <p className="album__descriptor">Artist</p>
            <p className="album__descriptor">In Rotation?</p>
          </div>
          {categoryA.length <= 0
            ? " No albums found"
            : categoryA.map(album => (
                <div className="album" key={album.Album_id}>
                  <p className="album__descriptor">{album.Album_title}</p>
                  <p className="album__descriptor">{album.Artist}</p>
                  <p className="album__descriptor">{album.Rotation_flag}</p>
                </div>
              ))}
          <h3>Uncategorized</h3>
          <div className="album-header">
            <p className="album__descriptor">Album Title</p>
            <p className="album__descriptor">Artist</p>
            <p className="album__descriptor">In Rotation?</p>
          </div>
          {categoryUnsorted.length <= 0
            ? " No albums found"
            : categoryUnsorted.map(album => (
                <div className="album" key={album.Album_id}>
                  <p className="album__descriptor">{album.Album_title}</p>
                  <p className="album__descriptor">{album.Artist}</p>
                  <p className="album__descriptor">{album.Rotation_flag}</p>
                </div>
              ))}
        </div>
      </div>
    );
  }
}

export default App;
