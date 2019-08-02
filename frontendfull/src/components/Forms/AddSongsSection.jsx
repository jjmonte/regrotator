import React, { useState } from 'react';
import { SectionWrapper } from '../../pages/AddReleaseElements';
import FormCompleted from './FormCompleted';
import LoadSongFormData from './LoadSongFormData';
import SongForm from './SongForm';

function AddSongSection({ loadedAlbumWithSongsId }) {
  const [songForms, setSongForms] = useState([1]);
  const [albumId, setAlbumId] = useState(loadedAlbumWithSongsId);
  const addSongForm = number => {
    const newSongForms = [...songForms, number];
    setSongForms(newSongForms);
  };

  return (
    <SectionWrapper>
      <h1>Add Songs:</h1>
      {albumId != null ? (
        <FormCompleted>
          <LoadSongFormData loadedID={albumId} />
        </FormCompleted>
      ) : (
        ''
      )}

      {songForms.map(form => (
        <SongForm addSongForm={addSongForm} trackNumber={form} key={form} />
      ))}
    </SectionWrapper>
  );
}
export default AddSongSection;
