import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import BreadCrumb from '../components/Breadcrumb';
import DiscographyList from '../components/DiscographyList';

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: ${props => props.theme.bwPrimary};
  color: ${props => props.theme.bwSecondary};
  height: 100%;
  width: 85%;
`;
//Magic number: font-size
const ArtistName = styled.h1`
  font-size: 10vw;
  font-weight: bolder;
  margin: 50px 0;
  width: 100%;
`;
const ListWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-left: 20px;
  overflow: auto;
  h1 {
    text-align: center;
  }
`;
const ArtistProfile = styled.li`
  height: 85%;
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
const AddReleaseLink = styled.span`
  height: 30%;
  width: 10%;
  margin: auto 0;
  text-align: center;
  text-shadow: 0 10px 20px rgba(0, 0, 0, 0.19);
  h2 {
    margin-top: 10px;
  }
  svg:hover {
    color: green;
    transition: all 0.2s;
  }
`;
function ArtistInfo({ match }) {
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
    fetchData();
  }, [pageArtistId]);

  return (
    <React.StrictMode>
      <MainWrapper>
        <BreadCrumb artist={match.params.artist} album={null} artistID={pageArtistId} />
        <ArtistName>{name}</ArtistName>
        <ListWrapper>
          <ArtistProfile>
            <h1>Profile</h1>
            <h2>Formed</h2>
            <h3>
              {formedYear}, {location}
            </h3>
            <h2>Genres</h2>
            <h3>{genres}</h3>
          </ArtistProfile>
          <DiscographyList artistID={pageArtistId} />
          <AddReleaseLink>
            <Link
              to={{
                pathname: '/add-release/',
                state: {
                  artistToLoad: pageArtistId
                }
              }}
            >
              <FontAwesomeIcon icon={faPlusCircle} size="4x" />
              <h2>Add Release</h2>
            </Link>
          </AddReleaseLink>
        </ListWrapper>
      </MainWrapper>
    </React.StrictMode>
  );
}

export default ArtistInfo;
