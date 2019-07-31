import React from 'react';
import ContentLoader from 'react-content-loader';
import {
  SummaryWrapper,
  AlbumCover,
  AlbumTitle,
  ArtistName,
  Description,
  Dates
} from '../pages/AlbumElements';

import albumCover from '../resources/placeholdercover-1.jpeg';

function AlbumSummary(props) {
  let parsedReleaseDate = new Date(
    props.released.substring(0, 4),
    props.released.substring(5, 7),
    props.released.substring(8, 10),
    0,
    0,
    0
  );
  let parsedAddDate = new Date(
    props.added.substring(0, 4),
    props.added.substring(5, 7),
    props.added.substring(8, 10),
    0,
    0,
    0
  );
  return (
    <SummaryWrapper>
      {props.artist === '' ? (
        <ContentLoader
          height={600}
          width={400}
          speed={2}
          primaryColor="#F28D8D"
          secondaryColor="#BF212E"
        >
          <rect x="80" y="50" rx="5" ry="5" width="240" height="240" />
          <rect x="110" y="300" rx="4" ry="4" width="185" height="24" />
          <rect x="120" y="335" rx="4" ry="4" width="165" height="25" />
          <rect x="90" y="380" rx="4" ry="4" width="225" height="100" />
          <rect x="90" y="500" rx="4" ry="4" width="225" height="15" />
        </ContentLoader>
      ) : (
        <React.Fragment>
          <AlbumCover src={albumCover} />
          <AlbumTitle>{props.album}</AlbumTitle>
          <ArtistName>{props.artist}</ArtistName>
          <Description>{props.description}</Description>
          <Dates>
            Released: {parsedReleaseDate.toDateString().substring(4, 15)} • Added:{' '}
            {parsedAddDate.toDateString().substring(4, 15)}
          </Dates>
        </React.Fragment>
      )}
    </SummaryWrapper>
  );
}

export default AlbumSummary;
