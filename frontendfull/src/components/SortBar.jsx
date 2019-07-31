import React from 'react';
import { TopBarWrapper, SortButton } from '../pages/PagesElements';

import SortOrderButton from './SortOrderButton';

function SortBar({ sortOrder, setSortOrder, sortType, setSortType, useAllCategories }) {
  const toggleSort = () => {
    sortOrder === 'descending' ? setSortOrder('ascending') : setSortOrder('descending');
  };

  function handleClick(e) {
    if (e === sortType) {
      toggleSort();
    } else {
      setSortType(e);
    }
  }

  return (
    <TopBarWrapper>
      <SortButton onClick={() => handleClick('date')}>
        Date Added <SortOrderButton selected={sortType === 'date'} order={sortOrder} />
      </SortButton>
      <SortButton onClick={() => handleClick('album')}>
        Album A-Z <SortOrderButton selected={sortType === 'album'} order={sortOrder} />
      </SortButton>
      <SortButton onClick={() => handleClick('artist')}>
        Artist A-Z <SortOrderButton selected={sortType === 'artist'} order={sortOrder} />
      </SortButton>
      {useAllCategories ? (
        <SortButton onClick={() => handleClick('category')}>
          Category H-A <SortOrderButton selected={sortType === 'category'} order={sortOrder} />
        </SortButton>
      ) : (
        ''
      )}
    </TopBarWrapper>
  );
}

export default SortBar;
