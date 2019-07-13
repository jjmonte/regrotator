import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import BreadCrumb from "../components/Breadcrumb"
import AlbumSummary from "../components/AlbumSummary"

const MainWrapper = styled.div`
    display: flex;  
    flex-direction: column;
    justify-content: flex-start;
    background-color: ${props => props.theme.bwPrimary};
    height: 100%;
    width: 85%;
`;
function Album({ match }) {
    const [albumTitle, setAlbumTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [addDate, setAddDate] = useState('');
    const [releaseDate, setReleaseDate] = useState('');
    const [rotationFlag, setRotationFlag] = useState(0);
    
    const pageAlbumId = match.params.album.substring(0, match.params.album.indexOf('-'));
    async function fetchData() {
        const res = await axios('http://localhost:3001/api/getSingleAlbum',{
            params: {
                Album_ID: pageAlbumId
            }
        });
        console.log(res.data.data[0]);
        setAlbumTitle(res.data.data[0].Album_title);
        setArtist(res.data.data[0].Artist);
        setCategory(res.data.data[0].Category);
        setDescription(res.data.data[0].Description);
        setAddDate(res.data.data[0].Add_date);
        setReleaseDate(res.data.data[0].Release_date);
        setRotationFlag(res.data.data[0].Rotation_flag);

    }

    useEffect(() => {
        fetchData();

    }, []);
    console.log();
    return (
        <MainWrapper>
            <BreadCrumb artist={match.params.artist} album={match.params.album} />
            <AlbumSummary artist={artist} album={albumTitle} description={description} />
            {/* <AlbumTracks />  */}
        </MainWrapper>
    );
}
export default Album;