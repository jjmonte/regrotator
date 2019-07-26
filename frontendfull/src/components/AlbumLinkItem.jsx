import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import AlbumItem from '../helpers/BjorkKeyframes';

const Category = styled.p`
  float: right;
  position: relative;
  width: 40px;
  margin-right: 50px;
  right: -40px;
  text-align: center;
`;

function AlbumLinkItem({ artist, album_id, album_title, category }) {
  return (
    <AlbumItem className={artist === 'Björk' ? 'björk' : 'not_björk'} key={album_id}>
      <Link to={`/album/${album_id}-${album_title.toLowerCase()}/`}>
        {artist === undefined
          ? `${album_title.toUpperCase()}`
          : (artist + '' + album_title).length > 45
          ? `${artist.toUpperCase()} - ${album_title.toUpperCase().substring(0, 25)}...`
          : `${artist.toUpperCase()} - ${album_title.toUpperCase()}`}
      </Link>
      <Category>{category}</Category>
    </AlbumItem>
  );
}
export default AlbumLinkItem;
