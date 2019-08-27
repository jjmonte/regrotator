import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavElement, MainWrapper } from './PagesElements';

import AddArtistSection from '../components/Forms/AddArtistSection';
import AddAlbumSection from '../components/Forms/AddAlbumSection';
import AddSongsSection from '../components/Forms/AddSongsSection';

function AddRelease(props) {
  const [formArtistId, setFormArtistId] = useState(
    props.location.state.artistToLoad === undefined ? null : props.location.state.artistToLoad
  );
  const [formAlbumId, setFormAlbumId] = useState(
    props.location.state.albumToLoad === undefined ? null : props.location.state.albumToLoad
  );
  useEffect(() => {
    async function addOwnership() {
      const res = await axios('http://localhost:3001/api/addOwnership', {
        params: {
          Album_ID: formAlbumId,
          Artist_ID: formArtistId
        }
      });
      console.log(res.data.success);
    }
    if (formAlbumId !== null && formArtistId !== null) addOwnership();
  }, [formAlbumId, formArtistId]);
  document.title = `RegRotator: Add release`;
  return (
    <React.StrictMode>
      <NavElement>
        <span>ADD RELEASE</span>
      </NavElement>
      <MainWrapper>
        <AddArtistSection loadedArtistId={formArtistId} setArtistId={setFormArtistId} />
        <AddAlbumSection
          loadedArtistId={formArtistId}
          loadedAlbumId={formAlbumId}
          setAlbumId={setFormAlbumId}
        />
        <AddSongsSection />
      </MainWrapper>
    </React.StrictMode>
  );
}
export default AddRelease;
