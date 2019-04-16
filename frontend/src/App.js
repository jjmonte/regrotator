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

          <input
            type="text"
            style={{ width: "100px" }}
            onChange={e => this.setState({Release_date: e.target.value })}
            placeholder="Release date"
          />
          <input
            type="text"
            style={{ width: "50px" }}
            onChange={e => this.setState({Category: e.target.value })}
            placeholder="Category"
          />
          <input
            type="text"
            style={{ width: "1000px", height: "20px" }}
            onChange={e => this.setState({Description: e.target.value })}
            placeholder="Description"
          />
          <input
            type="text"
            style={{ width: "400px" }}
            onChange={e => this.setState({RIYL: e.target.value })}
            placeholder="RIYL"
          />
          <input
            type="text"
            style={{ width: "10px" }}
            onChange={e => this.setState({Rotation: e.target.value })}
            placeholder="Rotation"
          />
                    </div>
          <button
            onClick={() =>
              this.addAlbum(this.state.Artist, this.state.Album_title, this.state.Release_date, this.state.Category, this.state.Description, this.state.Rotation)
            }
          >
            Add album
          </button>
        </div>
        <div className="album-list">
          <h1>Albums:</h1>
          <div className="album-header">
            <p className="album__descriptor">Album Title</p>
            <p className="album__descriptor">Artist</p>
            <p className="album__descriptor">Category</p>
          </div>
          {data.length <= 0
            ? " No albums found"
            : data.map(dat => (
                <div className="album" key={data.Album_id}>
                  <p className="album__descriptor">{dat.Album_title}</p>
                  <p className="album__descriptor">{dat.Artist}</p>
                  <p className="album__descriptor">{dat.Category}</p>
                </div>
              ))}
        </div>
      </div>
    );
  }
}

export default App;
