import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AlbumContainer, AlbumCover } from '../pages/ArtistInfoElements';

import albumCover from '../resources/placeholdercover-1.jpeg';

function DiscographyList({ artistID, artist }) {
  const [discography, setDiscography] = useState([]);

  useEffect(() => {
    async function fetchDiscography() {
      const res = await axios('http://localhost:3001/api/getAlbumNamesByArtist', {
        params: {
          Artist_ID: artistID
        }
      });
      setDiscography(res.data.data);
    }
    fetchDiscography();
  }, [artistID]);
  console.log(discography);
  const discogAsElements = discography.map(album => (
    <AlbumContainer key={album.Album_id}>
      <Link
        to={{
          pathname: `/album/${album.Album_id}-${album.Album_title.replace(
            /\s+/g,
            '-'
          ).toLowerCase()}/`,
          state: {
            loadedArtistName: artist.substring(artist.indexOf('-') + 1),
            loadedAlbumTitle: album.Album_title
          }
        }}
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
