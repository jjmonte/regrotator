import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  state = {
    data: [],
    Album_title: "",
    Artist: "",
    Release_date: "",
    Category: "",
    Description: "",
    Rotation: "",
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

// add other params
  addAlbum = (Album_title, Artist, Release_date, Category, Description, Rotation) => {
    console.log(Artist);
    axios.post("http://localhost:3001/api/addAlbum", {
      Artist: Artist,
      Album_title: Album_title,
      Release_date: Release_date,
      Category: Category,
      Description: Description,
      Rotation: Rotation
    });
  };

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
      <div className="insert-album">
        <h1>Add Album:</h1>
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

          <input
            type="text"
            onChange={e => this.setState({Release_date: e.target.value })}
            placeholder="Release date"
          />
          <input
            type="text"
            style={{ width: "80px" }}
            onChange={e => this.setState({Category: e.target.value })}
            placeholder="Category"
          />
          <input
            type="text"
            onChange={e => this.setState({Description: e.target.value })}
            placeholder="Description"
          />
          <input
            type="text"
            onChange={e => this.setState({RIYL: e.target.value })}
            placeholder="RIYL"
          />
          <input
            type="text"
            style={{ width: "80px" }}
            onChange={e => this.setState({Rotation: e.target.value })}
            placeholder="In Rotation?"
          />
                    </div>
          <button
            onClick={() =>
              this.addAlbum(this.state.Album_title, this.state.Artist, this.state.Release_date, this.state.Category, this.state.Description, this.state.Rotation)
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
