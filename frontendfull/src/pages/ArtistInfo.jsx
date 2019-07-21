import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: ${props => props.theme.bwPrimary};
  height: 100%;
  width: 85%;
`;
const ArtistName = styled.h1`
  font-size: 15vw;
  font-weight: bolder;
`;
function ArtistInfo({ match }) {
  const [discography, setDiscography] = useState('');
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
        <ArtistName>{name}</ArtistName>
      </MainWrapper>
    </React.StrictMode>
  );
}

export default ArtistInfo;
