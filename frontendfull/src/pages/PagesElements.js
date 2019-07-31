import styled from '@emotion/styled';

export const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: ${props => props.theme.backgroundColor};
  height: 100%;
  width: 15%;
`;
export const Logo = styled.img`
  width: 60%;
  padding: 1em;
  margin-top: 2em;
`;
export const NavLinks = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
export const NavLinkItem = styled.li`
  font-size: 3.4em;
  padding: 0.35em 0;
  text-align: center;

  color: ${props => props.theme.bwSecondary};
  &:hover {
    color: ${props => props.theme.highlightColor};
    transition: 0.2s;
  }
`;
export const NavElement = styled.div`
  margin: 0;
  text-align: center;
  color: white;
  background-color: ${props => props.theme.highlightColor};
  color: ${props => props.theme.bwPrimary};
  height: 100%;
  width: 7%;
  span {
    font-size: 3em;
    line-height: normal;
    letter-spacing: 0.2em;
    transform: translateX(-50%) translateY(-50%) rotate(-90deg);
    top: 50%;
    position: absolute;
  }
`;
export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: ${props => props.theme.bwPrimary};
  height: 100%;
  width: 78%;
`;
export const TopBarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  background-color: ${props => props.theme.color};
  height: 10%;
  width: 100%;
  z-index: 1;
`;
export const TopBarWrapperList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  background-color: ${props => props.theme.color};
  color: ${props => props.theme.bwPrimary};
  height: 10%;
  width: 100%;
  z-index: 1;
`;
export const CrumbItem = styled.li`
  font-size: 1.5em;
  text-align: center;
  margin-right: 20px;
  padding: 2.8% 0;
  text-transform: capitalize;
  &:hover {
    cursor: pointer;
  }
  &:first-of-type {
    margin-left: 50px;
  }
`;
export const SortButton = styled.button`
  font-size: 1.3em;
  color: white;
  position: relative;
  margin-left: 2em;
  width: 12%;
  text-align: left;
  &:hover {
    cursor: pointer;
  }
`;
export const SecondaryWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  height: 90%;
  width: 100%;
  color: ${props => props.theme.bwSecondary};
`;

export const SecondaryWrapperList = styled.ul`
  overflow: auto;
  height: 90%;
  max-width: 100%;
  background-color: ${props => props.theme.bwPrimary};
  color: ${props => props.theme.bwSecondary};
`;

export const ListInitial = styled.p`
  float: right;
  position: relative;
  width: 40px;
  margin-right: 50px;
  right: -40px;
  text-align: center;
`;
