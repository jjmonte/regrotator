import React, { useState } from 'react';
import styled from '@emotion/styled';

import AddReleaseSearch from './AddReleaseSearch';
import FormCompleted from './FormCompleted';

import ArtistForm from './ArtistForm';

import LoadAlbumFormData from './LoadAlbumFormData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: ${props => props.theme.bwPrimary};
  color: ${props => props.theme.bwSecondary};
  margin: 50px;
  width: 50%;
  svg {
    color: green;
    margin-left: 10px;
  }
`;
const StepHeader = styled.h2`
  margin-top: 20px;
  border-bottom: 1px solid ${props => props.theme.bwSecondary};
`;
function AddAlbumSection(props) {
  const [step, setStep] = useState(0);
  const [albumId, setAlbumId] = useState(props.loadedAlbumId);
  return (
    <SectionWrapper>
      <h1>Album Information:</h1>
      {albumId != null ? (
        <FormCompleted>
          <LoadAlbumFormData loadedID={props.loadedAlbumId}></LoadAlbumFormData>
        </FormCompleted>
      ) : (
        <React.Fragment>
          <StepHeader>
            Step 1: Search For Album
            {step > 0 ? <FontAwesomeIcon icon={faCheck} /> : ''}
          </StepHeader>
          {step === 0 ? (
            <AddReleaseSearch searchType="Album" changeStep={setStep} loadId={setAlbumId} />
          ) : (
            ''
          )}

          <StepHeader>
            Step 2: Add New Album {step > 1 ? <FontAwesomeIcon icon={faCheck} /> : ''}
          </StepHeader>
          {step === 1 ? <ArtistForm changeStep={setStep} loadId={setAlbumId} /> : ''}
        </React.Fragment>
      )}
    </SectionWrapper>
  );
}

export default AddAlbumSection;
