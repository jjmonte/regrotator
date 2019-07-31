import styled from '@emotion/styled';
import { css } from '@emotion/core';

export const ListWrapper = styled.div`
  background-color: inherit;
  height: 100%;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
export const InfoBar = styled.div`
  font-size: 2.5em;
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0 40px;
`;
export const SongListElement = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100;
  border-bottom: 1px solid ${props => props.theme.color};
`;
export const explicitStriker = props =>
  props.explicit
    ? css`
        &:after {
          position: absolute;
          left: 2%;
          top: 45%;
          height: 3px;
          background: black;
          content: '';
          width: 93%;
          display: block;
        }
      `
    : css``;

export const Song = styled.li`
  ${explicitStriker};
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  &:first-child {
    border-bottom: 1px solid ${props => props.theme.color};
    border-top: 1px solid ${props => props.theme.color};
  }
`;
const tryBolder = props =>
  props.try
    ? css`
        font-weight: bolder;
        text-shadow: 1px 1px goldenrod;
      `
    : css`
        font-weight: normal;
      `;

export const SongDescriptor = styled.p`
  ${tryBolder};
  font-size: 1.3em;
  padding-top: 0;
  padding-bottom: 0;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 42.5%;
  padding-left: 25px;
  &:first-child {
    width: 5%;
  }
  &:last-child {
    width: 10%;
  }
`;
export const AddSongsLink = styled.li`
  margin: 50px;
  text-align: center;
  text-shadow: 0 10px 20px rgba(0, 0, 0, 0.19);

  h1 {
    margin-bottom: 10px;
  }
  h2 {
    margin-top: 10px;
  }
  svg:hover {
    color: green;
    transition: all 0.2s;
  }
`;

export const SummaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: inherit;
  border-right: 1px solid ${props => props.theme.color};
  height: 100%;
  width: 40%;
  position: relative;
`;
export const AlbumCover = styled.img`
  width: 60%;
  margin: 10px;
  margin-top: 10%;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;
export const AlbumTitle = styled.h1`
  text-align: center;
  margin: 10px;
  max-width: 70%;
  line-height: 1.2em;
`;
export const ArtistName = styled.h2`
  text-align: center;
  margin: 10px;
  max-width: 70%;
  line-height: 1.2em;
`;
export const Description = styled.p`
  width: 70%;
  margin: 10px;
  font-size: 1.2em;
  text-align: justify;
`;
export const Dates = styled.span`
  margin-top: 20px;
  font-weight: bold;
`;
