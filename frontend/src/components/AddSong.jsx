import React from "react";
import axios from "axios";

class AddSong extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Song_title: "",
      Artist: "",
      Album_id: this.props.album,
      Track_num: "",
      Minutes: "",
      Seconds: "",
      X_D: "",
      Explicit: false,
      Request: false,
      Try: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  addAlbum = currentState => {
    this.setState({
      Explicit: + this.state.Explicit,
      Request: + this.state.Request,
      Try: + this.state.Tru
    });
    console.log(currentState);
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
      Track_num: "",
      Minutes: "",
      Seconds: "",
      X_D: "",
      Explicit: false,
      Request: false,
      Try: false
    });
  }

  render() {
    return (
      <div className="insert-query">
        <h1>Add Song:</h1>
        <h3>{this.props.title}</h3>
        <h4>{this.props.artist}</h4>
        <form onSubmit={this.handleSubmit} className="insert-query__fields">
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
              name="Minutes"
              placeholder="Minutes"
              style={{ width: "60px" }}
              type="text"
              value={this.state.Minutes}
              onChange={this.handleChange}
            />{" "}
            :{" "}
            <input
              name="Seconds"
              placeholder="Seconds"
              style={{ width: "60px" }}
              type="text"
              value={this.state.Seconds}
              onChange={this.handleChange}
            />
            <input
              name="Track_num"
              placeholder="Track #"
              type="text"
              style={{ width: "50px" }}
              value={this.state.Track_num}
              onChange={this.handleChange}
            />
            <input
              name="X_D"
              placeholder="X/D?"
              style={{ width: "50px" }}
              type="text"
              value={this.state.X_D}
              onChange={this.handleChange}
            />
            <br />
            <label>
              {" "}
              Try track?{" "}
              <input
                name="Try"
                type="checkbox"
                checked={this.state.Try}
                onChange={this.handleChange}
              />
            </label>
            <label>
              {" "}
              Explicit?{" "}
              <input
                name="Explicit"
                type="checkbox"
                checked={this.state.Explicit}
                onChange={this.handleChange}
              />
            </label>
          </label>
          <button type="submit" value="Submit">
            Add
          </button>
        </form>
      </div>
    );
  }
}
export default AddSong;
