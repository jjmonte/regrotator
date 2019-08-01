import React from 'react';
import { Link } from 'react-router-dom';
import { ListInitial } from '../pages/PagesElements';

import AlbumItem from '../helpers/BjorkKeyframes';

function AlbumLinkItem({ artist, album_id, album_title, category }) {
  return (
    <AlbumItem
      className={artist === 'Björk' ? 'björk' : 'not_björk'}
      key={album_id}
      needsTopSpace={true}
    >
      <Link
        to={{
          pathname: `/album/${album_id}-${album_title.toLowerCase()}/`,
          state: {
            loadedArtistName: artist,
            loadedAlbumTitle: album_title
          }
        }}
      >
        {artist === undefined
          ? `${album_title.toUpperCase()}`
          : (artist + '' + album_title).length > 45
          ? `${artist.toUpperCase()} - ${album_title.toUpperCase().substring(0, 25)}...`
          : `${artist.toUpperCase()} - ${album_title.toUpperCase()}`}
      </Link>
      <ListInitial>{category}</ListInitial>
    </AlbumItem>
  );
}
export default AlbumLinkItem;
