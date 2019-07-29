import React from 'react';

import styled from '@emotion/styled';
import AddArtistSection from '../components/Forms/AddArtistSection';
const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: ${props => props.theme.bwPrimary};
  height: 100%;
  width: 78%;
`;
const NavElement = styled.div`
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
function Album(props) {
  document.title = `RegRotator: add release`;
  return (
    <React.StrictMode>
      <NavElement>
        <span>ADD RELEASE</span>
      </NavElement>
      <MainWrapper>
        <AddArtistSection
          loadedID={props.location.state === undefined ? null : props.location.state.artistToLoad}
        />
        {/* <AlbumInfoForm />
        <SongListForm /> */}
      </MainWrapper>
    </React.StrictMode>
  );
}
export default Album;
