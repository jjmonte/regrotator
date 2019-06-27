import React from "react";
import axios from "axios";

function secondsToMinutes(s) {
  return (s - (s %= 60)) / 60 + (9 < s ? ":" : ":0") + s;
}
class SongList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      intervalIsSet: false
    };
  }

  componentDidMount() {
    this.getSongs();
    if (!this.state.intervalIsSet) {
      let interval = setInterval(this.getSongs, 10000);
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

  getSongs = () => {
    axios
      .get("http://localhost:3001/api/getSongs", {
        params: {
          Album_ID: this.props.album
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
    const songList = [];
    data.forEach(song => {
      songList.push(
        <div className="song" key={song.Song_id}>
          <p className="song__descriptor__emoji">{song.Track_num}</p>
          <p className="song__descriptor__emoji">
            {song.Try_flag ? "★" : null}
          </p>
          <p className="song__descriptor">{song.Song_title}</p>
          <p className="song__descriptor">{song.Artist}</p>
          <p className="song__descriptor__emoji">
            {song.Exp_flag ? "🅴" : null}
          </p>
          <p className="song__descriptor">{secondsToMinutes(song.Length)}</p>
        </div>
      );
    });
    return (
      <React.Fragment>
        <div className="song-list">
          <div className="song-header">
            <p className="song__descriptor__emoji">#</p>
            <p className="song__descriptor__emoji">Try?</p>
            <p className="song__descriptor">Song Name</p>
            <p className="song__descriptor">Artist</p>
            <p className="song__descriptor">Length</p>
          </div>
          {songList}
        </div>
      </React.Fragment>
    );
  }
}
export default SongList;
