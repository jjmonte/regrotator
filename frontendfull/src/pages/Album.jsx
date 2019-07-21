import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';

import BreadCrumb from '../components/Breadcrumb';
import AlbumSummary from '../components/AlbumSummary';
import SongList from '../components/SongList';

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: ${props => props.theme.bwPrimary};
  height: 100%;
  width: 85%;
`;
const SecondaryWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  height: 91%;
  width: 100%;
  color: ${props => props.theme.bwSecondary};
`;
function Album({ match }) {
  const [albumTitle, setAlbumTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [addDate, setAddDate] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [rotationFlag, setRotationFlag] = useState(0);

  const pageAlbumId = match.params.album.substring(0, match.params.album.indexOf('-'));

  useEffect(() => {
    async function fetchData() {
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
    fetchData();
  }, [pageAlbumId]);

  return (
    <React.StrictMode>
      <MainWrapper>
        <BreadCrumb artist={match.params.artist} album={match.params.album} />
        <SecondaryWrapper>
          <AlbumSummary
            artist={artist}
            album={albumTitle}
            description={description}
            released={releaseDate}
            added={addDate}
          />
          <SongList albumID={pageAlbumId} rotation={rotationFlag} category={category} />
        </SecondaryWrapper>
      </MainWrapper>
    </React.StrictMode>
  );
}
export default Album;
