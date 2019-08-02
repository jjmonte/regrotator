import React, { useState } from 'react';
import { SectionWrapper } from '../../pages/AddReleaseElements';

import SongForm from './SongForm';
function AddSongSection(props) {
  const [songForms, setSongForms] = useState([1]);
  const addSongForm = number => {
    const newSongForms = [...songForms, number];
    setSongForms(newSongForms);
  };

  return (
    <SectionWrapper>
      <h1>Add Songs:</h1>
      {songForms.map(form => (
        <SongForm addSongForm={addSongForm} trackNumber={form} key={form} />
      ))}
    </SectionWrapper>
  );
}
export default AddSongSection;
