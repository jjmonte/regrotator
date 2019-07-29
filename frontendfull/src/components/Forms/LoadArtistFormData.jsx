import React, { useState, useEffect } from 'react';
import axios from 'axios';

function LoadArtistFormData(props) {
  const [name, setName] = useState('');
  const [formedYear, setFormedYear] = useState('');
  const [location, setLocation] = useState('');
  const [genres, setGenres] = useState('');

  useEffect(() => {
    async function fetchData() {
      const res = await axios('http://localhost:3001/api/getSingleArtist', {
        params: {
          Artist_ID: props.loadedID
        }
      });

      setName(res.data.data[0].Artist_name);
      setFormedYear(res.data.data[0].Debut_year);
      setLocation(`${res.data.data[0].City}, ${res.data.data[0].Country}`);
      setGenres(res.data.data[0].Genre);
    }
    fetchData();
  }, [props.loadedID]);
  return (
    <React.Fragment>
      <p>
        <b>Artist:</b> {name}
      </p>
      <p>
        <b>Formed:</b> {formedYear}
      </p>
      <p>
        <b>Location:</b> {location}
      </p>
      <p>
        <b>Genres:</b> {genres}
      </p>
    </React.Fragment>
  );
}
export default LoadArtistFormData;
