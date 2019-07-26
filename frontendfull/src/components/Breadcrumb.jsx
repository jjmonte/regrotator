import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import axios from 'axios';
const BreadCrumbWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  background-color: ${props => props.theme.color};
  height: 9.4%;
  width: 100%;
  position: relative;
`;
const CrumbList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 2.3%;
  padding-left: 50px;
  font-size: 1.5em;
  text-align: center;
  color: white;
`;
const CrumbItem = styled.li`
  margin: 0 20px;
  text-transform: capitalize;
  &:hover {
    cursor: pointer;
  }
`;

function BreadCrumb(props) {
  const [artistId, setArtistId] = useState('');

  useEffect(() => {
    async function fetchArtistId() {
      const res = await axios('http://localhost:3001/api/getArtistIdFromAlbum', {
        params: {
          Album_ID: props.album.substring(0, props.album.indexOf('-'))
        }
      });
      if (res.data.data[0] !== undefined) {
        setArtistId(res.data.data[0].Artist_id);
      } else {
        setArtistId('b52');
      }
    }
    if (props.artistID === null) fetchArtistId();
    else setArtistId(props.artistID);
  }, [props.album, props.artistID, props.isAlbum]);

  return (
    <BreadCrumbWrapper>
      <CrumbList>
        <CrumbItem>
          <Link to={`/archive/`}>Artists</Link>
        </CrumbItem>
        &nbsp;>&nbsp;
        <CrumbItem>
          {props.artistID != null ? (
            <Link to={`/artist/${props.artist}/`}>
              {props.artist.substring(props.artist.indexOf('-') + 1)}
            </Link>
          ) : (
            <Link to={`/artist/${artistId}-${props.artist}/`}>
              {props.artist.substring(props.artist.indexOf('-') + 1)}
            </Link>
          )}
        </CrumbItem>
        {props.artistID === null ? (
          <React.Fragment>
            &nbsp;>&nbsp;
            <CrumbItem>
              <Link to={`/album/${props.album}/`}>
                {props.album.substring(props.album.indexOf('-') + 1)}
              </Link>
            </CrumbItem>
          </React.Fragment>
        ) : (
          ''
        )}
      </CrumbList>
    </BreadCrumbWrapper>
  );
}

export default BreadCrumb;
