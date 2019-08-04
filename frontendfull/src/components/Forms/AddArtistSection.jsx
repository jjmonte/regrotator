import React, { useState } from 'react';
import { SectionWrapper, StepHeader } from '../../pages/AddReleaseElements';

import FormCompleted from './FormCompleted';
import LoadArtistFormData from './LoadArtistFormData';
import AddReleaseSearch from './AddReleaseSearch';
import ArtistForm from './ArtistForm';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

function AddArtistSection({ loadedArtistId, setArtistId }) {
  const [step, setStep] = useState(0);
  return (
    <SectionWrapper>
      <h1>Artist Information:</h1>
      {loadedArtistId != null ? (
        <FormCompleted>
          <LoadArtistFormData loadedID={loadedArtistId}></LoadArtistFormData>
        </FormCompleted>
      ) : (
        <React.Fragment>
          <StepHeader>
            Step 1: Search For Artist
            {step > 0 ? <FontAwesomeIcon icon={faCheck} /> : ''}
          </StepHeader>
          {step === 0 ? (
            <AddReleaseSearch searchType="Artist" changeStep={setStep} loadId={setArtistId} />
          ) : (
            ''
          )}

          <StepHeader>
            Step 2: Add New Artist {step > 1 ? <FontAwesomeIcon icon={faCheck} /> : ''}
          </StepHeader>
          {step === 1 ? <ArtistForm changeStep={setStep} loadId={setArtistId} /> : ''}
        </React.Fragment>
      )}
    </SectionWrapper>
  );
}

export default AddArtistSection;
