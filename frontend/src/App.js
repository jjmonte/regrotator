import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  state = {
    data: [],
    id: 0,
    message: null,
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

  render() {
        const { data } = this.state;
    return (
      <div className="main">
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
