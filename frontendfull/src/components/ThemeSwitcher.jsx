import React from 'react';
import { useTheme } from '../ThemeContext';
import styled from '@emotion/styled';

const Switcher = styled.button`
  width: 200px;
  border: 1px solid black;
  border-radius: 4px;
  background-color: white;
  font-size: 20px;
  padding: 5px;
  position: fixed;
  bottom: 50px;
`;
function ThemeSwitcher(props) {
  const themeState = useTheme();
  return (
    <Switcher onClick={() => themeState.toggle()}>
      {themeState.dark ? 'Light Mode' : 'Dark Mode'}
    </Switcher>
  );
}
export default ThemeSwitcher;
