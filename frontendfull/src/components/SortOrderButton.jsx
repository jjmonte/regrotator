import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import { faSortUp } from '@fortawesome/free-solid-svg-icons';

function SortOrderButton(props) {
  if (!props.selected) {
    return null;
  }
  return (
    <React.Fragment>
      {props.order === 'descending' ? (
        <FontAwesomeIcon icon={faSortDown} size="lg" />
      ) : (
        <FontAwesomeIcon icon={faSortUp} size="lg" />
      )}
    </React.Fragment>
  );
}

export default SortOrderButton;
