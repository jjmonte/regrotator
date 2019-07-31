import React from 'react';
import { CategoryFilterWrapper, CategoryButton } from '../pages/RotationElements';

function CategoryFilter({ category, setCategory }) {
  function handleClick(e) {
    setCategory(e);
  }
  return (
    <CategoryFilterWrapper>
      <CategoryButton
        className={category === 'ALL' ? 'selected' : ''}
        onClick={() => handleClick('ALL')}
      >
        All
      </CategoryButton>
      <CategoryButton
        className={category === 'H' ? 'selected' : ''}
        onClick={() => handleClick('H')}
      >
        H
      </CategoryButton>
      <CategoryButton
        className={category === 'M' ? 'selected' : ''}
        onClick={() => handleClick('M')}
      >
        M
      </CategoryButton>
      <CategoryButton
        className={category === 'L' ? 'selected' : ''}
        onClick={() => handleClick('L')}
      >
        L
      </CategoryButton>
      <CategoryButton
        className={category === 'A' ? 'selected' : ''}
        onClick={() => handleClick('A')}
      >
        A
      </CategoryButton>
    </CategoryFilterWrapper>
  );
}

export default CategoryFilter;
