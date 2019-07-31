import React from 'react';
import { Link } from 'react-router-dom';
import { NavWrapper, Logo, NavLinks, NavLinkItem } from '../pages/PagesElements';
import ThemeSwitcher from './ThemeSwitcher';

import logoPNG from '../resources/regrotatorlogo.png';

function Navigation() {
  return (
    <NavWrapper>
      <Logo src={logoPNG} alt="Home" />
      <NavLinks>
        <Link to="/rotation">
          <NavLinkItem>Rotation</NavLinkItem>
        </Link>
        <Link to="/playlists">
          <NavLinkItem>Playlists</NavLinkItem>
        </Link>
        <Link to="/archive">
          <NavLinkItem>Archive</NavLinkItem>
        </Link>
        <Link to="/about">
          <NavLinkItem>About</NavLinkItem>
        </Link>
      </NavLinks>
      <ThemeSwitcher />
    </NavWrapper>
  );
}
export default Navigation;
