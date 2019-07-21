import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';
const AlbumContext = createContext();

const AlbumProvider = props => {
  const [albums, setAlbums] = useState([]);

  async function fetchData() {
    const res = await axios('http://localhost:3001/api/getAlbums');
    setAlbums(res.data.data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AlbumContext.Provider value={[albums, setAlbums]}>{props.children}</AlbumContext.Provider>
  );
};

export { AlbumProvider, AlbumContext };
