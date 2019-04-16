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
    return (
      
      <div className="main">
          <div style={{ padding: "10px" }}>
          <input
            type="text"
            style={{ width: "200px" }}
            onChange={e => this.setState({Album_title: e.target.value })}
            placeholder="Album title"
          />
          <input
            type="text"
            style={{ width: "200px" }}
            onChange={e => this.setState({ Artist: e.target.value })}
            placeholder="Artist"
          />
          <button
            onClick={() =>
              this.addAlbum(this.state.Artist, this.state.Album_title)
            }
          >
            ADD
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
