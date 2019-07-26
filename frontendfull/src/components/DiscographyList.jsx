import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import albumCover from '../resources/placeholdercover-1.jpeg';
const AlbumContainer = styled.li`
  height: 100%;
  width: 15%;
  margin: 0 10px;
  h2 {
    position: absolute;
    left: 38%;
    top: 130px;
    font-size: 4em;
    background-color: transparent;
    visibility: hidden;
    text-shadow: 1px 3px 3px #000000;
    opacity: 0;
    transition: opacity 0.3s linear;
  }
  &:hover {
    -webkit-filter: grayscale(1);
    filter: grayscale(1);
    transition: filter 1s ease-out;
    h2 {
      visibility: visible;
      opacity: 1;
    }
  }
`;
const AlbumCover = styled.img`
  width: 90%;
  margin: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

function DiscographyList(props) {
  const [discography, setDiscography] = useState([]);

  useEffect(() => {
    async function fetchDiscography() {
      const res = await axios('http://localhost:3001/api/getAlbumNamesByArtist', {
        params: {
          Artist_ID: props.artistID
        }
      });
      setDiscography(res.data.data);
    }
    fetchDiscography();
  }, [props.artistID]);

  const discogAsElements = discography.map(album => (
    <AlbumContainer key={album.Album_id}>
      <Link
        to={`/album/${album.Album_id}-${album.Album_title.replace(/\s+/g, '-').toLowerCase()}/`}
      >
        <AlbumCover src={albumCover} />
        <h1>{album.Album_title}</h1>

        <h2>{album.Category}</h2>
      </Link>
    </AlbumContainer>
  ));
  return <React.Fragment>{discogAsElements}</React.Fragment>;
}

export default DiscographyList;
