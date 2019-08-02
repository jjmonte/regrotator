import React from 'react';
import { NavElement, MainWrapper, SecondaryWrapperList } from './PagesElements';

import ArtistLinkItem from '../components/ArtistLinkItem';
import ArtistSortBar from '../components/ArtistSortBar';
import BreadCrumb from '../components/Breadcrumb';

function Profile() {
  return (
    <React.Fragment>
      <NavElement>
        <span>PROFILE</span>
      </NavElement>
      <MainWrapper>
        <BreadCrumb artist={'bjork'} album={null} artistID={'b52'} />
      </MainWrapper>
    </React.Fragment>
  );
}

export default Profile;
