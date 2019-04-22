import React from "react";
import Category from "./Category";

class AlbumView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      intervalIsSet: false,
      sortType: "default",
      query: "getAlbums",
      genre: ""
    };
    this.changeSortType = this.changeSortType.bind(this);
  }
  changeSortType(event) {
    const sortType = event.target.name;
    this.setState({ sortType: sortType });
  }
  componentDidMount() {
    this.getAlbums();
    if (!this.state.intervalIsSet) {
      let interval = setInterval(this.getAlbums, 10000);
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

  changeQuery() {
    if (this.state.query === "getAlbums") {
      this.getAlbums();
      let interval = setInterval(this.getAlbums, 10000);
      this.setState({
        intervalIsSet: interval
      });
    }
    if (this.state.query === "getGenre") {
      this.getGenre();
      let interval = setInterval(this.getGenre, 10000);
      this.setState({
        intervalIsSet: interval
      });
    }
  }
  getAlbums = () => {
    fetch("http://localhost:3001/api/getAlbums")
      .then(data => data.json())
      .then(res =>
        this.setState({
          data: res.data
        })
      );
  };
  getGenre = () => {
    axios
      .get("http://localhost:3001/api/getGenres", {
        params: {
          genre: this.state.genre
        }
      })
      .then(res =>
        this.setState({
          data: res.data.data
        })
      );
  };
  render() {
    const { data } = this.state;
    const categoryH = [];
    const categoryM = [];
    const categoryL = [];
    const categoryA = [];
    const categoryUnsorted = [];
    /**
     * Yes I know this filtering system is big dumb,
     * no i am not going to change it for the prototype
     */
    data.forEach(album => {
      if (
        this.state.sortType === "default" ||
        ((this.state.sortType === "rotation" &&
          (album.Rotation_flag === 1 || album.Rotation_flag === "✅")) ||
          (this.state.sortType === "notRotation" &&
            (album.Rotation_flag === 0 || album.Rotation_flag === " ")))
      ) {
        if (album.Rotation_flag === 1) {
          album.Rotation_flag = "✅";
        } else if (album.Rotation_flag === 0) {
          album.Rotation_flag = " ";
        }
        if (album.Category === "H") {
          categoryH.push(album);
        } else if (album.Category === "M") {
          categoryM.push(album);
        } else if (album.Category === "L") {
          categoryL.push(album);
        } else if (album.Category === "A") {
          categoryA.push(album);
        } else {
          categoryUnsorted.push(album);
        }
      }
    });
    return (
      <div className="album-list">
        <h1>Albums:</h1>
        <div className="filter-selector">
          Filter:{" "}
          <button onClick={this.changeSortType} name="default">
            Default
          </button>
          <button onClick={this.changeSortType} name="rotation">
            In rotation
          </button>
          <button onClick={this.changeSortType} name="notRotation">
            Out of rotation
          </button>
        </div>
        <Category type="H" albumList={categoryH} />
        <Category type="M" albumList={categoryM} />
        <Category type="L" albumList={categoryL} />
        <Category type="A" albumList={categoryA} />
        <Category type="Unsorted" albumList={categoryUnsorted} />
      </div>
    );
  }
}
export default AlbumView;
