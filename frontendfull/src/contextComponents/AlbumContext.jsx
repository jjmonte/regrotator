import React,{useState, useEffect, createContext} from 'react';
import axios from "axios";
export const AlbumContext = createContext();

export const AlbumProvider = props => {
    const [albums, setAlbums] = useState([]);
    useEffect(() => {
        let ignore = false;

        async function fetchData(){
            const res = await axios('http://localhost:3001/api/getAlbums');
            if (!ignore) setAlbums(res.data.data);
        }
        fetchData();
        return () => { ignore = true; }
    }
    
    );
    return(
        <AlbumContext.Provider value={[albums, setAlbums]}>
            {props.children}
        </AlbumContext.Provider>
    );
}