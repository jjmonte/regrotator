import React, { useState } from 'react';
import { SectionWrapper, StepHeader } from '../../pages/AddReleaseElements';

import AddReleaseSearch from './AddReleaseSearch';
import FormCompleted from './FormCompleted';
import AlbumForm from './AlbumForm';
import LoadAlbumFormData from './LoadAlbumFormData';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

function AddAlbumSection({ loadedArtistId, loadedAlbumId, setAlbumId }) {
  const [step, setStep] = useState(0);
  return (
    <SectionWrapper>
      <h1>Album Information:</h1>
      {loadedAlbumId != null ? (
        <FormCompleted>
          <LoadAlbumFormData loadedID={loadedAlbumId}></LoadAlbumFormData>
        </FormCompleted>
      ) : (
        <React.Fragment>
          <StepHeader>
            Step 1: Search For Album
            {step > 0 ? <FontAwesomeIcon icon={faCheck} /> : ''}
          </StepHeader>
          {step === 0 ? (
            <AddReleaseSearch
              searchType="Album"
              changeStep={setStep}
              loadId={setAlbumId}
              dependentId={loadedArtistId}
            />
          ) : (
            ''
          )}

          <StepHeader>
            Step 2: Add New Album {step > 1 ? <FontAwesomeIcon icon={faCheck} /> : ''}
          </StepHeader>
          {step === 1 ? <AlbumForm changeStep={setStep} loadId={setAlbumId} /> : ''}
        </React.Fragment>
      )}
    </SectionWrapper>
  );
}

export default AddAlbumSection;
