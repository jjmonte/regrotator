import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavElement, MainWrapper, SecondaryWrapperList } from './PagesElements';

import ArtistLinkItem from '../components/ArtistLinkItem';
import ArtistSortBar from '../components/ArtistSortBar';

function Artists() {
  const [artists, setArtists] = useState([]);
  const [sortOrder, setSortOrder] = useState('descending');

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
      <ArtistLinkItem
        key={artist.Artist_id}
        artistId={artist.Artist_id}
        artistName={artist.Artist_name}
      />
    );
  });
  return (
    <React.Fragment>
      <NavElement>
        <span>ARTISTS</span>
      </NavElement>
      <MainWrapper>
        <ArtistSortBar sortOrder={sortOrder} setSortOrder={setSortOrder} />
        <SecondaryWrapperList>
          {sortOrder === 'ascending' ? mappedArtistList.reverse() : mappedArtistList}
        </SecondaryWrapperList>
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
