import React from 'react';
import { PanelWrapper, DoneHeader, InfoWrapper } from '../../pages/AddReleaseElements';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

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
