import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import albumCover from '../resources/placeholdercover-1.jpeg';
import BreadCrumb from '../components/Breadcrumb';

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: ${props => props.theme.bwPrimary};
  height: 100%;
  width: 85%;
  overflow: scroll;
`;
const ArtistName = styled.h1`
  font-size: 15vw;
  font-weight: bolder;
  margin: 50px 0;
`;
const DiscographyList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-left: 20px;
`;
const AlbumContainer = styled.li`
  height: 100%;
  width: 15%;
  margin: 0 10px;
  h1 {
    text-align: center;
  }
  &:hover {
    -webkit-filter: grayscale(1);
    filter: grayscale(1);
    transition: 0.2s;
  }
`;
const AlbumCover = styled.img`
  width: 90%;
  margin: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;
const ArtistProfile = styled.li`
  height: 100%;
  width: 15%;
  margin: 0 10px;
  text-align: center;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  h1 {
    margin: 10px 0;
  }
  h2 {
    margin: 10px 0;
  }
`;

function ArtistInfo({ match }) {
  const [discography, setDiscography] = useState([]);
  const [name, setName] = useState('');
  const [formedYear, setFormedYear] = useState('');
  const [location, setLocation] = useState('');
  const [genres, setGenres] = useState('');

  const pageArtistId = match.params.artist.substring(0, match.params.artist.indexOf('-'));

  useEffect(() => {
    async function fetchData() {
      const res = await axios('http://localhost:3001/api/getSingleArtist', {
        params: {
          Artist_ID: pageArtistId
        }
      });
      console.log(res.data.data[0]);
      setName(res.data.data[0].Artist_name);
      setFormedYear(res.data.data[0].Debut_year);
      setLocation(`${res.data.data[0].City}, ${res.data.data[0].Country}`);
      setGenres(res.data.data[0].Genre);
      document.title = `RegRotator: ${res.data.data[0].Artist_name}`;
    }
    async function fetchDiscography() {
      const res = await axios('http://localhost:3001/api/getAlbumNamesByArtist', {
        params: {
          Artist_ID: pageArtistId
        }
      });
      setDiscography(res.data.data);
    }
    fetchDiscography();
    fetchData();
  }, [pageArtistId]);

  const discogAsElements = discography.map(album => (
    <AlbumContainer>
      <Link
        to={`/album/${album.Album_id}-${album.Album_title.replace(/\s+/g, '-').toLowerCase()}/`}
      >
        <AlbumCover src={albumCover} />
        <h1>{album.Album_title}</h1>
      </Link>
    </AlbumContainer>
  ));
  return (
    <React.StrictMode>
      <MainWrapper>
        <BreadCrumb artist={match.params.artist} album={null} artistID={pageArtistId} />
        <ArtistName>{name}</ArtistName>
        <DiscographyList>
          <ArtistProfile>
            <h1>Profile</h1>
            <h2>
              Formed
              <br />
              {formedYear}, {location}
            </h2>
            <h2>
              Genres
              <br />
              {genres}
            </h2>
          </ArtistProfile>
          {discogAsElements}
        </DiscographyList>
      </MainWrapper>
    </React.StrictMode>
  );
}

export default ArtistInfo;
