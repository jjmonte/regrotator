import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
  ListWrapper,
  InfoBar,
  SongListElement,
  Song,
  SongDescriptor,
  AddSongsLink
} from '../pages/AlbumElements';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompactDisc } from '@fortawesome/free-solid-svg-icons';
import { faArchive } from '@fortawesome/free-solid-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

function SongList(props) {
  const [songs, setSongs] = useState([]);
  const [loadingStatus, setLoadingStatus] = useState('completed');
  useEffect(() => {
    async function fetchData() {
      const res = await axios('http://localhost:3001/api/getSongs', {
        params: {
          Album_ID: props.albumID
        }
      });

      if (res.data.data.length > 0) {
        setLoadingStatus('completed');
        setSongs(res.data.data);
      } else {
        setLoadingStatus('failed');
      }
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
        {loadingStatus === 'completed' ? (
          ''
        ) : (
          <Link
            to={{
              pathname: '/add-release/',
              state: {
                artistToLoad: props.artistID,
                albumToLoad: props.albumID
              }
            }}
          >
            <AddSongsLink>
              <h1>No songs found for this album.</h1>
              <FontAwesomeIcon icon={faPlusCircle} size="4x" />
              <h2>Add Songs</h2>
            </AddSongsLink>
          </Link>
        )}
      </SongListElement>
    </ListWrapper>
  );
}

function secondsToMinutes(s) {
  return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + s;
}

export default SongList;
