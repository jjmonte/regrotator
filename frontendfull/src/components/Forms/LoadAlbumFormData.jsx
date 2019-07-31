import React, { useState, useEffect } from 'react';
import axios from 'axios';

function LoadArtistFormData(props) {
  const [albumTitle, setAlbumTitle] = useState('');
  const [category, setCategory] = useState('');

  const [addDate, setAddDate] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [rotationFlag, setRotationFlag] = useState(0);
  const [description, setDescription] = useState('');
  useEffect(() => {
    async function fetchData() {
      const res = await axios('http://localhost:3001/api/getSingleAlbum', {
        params: {
          Album_ID: props.loadedID
        }
      });
      setAlbumTitle(res.data.data[0].Album_title);
      setCategory(res.data.data[0].Category);
      setDescription(res.data.data[0].Description);
      setAddDate(
        new Date(
          res.data.data[0].Add_date.substring(0, 4),
          res.data.data[0].Add_date.substring(5, 7),
          res.data.data[0].Add_date.substring(8, 10),
          0,
          0,
          0
        )
          .toDateString()
          .substring(4, 15)
      );
      setReleaseDate(
        new Date(
          res.data.data[0].Release_date.substring(0, 4),
          res.data.data[0].Release_date.substring(5, 7),
          res.data.data[0].Release_date.substring(8, 10),
          0,
          0,
          0
        )
          .toDateString()
          .substring(4, 15)
      );
      setRotationFlag(res.data.data[0].Rotation_flag);
      document.title = `RegRotator: ${res.data.data[0].Album_title} by ${res.data.data[0].Artist}`;
    }
    fetchData();
  }, [props.loadedID]);
  return (
    <React.Fragment>
      <p>
        <b>Album Title:</b> {albumTitle}
      </p>
      <p>
        <b>Category:</b> {category} <b>{rotationFlag ? '(In rotation)' : '(Out of rotation)'}</b>
      </p>
      <p>
        <b>Release date:</b> {addDate} <b>Add date:</b> {releaseDate}
      </p>
      <p>
        <b>Description:</b> {description}
      </p>
    </React.Fragment>
  );
}
export default LoadArtistFormData;
