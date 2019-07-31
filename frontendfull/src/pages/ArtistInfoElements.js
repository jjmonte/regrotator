import styled from '@emotion/styled';

export const AlbumContainer = styled.li`
  height: 100%;
  width: 15%;
  margin: 0 10px;
  h2 {
    position: absolute;
    left: 38%;
    top: 130px;
    font-size: 4em;
    background-color: transparent;
    visibility: hidden;
    text-shadow: 1px 3px 3px #000000;
    opacity: 0;
    transition: opacity 0.3s linear;
  }
  &:hover {
    -webkit-filter: grayscale(1);
    filter: grayscale(1);
    transition: filter 1s ease-out;
    h2 {
      visibility: visible;
      opacity: 1;
    }
  }
`;
export const AlbumCover = styled.img`
  width: 90%;
  margin: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;
//Magic number: font-size
export const ArtistName = styled.h1`
  font-size: 10vw;
  font-weight: bolder;
  margin: 50px 0;
  width: 100%;
`;
export const ListWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-left: 20px;
  overflow: auto;
  h1 {
    text-align: center;
  }
`;
export const ArtistProfile = styled.li`
  height: 85%;
  width: 15%;
  margin: 0 10px;
  text-align: center;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  h1 {
    margin: 10px 0;
  }
  h2 {
    margin: 10px 0;
  }
`;
export const AddReleaseLink = styled.span`
  height: 30%;
  width: 10%;
  margin: auto 0;
  text-align: center;
  text-shadow: 0 10px 20px rgba(0, 0, 0, 0.19);
  h2 {
    margin-top: 10px;
  }
  svg:hover {
    color: green;
    transition: all 0.2s;
  }
`;
