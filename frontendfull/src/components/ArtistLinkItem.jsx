import React from 'react';
import { Link } from 'react-router-dom';
import { ListInitial } from '../pages/PagesElements';

import AlbumItem from '../helpers/BjorkKeyframes';

function ArtistLinkItem({ artistId, artistName }) {
  return (
    <AlbumItem className={artistName === 'Björk' ? 'björk' : 'not_björk'} key={artistId}>
      <Link
        to={{
          pathname: `/artist/${artistId}-${artistName.replace(/\s+/g, '-').toLowerCase()}/`,
          state: {
            loadedArtistName: artistName
          }
        }}
      >
        {artistName.length > 45
          ? `${artistName.toUpperCase().substring(0, 25)}...`
          : `${artistName.toUpperCase()}`}
        <ListInitial>
          {Number.isInteger(artistName.substring(0, 1)) ? '#' : artistName.substring(0, 1)}
        </ListInitial>
      </Link>
    </AlbumItem>
  );
}
export default ArtistLinkItem;
