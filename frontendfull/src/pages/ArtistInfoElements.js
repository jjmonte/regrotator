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
