import React, { useState } from 'react';
import styled from '@emotion/styled';

import FormCompleted from './FormCompleted';
import LoadArtistFormData from './LoadArtistFormData';
import ArtistForm from './ArtistForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: ${props => props.theme.bwPrimary};
  color: ${props => props.theme.bwSecondary};
  height: 100%;
  margin: 50px;
  width: 50%;
  svg {
    color: green;
    margin-left: 10px;
  }
`;
const Step = styled.h2`
  margin-top: 20px;
  border-bottom: 1px solid ${props => props.theme.bwSecondary};
`;
function AddArtistSection(props) {
  const [step, setStep] = useState(2);
  return (
    <MainWrapper>
      <h1>Artist Information:</h1>
      {props.loadedID != null ? (
        <FormCompleted>
          <LoadArtistFormData loadedID={props.loadedID}></LoadArtistFormData>
        </FormCompleted>
      ) : (
        <React.Fragment>
          <Step>
            Step 1: Search For Artist
            {step > 1 ? <FontAwesomeIcon icon={faCheck} /> : ''}
          </Step>
          <Step>Step 2: Add New Artist</Step>
          <ArtistForm />
        </React.Fragment>
      )}
    </MainWrapper>
  );
}

export default AddArtistSection;
