import React from 'react';
import { NavElement, MainWrapper } from './PagesElements';

import AddArtistSection from '../components/Forms/AddArtistSection';
import AddAlbumSection from '../components/Forms/AddAlbumSection';

function AddRelease(props) {
  document.title = `RegRotator: Add release`;
  return (
    <React.StrictMode>
      <NavElement>
        <span>ADD RELEASE</span>
      </NavElement>
      <MainWrapper>
        <AddArtistSection
          loadedArtistId={
            props.location.state === undefined ? null : props.location.state.artistToLoad
          }
        />
        <AddAlbumSection
          loadedAlbumId={
            props.location.state === undefined ? null : props.location.state.albumToLoad
          }
        />
        {/* <SongListForm /> */}
      </MainWrapper>
    </React.StrictMode>
  );
}
export default AddRelease;
