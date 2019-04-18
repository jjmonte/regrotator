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
      Rotation: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.type === "checkbox" ? + target.checked : target.value;
    this.setState({ [name]: value });
  }
  
  addAlbum = (currentState) => {
    this.state.Rotation = + this.state.Rotation;
    axios.post("http://localhost:3001/api/addAlbum", this.state);
  };

  handleSubmit(event) {
    alert("Album submitted");
    event.preventDefault();
    this.addAlbum(this.state);
    this.setState({
      Album_title: "",
      Artist: "",
      Release_date: "",
      Category: "",
      Description: "",
      Rotation: false
    });
  }

  render() {
    return (
      <div className="insert-query">
        <h1>Add Album:</h1>
        <form onSubmit={this.handleSubmit} className="insert-query__fields">
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
              style={{ width: "70px" }}
              value={this.state.Category}
              onChange={this.handleChange}
            />
            <input
              name="Description"
              placeholder="Description"
              type="text"
              style={{ width: "500px" }}
              value={this.state.Description}
              onChange={this.handleChange}
            />
            <label>
              {" "}
              In rotation?{" "}
              <input
                name="Rotation"
                type="checkbox"
                checked={this.state.Rotation}
                onChange={this.handleChange}
              />
            </label>
          </label>
          <button type="submit" value="Submit">
            Add Album
          </button>
        </form>
      </div>
    );
  }
}
export default AddAlbum;
