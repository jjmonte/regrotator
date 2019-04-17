import React from "react";
import axios from "axios";

class AddSong extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Song_title: "",
      Artist: "",
      Album_name: "",
      Track_num: "",
      Length: "",
      X_D: "",
      Explicit: "0",
      Request: "0",
      Try: "0"
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.type === "checkbox" ? +target.checked : target.value;
    this.setState({ [name]: value });
  }

  addAlbum = currentState => {
    axios.post("http://localhost:3001/api/addAlbum", this.state);
  };

  handleSubmit(event) {
    alert("Album submitted");
    event.preventDefault();
    console.log(this.state);
    this.addAlbum(this.state);
    this.setState({
      Song_title: "",
      Artist: "",
      Album_name: "",
      Track_num: "",
      Length: "",
      X_D: "",
      Explicit: "0",
      Request: "0",
      Try: "0"
    });
  }

  render() {
    return (
      <div className="insert-album">
        <h1>Add Song:</h1>
        <form onSubmit={this.handleSubmit} className="insert-album__fields">
          <label>
            <input
              name="Song_title"
              placeholder="Song title"
              type="text"
              value={this.state.Song_title}
              onChange={this.handleChange}
            />
            <input
              name="Artist"
              placeholder="Artist"
              type="text"
              value={this.state.Artist}
              onChange={this.handleChange}
            />
            <input
              name="Album_name"
              placeholder="Album name"
              type="text"
              value={this.state.Album_name}
              onChange={this.handleChange}
            />
            <input
              name="Track_num"
              placeholder="Track number"
              type="text"
              value={this.state.Track_num}
              onChange={this.handleChange}
            />
            <input
              name="Length"
              placeholder="Length"
              type="text"
              value={this.state.Length}
              onChange={this.handleChange}
            />
            <input
              name="X_D"
              placeholder="X/D Pick?"
              type="text"
              value={this.state.X_D}
              onChange={this.handleChange}
            />
            <label>
              {" "}
              Try track?{" "}
              <input
                name="Rotation"
                type="checkbox"
                checked={this.state.Rotation}
                onChange={this.handleChange}
              />
            </label>
            <label>
              {" "}
              Explicit?{" "}
              <input
                name="Rotation"
                type="checkbox"
                checked={this.state.Rotation}
                onChange={this.handleChange}
              />
            </label>
          </label>
          <button type="submit" value="Submit">
            Add Song
          </button>
        </form>
      </div>
    );
  }
}
export default AddSong;
