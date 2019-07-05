import React,{useState} from "react";

const ListAlbumsByCategory = () => {

  return(
    <ul>
      {albums.map(album =>(
        <li key={album.Album_ID}>{album.Artist} - {album.Album_title}</li>  
      ))} 
    </ul>
  )
}
export default Category;