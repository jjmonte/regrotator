import React from 'react';
import { NavElement, MainWrapper } from './PagesElements';

import AddArtistSection from '../components/Forms/AddArtistSection';
import AddAlbumSection from '../components/Forms/AddAlbumSection';
import AddSongsSection from '../components/Forms/AddSongsSection';

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
        <AddSongsSection />
      </MainWrapper>
    </React.StrictMode>
  );
}
export default AddRelease;
