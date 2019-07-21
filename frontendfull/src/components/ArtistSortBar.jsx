import React from 'react';
import styled from '@emotion/styled';
import SortOrderButton from './SortOrderButton';

const SortBarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  background-color: ${props => props.theme.color};
  height: 10%;
  width: 100%;
  position: relative;
  z-index: 1;
`;
const SortButton = styled.button`
  font-size: 20px;
  color: white;
  position: relative;
  margin-left: 4em;
  width: 15%;
  text-align: left;
  &:hover {
    cursor: pointer;
  }
`;

function ArtistSortBar({ sortOrder, setSortOrder }) {
  const toggleSort = () => {
    sortOrder === 'descending' ? setSortOrder('ascending') : setSortOrder('descending');
  };

  function handleClick(e) {
    toggleSort();
  }

  return (
    <SortBarWrapper>
      <SortButton onClick={() => handleClick('artist')}>
        Artist A-Z <SortOrderButton selected={true} order={sortOrder} />
      </SortButton>
    </SortBarWrapper>
  );
}

export default ArtistSortBar;
