import React from 'react';

import SortOrderButton from './SortOrderButton';
import { TopBarWrapper, SortButton } from '../pages/PagesElements';

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
