import React from 'react';
import styled from '@emotion/styled';
import SortOrderButton from './SortOrderButton';
import { TopBarWrapper } from '../pages/PagesElements';

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
    <TopBarWrapper>
      <SortButton onClick={() => handleClick('artist')}>
        Artist A-Z <SortOrderButton selected={true} order={sortOrder} />
      </SortButton>
    </TopBarWrapper>
  );
}

export default ArtistSortBar;
