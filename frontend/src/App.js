import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  state = {
    data: [],
    Album_title: null,
    Artist: null,
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

  addAlbum = (Artist, Album_title) => {
    console.log(Artist);
    axios.post("http://localhost:3001/api/addAlbum", {
      Artist: Artist,
      Album_id: Album_title
    });
  };

  getAlbums = () => {
    fetch("http://localhost:3001/api/getAlbums")
      .then(data => data.json())
      .then(res => this.setState({
        data: res.data
      }));
  };
  render() {
        const { data } = this.state;
        const categoryH = [];
        const categoryM = [];
        const categoryL = [];
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
          } else { 
            categoryUnsorted.push(album);
          }
        });
    return (
      <div className="page">
      <div className="insert-album">
        <div className="insert-album__fields">
          <input
            type="text"
            onChange={e => this.setState({Album_title: e.target.value })}
            placeholder="Album title"
          />
          <input
            type="text"
            onChange={e => this.setState({ Artist: e.target.value })}
            placeholder="Artist"
          />
          </div>
          <button
            onClick={() =>
              this.addAlbum(this.state.Artist, this.state.Album_title)
            }
          >
            Add album
          </button>
        </div>
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
