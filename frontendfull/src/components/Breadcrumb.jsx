import React from 'react';
import { Link } from 'react-router-dom';
import { TopBarWrapperList, CrumbItem } from '../pages/PagesElements';

function BreadCrumb(props) {
  return (
    <TopBarWrapperList>
      <CrumbItem>
        <Link to={`/archive/`}>Artists</Link>
      </CrumbItem>
      <CrumbItem> &nbsp;>&nbsp;</CrumbItem>
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
          <CrumbItem> &nbsp;>&nbsp;</CrumbItem>
          <CrumbItem>
            <Link to={`/album/${props.album}/`}>
              {props.album.substring(props.album.indexOf('-') + 1)}
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
