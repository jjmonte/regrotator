import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function LoadSongFormData({ loadedID }) {
  const [trackNum, setTrackNum] = useState('');
  const [songTitle, setSongTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [length, setLength] = useState('');
  const [tryStatus, setTryStatus] = useState('');
  const [expStatus, setExpStatus] = useState('');

  useEffect(() => {
    async function fetchData() {
      const res = await axios('http://localhost:3001/api/getSingleArtist', {
        params: {
          Artist_ID: loadedID
        }
      });

      setSongTitle(res.data.data[0].Song_title);
      setArtist(res.data.data[0].Artist);
      setLength(res.data.data[0].Length);
      setTryStatus(res.data.data[0].Try_flag);
      setExpStatus(res.data.data[0].Exp_flag);
    }
    fetchData();
  }, [loadedID]);
  return (
    <React.Fragment>
      <p>
        <b>{trackNum}.</b>
        <i> ({length})</i> <b>{songTitle}</b> by <b>{artist}</b>{' '}
        {tryStatus ? <FontAwesomeIcon icon={faStar} /> : ''} {expStatus ? '🅴' : ''}
      </p>
    </React.Fragment>
  );
}
export default LoadSongFormData;
