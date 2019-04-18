import React from "react";
import Album from "./Album";

function Category(props) {
  return (
        <React.Fragment>
            <h3>{props.type}</h3>
            <div className="album-header">
              <p className="album__descriptor">Album Title</p>
              <p className="album__descriptor">Artist</p>
              <p className="album__descriptor">In Rotation?</p>
            </div>
            {props.albumList.length <= 0
              ? " No albums found"
              : props.albumList.map(album => (
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
        </React.Fragment>
  )
}
export default Category;