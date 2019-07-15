import React from "react";
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import ThemeSwitcher from "./ThemeSwitcher"

import logoPNG from "../resources/regrotatorlogo.png"

const NavWrapper = styled.div`
    display: flex;  
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: ${props => props.theme.backgroundColor};
    height: 100%;
    width: 15%;
`;
const Logo = styled.img`
    width: 60%;
    padding: 1em;
    margin-top: 2em;
`;
const NavLinks = styled.ul`
    display: flex;  
    flex-direction: column;
    justify-content: flex-start;
`;
const NavLinkItem = styled.li`
    font-size: 3.4em;
    padding: .35em 0;
    text-align: center;
    
    color: ${props => props.theme.bwSecondary};
    &:hover {
        color: ${props => props.theme.highlightColor};
        transition: .2s;
    }
`;
function Navigation(props) {

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