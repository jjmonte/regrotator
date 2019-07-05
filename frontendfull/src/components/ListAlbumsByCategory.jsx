import React,{useState} from "react";

const ListAlbumsByCategory = () => {

  return(
    <ul>
      {albums.map(album =>(
        <li>{album.Artist} - {album.Album_title}</li>  
      ))} 
    </ul>
  )
}
// function Category(props) {
//   return (
//         // <React.Fragment>
//         //     <h1>{props.type}</h1>
//         //     <div className="album-header">
//         //     </div>
//         //     {props.albumList.length <= 0
//         //       ? " No albums found"
//         //       : props.albumList.map(album => (
//         //          <h2>{album.Artist} - {album.Album_title}</h2>
//         //         ))}
//         // </React.Fragment>
//   )
// }
export default Category;