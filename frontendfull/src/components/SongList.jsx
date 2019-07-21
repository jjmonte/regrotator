import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompactDisc } from '@fortawesome/free-solid-svg-icons';
import { faArchive } from '@fortawesome/free-solid-svg-icons';

const ListWrapper = styled.div`
  background-color: inherit;
  height: 100%;
  width: 60%;
  display: flex;
  flex-direction: column;
  justifycontent: flex-start;
`;
const InfoBar = styled.div`
  font-size: 2.5em;
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0 40px;
`;

const SongListElement = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100;
  border-bottom: 1px solid ${props => props.theme.color};
`;
const explicitStriker = props =>
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

const Song = styled.li`
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

const SongDescriptor = styled.p`
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

function SongList(props) {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios('http://localhost:3001/api/getSongs', {
        params: {
          Album_ID: props.albumID
        }
      });
      setSongs(res.data.data);
    }
    fetchData();
  }, [props.albumID]);

  const songsAsElements = songs.map(song => (
    <Song key={song.Song_id} explicit={song.Exp_flag}>
      <SongDescriptor>
        {song.Track_num < 10 ? '0' : ''}
        {song.Track_num}
      </SongDescriptor>
      <SongDescriptor try={song.Try_flag}>{song.Song_title}</SongDescriptor>
      <SongDescriptor>{song.Artist}</SongDescriptor>
      <SongDescriptor>{secondsToMinutes(song.Length)}</SongDescriptor>
    </Song>
  ));
  return (
    <ListWrapper>
      <InfoBar>
        {props.rotation ? (
          <p>
            <FontAwesomeIcon icon={faCompactDisc} /> In Rotation
          </p>
        ) : (
          <p>
            <FontAwesomeIcon icon={faArchive} /> Archived
          </p>
        )}
        <p>{props.category}</p>
      </InfoBar>
      <SongListElement>
        <Song>
          <SongDescriptor>#</SongDescriptor>
          <SongDescriptor>Track</SongDescriptor>
          <SongDescriptor>Artist</SongDescriptor>
          <SongDescriptor>Time</SongDescriptor>
        </Song>
        {songsAsElements}
      </SongListElement>
    </ListWrapper>
  );
}

function secondsToMinutes(s) {
  return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + s;
}

export default SongList;
