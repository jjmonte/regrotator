import React, { useState } from 'react';
import styled from '@emotion/styled';

import FormCompleted from './FormCompleted';
import LoadArtistFormData from './LoadArtistFormData';
import AddReleaseSearch from './AddReleaseSearch';
import ArtistForm from './ArtistForm';
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
function AddArtistSection(props) {
  const [step, setStep] = useState(0);
  const [artistId, setArtistId] = useState(props.loadedArtistId);
  return (
    <SectionWrapper>
      <h1>Artist Information:</h1>
      {artistId != null ? (
        <FormCompleted>
          <LoadArtistFormData loadedID={props.loadedArtistId}></LoadArtistFormData>
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
