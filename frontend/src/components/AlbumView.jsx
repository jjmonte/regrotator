import React from "react";
import Album from "./Album";

class AlbumView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        data: [],
        intervalIsSet: false
    };
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



  getAlbums = () => {
    fetch("http://localhost:3001/api/getAlbums")
      .then(data => data.json())
      .then(res => this.setState({
        data: res.data
      }));
  };

  render() {
        const { data } = this.state;
        const categoryH = [];
        const categoryM = [];
        const categoryL = [];
        const categoryA = [];
        const categoryUnsorted = [];
        data.forEach(album => {
          if (album.Rotation_flag === 1) {
            album.Rotation_flag = "✅";
          } else {
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
        });
        return (
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
                  <Album
                    key={album.Album_id}
                    id={album.Album_id}
                    title={album.Album_title}
                    artist={album.Artist}
                    rotation={album.Rotation_flag}
                    description={album.Description}
                    adddate={album.Add_date}
                    releasedate={album.Release_date}
                  />
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
                  <Album
                    key={album.Album_id}
                    title={album.Album_title}
                    artist={album.Artist}
                    rotation={album.Rotation_flag}
                    description={album.Description}
                    adddate={album.Add_date}
                    releasedate={album.Release_date}
                  />
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
                  <Album
                    key={album.Album_id}
                    title={album.Album_title}
                    artist={album.Artist}
                    rotation={album.Rotation_flag}
                    description={album.Description}
                    adddate={album.Add_date}
                    releasedate={album.Release_date}
                  />
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
                  <Album
                    key={album.Album_id}
                    title={album.Album_title}
                    artist={album.Artist}
                    rotation={album.Rotation_flag}
                    description={album.Description}
                    adddate={album.Add_date}
                    releasedate={album.Release_date}
                  />
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
                  <Album
                    key={album.Album_id}
                    title={album.Album_title}
                    artist={album.Artist}
                    rotation={album.Rotation_flag}
                    description={album.Description}
                    adddate={album.Add_date}
                    releasedate={album.Release_date}
                  />
                ))}
          </div>
        );
  }
}
export default AlbumView;
