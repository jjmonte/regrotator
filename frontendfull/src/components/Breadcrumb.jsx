import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

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
  return (
    <BreadCrumbWrapper>
      <CrumbList>
        <CrumbItem>
          <Link to={`/archive/`}>Artists</Link>
        </CrumbItem>
        &nbsp;>&nbsp;
        <CrumbItem>
          <Link to={`/${props.artist}/`}>{props.artist.replace(/-+/g, ' ')}</Link>
        </CrumbItem>
        &nbsp;>&nbsp;
        <CrumbItem>
          <Link to={`/${props.artist}/${props.album}/`}>
            {props.album.substring(props.album.indexOf('-') + 1).replace(/-+/g, ' ')}
          </Link>
        </CrumbItem>
      </CrumbList>
    </BreadCrumbWrapper>
  );
}

export default BreadCrumb;
