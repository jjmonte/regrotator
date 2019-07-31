import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { TopBarWrapper } from '../pages/PagesElements';
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
  return (
    <TopBarWrapper>
      <CrumbList>
        <CrumbItem>
          <Link to={`/archive/`}>Artists</Link>
        </CrumbItem>
        &nbsp;>&nbsp;
        <CrumbItem>
          {props.album === null ? (
            <Link to={`/artist/${props.artist}/`}>
              {props.artist.substring(props.artist.indexOf('-') + 1)}
            </Link>
          ) : (
            <Link to={`/artist/${props.artistID}-${props.artist}/`}>
              {props.artist.substring(props.artist.indexOf('-') + 1)}
            </Link>
          )}
        </CrumbItem>
        {props.album !== null ? (
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
    </TopBarWrapper>
  );
}

export default BreadCrumb;
