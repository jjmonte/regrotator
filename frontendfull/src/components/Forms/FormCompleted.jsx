import React from 'react';
import { PanelWrapper, DoneHeader, InfoWrapper } from '../../pages/AddReleaseElements';

function FormCompleted(props) {
  return (
    <PanelWrapper>
      <DoneHeader>Completed songs:</DoneHeader>
      <InfoWrapper>{props.children}</InfoWrapper>
    </PanelWrapper>
  );
}

export default FormCompleted;
