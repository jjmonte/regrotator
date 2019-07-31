import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { NavElement, MainWrapper, SecondaryWrapper } from './PagesElements';

import BreadCrumb from '../components/Breadcrumb';
import AlbumSummary from '../components/AlbumSummary';
import SongList from '../components/SongList';

function Album({ match }) {
  const [artistId, setArtistId] = useState('');
  const [albumTitle, setAlbumTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [addDate, setAddDate] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [rotationFlag, setRotationFlag] = useState(0);

  const pageAlbumId = match.params.album.substring(0, match.params.album.indexOf('-'));

  useEffect(() => {
    async function fetchArtistId() {
      const res = await axios('http://localhost:3001/api/getArtistIdFromAlbum', {
        params: {
          Album_ID: pageAlbumId
        }
      });

      if (res.data.data[0] !== undefined) {
        setArtistId(res.data.data[0].Artist_id);
        console.log(artistId);
      } else {
        setArtistId('b52');
      }
    }

    async function fetchAlbumData() {
      const res = await axios('http://localhost:3001/api/getSingleAlbum', {
        params: {
          Album_ID: pageAlbumId
        }
      });
      setAlbumTitle(res.data.data[0].Album_title);
      setArtist(res.data.data[0].Artist);
      setCategory(res.data.data[0].Category);
      setDescription(res.data.data[0].Description);
      setAddDate(res.data.data[0].Add_date);
      setReleaseDate(res.data.data[0].Release_date);
      setRotationFlag(res.data.data[0].Rotation_flag);
      document.title = `RegRotator: ${res.data.data[0].Album_title} by ${res.data.data[0].Artist}`;
    }
    fetchAlbumData();
    fetchArtistId();
  }, [artistId, match.params.album, pageAlbumId]);

  return (
    <React.StrictMode>
      <NavElement>
        <span>ALBUM INFO</span>
      </NavElement>
      <MainWrapper>
        <BreadCrumb artist={artist} album={match.params.album} artistID={artistId} />
        <SecondaryWrapper>
          <AlbumSummary
            artist={artist}
            album={albumTitle}
            description={description}
            released={releaseDate}
            added={addDate}
          />
          <SongList
            albumID={pageAlbumId}
            artistID={artistId}
            rotation={rotationFlag}
            category={category}
          />
        </SecondaryWrapper>
      </MainWrapper>
    </React.StrictMode>
  );
}
export default Album;
