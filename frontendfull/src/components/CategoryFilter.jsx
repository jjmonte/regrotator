import React from 'react';
import styled from '@emotion/styled';

const CategoryFilterWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  height: 6%;
  width: 25%;
  background-color: ${props => props.theme.bwPrimary};
  position: absolute;
  top: 9.3%;
  left: 24%;
  z-index: 0;
`;
const CategoryButton = styled.li`
  margin: 0 -5px;
  padding: 20px 20px;
  font-size: 1.5em;
  width: 20%;
  text-align: center;
  background: ${props => props.theme.highlightColor};
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  z-index: 0;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2);

  &.selected {
    background: ${props => props.theme.color};
    color: #fff;
    z-index: 2;
  }
  &:hover {
    cursor: pointer;
  }
`;
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
