import styled from '@emotion/styled';

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
  padding-left: 3%;
  padding-top: 1%;
  background-color: ${props => props.theme.bwPrimary};
  color: ${props => props.theme.bwSecondary};
  ${props =>
    props.needsTopSpace &&
    `
    padding-top: 60px;
`}
`;

export const ListInitial = styled.p`
  float: right;
  position: relative;
  width: 40px;
  margin-right: 50px;
  right: -40px;
  text-align: center;
`;
