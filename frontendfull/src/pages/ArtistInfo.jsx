import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { NavElement, MainWrapper } from './PagesElements';
import { ArtistName, ListWrapper, ArtistProfile, AddReleaseLink } from './ArtistInfoElements';

import BreadCrumb from '../components/Breadcrumb';
import DiscographyList from '../components/DiscographyList';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

function ArtistInfo({ match, location }) {
  const [name, setName] = useState(location === undefined ? null : location.state.loadedArtistName);
  const [formedYear, setFormedYear] = useState('');
  const [artistLocation, setArtistLocation] = useState('');
  const [genres, setGenres] = useState('');

  const pageArtistId = match.params.artist.substring(0, match.params.artist.indexOf('-'));
  console.log(location);
  useEffect(() => {
    async function fetchData() {
      const res = await axios('http://localhost:3001/api/getSingleArtist', {
        params: {
          Artist_ID: pageArtistId
        }
      });
      if (name === undefined) setName(res.data.data[0].Artist_name);
      setFormedYear(res.data.data[0].Debut_year);
      setArtistLocation(`${res.data.data[0].City}, ${res.data.data[0].Country}`);
      setGenres(res.data.data[0].Genre);
      document.title = `RegRotator: ${res.data.data[0].Artist_name}`;
    }
    fetchData();
  }, [name, pageArtistId]);

  return (
    <React.StrictMode>
      <NavElement color="DarkSeaGreen">
        <span>ARTIST INFO</span>
      </NavElement>
      <MainWrapper>
        <BreadCrumb artist={match.params.artist} album={null} artistID={pageArtistId} />
        <ArtistName>{name}</ArtistName>
        <ListWrapper>
          <ArtistProfile>
            <h1>Profile</h1>
            <h2>Formed</h2>
            <h3>
              {formedYear}, {artistLocation}
            </h3>
            <h2>Genres</h2>
            <h3>{genres}</h3>
          </ArtistProfile>
          <DiscographyList artistID={pageArtistId} artist={match.params.artist} />
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
