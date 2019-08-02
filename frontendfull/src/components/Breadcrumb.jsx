import React from 'react';
import { Link } from 'react-router-dom';
import { TopBarWrapperList, CrumbItem } from '../pages/PagesElements';

function BreadCrumb({ artist, artistID, album }) {
  return (
    <TopBarWrapperList>
      <CrumbItem>
        <Link to={`/archive/`}>Artists</Link>
      </CrumbItem>
      <CrumbItem> &nbsp;>&nbsp;</CrumbItem>
      <CrumbItem>
        {album === null ? (
          <Link
            to={{
              pathname: `/artist/${artist}/`,
              state: {
                loadedArtistName: artist,
                loadedAlbumTitle: album
              }
            }}
          >
            {artist.substring(artist.indexOf('-') + 1)}
          </Link>
        ) : (
          <Link
            to={{
              pathname: `/artist/${artistID}-${artist}/`,
              state: {
                loadedArtistName: artist,
                loadedAlbumTitle: album
              }
            }}
          >
            {artist.substring(artist.indexOf('-') + 1)}
          </Link>
        )}
      </CrumbItem>
      {album !== null ? (
        <React.Fragment>
          <CrumbItem> &nbsp;>&nbsp;</CrumbItem>
          <CrumbItem>
            <Link
              to={{
                pathname: `/album/${album}/`,
                state: {
                  loadedArtistName: artist,
                  loadedAlbumTitle: album
                }
              }}
            >
              {album.substring(album.indexOf('-') + 1)}
            </Link>
          </CrumbItem>
        </React.Fragment>
      ) : (
        ''
      )}
    </TopBarWrapperList>
  );
}

export default BreadCrumb;
