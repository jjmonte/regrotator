import React from "react";

import SongList from './SongList'
class Album extends React.Component {
  constructor(props) {
    super(props);
    this.expand = this.expand.bind(this);
    this.state = {
      hide: true
    };
  }

  expand = event => {
    event.preventDefault();

    this.setState({
      hide: !this.state.hide
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="album" key={this.props.id} id={this.props.id} onClick={this.expand}>
          <p className="album__descriptor">{this.props.title}</p>
          <p className="album__descriptor">{this.props.artist}</p>
          <p className="album__descriptor">{this.props.rotation}</p>
        </div>
        {this.state.hide ? null : (
            <React.Fragment>
                <div className="album-info ">
                    <p className="album-info__description">{this.props.description}</p>
                    <div className="album-info__dates">
                        <p className="album-info__add-date"><b>Add date:</b> {this.props.adddate.substring(0, 10)}</p>
                        <p className="album-info__release-date"><b>Release date:</b> {this.props.releasedate.substring(0, 10)}</p>
                    </div>
                </div>
                <SongList album={this.props.id} />
            </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}
export default Album;
