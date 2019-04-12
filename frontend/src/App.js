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
        <ul>
          Albums:
          {data.length <= 0
            ? " No albums found"
            : data.map(dat => (
                <li style={{ padding: "10px" }} key={data.Album_id}>
                  <p style={{ color: "red" }}> Album: </p> {dat.Album_title} <br />
                  <p style={{ color: "blue" }}> Artist: </p> {dat.Artist} <br />
                  <p style={{ color: "green" }}> Category: </p> {dat.Category}
                </li>
              ))}
        </ul>
      </div>
    );
  }
}

export default App;
