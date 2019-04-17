import React from "react";
import axios from "axios";

class AddAlbum extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Album_title: "",
      Artist: "",
      Release_date: "",
      Category: "",
      Description: "",
      Rotation: "0"
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.type === "checkbox" ? Number(target.checked) : target.value;
    this.setState({ [name]: value });
  }
  
  addAlbum = (currentState) => {
    axios.post("http://localhost:3001/api/addAlbum", this.state);
  };

  handleSubmit(event) {
    alert("Album submitted");
    event.preventDefault();
    console.log(this.state);
    this.addAlbum(this.state);
    this.setState({
      Album_title: "",
      Artist: "",
      Release_date: "",
      Category: "",
      Description: "",
      Rotation: "0"
    });
  }

  render() {
    return (
      <div className="insert-album">
        <h1>Add Album:</h1>
        <form onSubmit={this.handleSubmit} className="insert-album__fields">
          <label>
            <input
              name="Album_title"
              placeholder="Album name"
              type="text"
              value={this.state.Album_title}
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
              name="Release_date"
              placeholder="Release date"
              type="text"
              value={this.state.Release_date}
              onChange={this.handleChange}
            />
            <input
              name="Category"
              placeholder="Category"
              type="text"
              value={this.state.Category}
              onChange={this.handleChange}
            />
            <input
              name="Description"
              placeholder="Description"
              type="text"
              value={this.state.Description}
              onChange={this.handleChange}
            />
            <label>
              {" "}In rotation?{" "}
              <input
                name="Rotation"
                type="checkbox"
                checked={this.state.Rotation}
                onChange={this.handleChange}
              />
            </label>
          </label>
          <button type="submit" value="Submit">
            Add album
          </button>
        </form>
      </div>
    );
  }
}
export default AddAlbum;
