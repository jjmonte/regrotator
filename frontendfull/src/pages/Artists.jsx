import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import axios from 'axios';
import AlbumItem from '../helpers/BjorkKeyframes';
import ArtistSortBar from '../components/ArtistSortBar';

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: ${props => props.theme.bwPrimary};
  height: 100%;
  width: 78%;
`;
const SubWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
`;
const NavElement = styled.div`
  margin: 0;
  text-align: center;
  color: white;
  background-color: ${props => props.theme.highlightColor};
  color: ${props => props.theme.bwPrimary};
  height: 100%;
  width: 7%;
  span {
    font-size: 3em;
    line-height: normal;
    letter-spacing: 0.2em;
    transform: translateX(-50%) translateY(-50%) rotate(-90deg);
    top: 50%;
    position: absolute;
  }
`;

const ArtistList = styled.ul`
  overflow: auto;
  height: 100%;
  width: 50%;
  padding-left: 3%;
  padding-top: 1%;
  background-color: ${props => props.theme.bwPrimary};
  border-right 1px solid ${props => props.theme.color};
`;
const ArtistProfile = styled.ul`
  overflow: auto;
  height: 100%;
  width: 50%;
  padding-left: 3%;
  padding-top: 1%;
  background-color: ${props => props.theme.bwPrimary};

  h1 {
    text-align: center;
    padding: 10px;
    margin-top: 40px;
  }
  h2 {
    text-align: left;
    width: 65%;
    margin: 0 auto;
    padding: 10px;
  }
`;
const ArtistInitial = styled.p`
  float: right;
  position: relative;
  width: 40px;
  margin-right: 50px;
  right: -40px;
  text-align: center;
`;
function Artists(props) {
  const [artists, setArtists] = useState([]);
  const [sortOrder, setSortOrder] = useState('descending');
  const [selectedArtist, setSelectedArtist] = useState();

  async function fetchArtists() {
    const res = await axios('http://localhost:3001/api/getArtists');
    setArtists(res.data.data);
  }

  useEffect(() => {
    document.title = `RegRotator: Artists`;
    fetchArtists();
  }, []);

  const mappedArtistList = artists.sort(compareArtist).map(artist => {
    return (
      <AlbumItem
        onMouseEnter={() => setSelectedArtist(artist)}
        className={artist.Artist_name === 'Björk' ? 'björk' : 'not_björk'}
        key={artist.Artist_name}
      >
        {artist.Artist_name.length > 45
          ? `${artist.Artist_name.toUpperCase().substring(0, 25)}...`
          : `${artist.Artist_name.toUpperCase()}`}
        <ArtistInitial>{artist.Artist_name.substring(0, 1)}</ArtistInitial>
      </AlbumItem>
    );
  });
  console.log(selectedArtist);
  return (
    <React.Fragment>
      <NavElement>
        <span>ARTISTS</span>
      </NavElement>
      <MainWrapper>
        <ArtistSortBar sortOrder={sortOrder} setSortOrder={setSortOrder} />
        <SubWrapper>
          <ArtistList>
            {sortOrder === 'ascending' ? mappedArtistList.reverse() : mappedArtistList}
          </ArtistList>
          <ArtistProfile>
            {selectedArtist === undefined ? (
              <h1>Hover over artists for more info</h1>
            ) : (
              <React.Fragment>
                <h1>{selectedArtist.Artist_name}</h1>
                <h2>
                  Formed: {selectedArtist.Debut_year}, {selectedArtist.City}{' '}
                  {selectedArtist.Country}
                </h2>
                <h2>Genres: {selectedArtist.Genre}</h2>
              </React.Fragment>
            )}
          </ArtistProfile>
        </SubWrapper>
      </MainWrapper>
    </React.Fragment>
  );
}

function compareArtist(a, b) {
  if (a.Artist_name.toUpperCase() < b.Artist_name.toUpperCase()) {
    return -1;
  }
  if (a.Artist_name.toUpperCase() > b.Artist_name.toUpperCase()) {
    return 1;
  }
  return 0;
}
export default Artists;
