import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const PanelWrapper = styled.div`
  background-color: ${props => props.theme.backgroundColor};
  height: 25%;
  width: 90%;
  border-radius: 10px;
  border: 1px solid ${props => props.theme.highlightColor};
  margin-top: 10px;
`;
const DoneHeader = styled.h2`
  color: ${props => props.theme.primaryAccent};
  border-bottom: 1px solid ${props => props.theme.highlightColor};
  background-color: transparent;
  padding: 5px;
  text-align: center;
  margin: 0;
  svg {
    color: green;
    margin-right: 10px;
  }
`;
const InfoWrapper = styled.div`
  padding: 20px;
  font-size: 1.5em;
  background-color: transparent;
  p {
    margin-bottom: 5px;
  }
`;
function FormCompleted(props) {
  return (
    <PanelWrapper>
      <DoneHeader>
        <FontAwesomeIcon icon={faCheck} />
        This section has been completed
      </DoneHeader>
      <InfoWrapper>{props.children}</InfoWrapper>
    </PanelWrapper>
  );
}

export default FormCompleted;
