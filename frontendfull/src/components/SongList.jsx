import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from '@emotion/styled';
import { css } from '@emotion/core'

const ListWrapper = styled.div`
    background-color: inherit;
    height: 100%;
    width: 70%;
`;
const SongListElement = styled.ul`
    display: flex;  
    flex-direction: column;
    justify-content: flex-start;
    width: 100;
    margin: 0 auto;
    border-bottom: 3mm ridge ${props => props.theme.color};
`;
const explicitStriker = props => props.explicit ? css`text-decoration: line-through;` : css`  text-decoration: none;`;

const Song = styled.li`
    ${explicitStriker};
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    &:first-child{
        border-bottom: 3mm ridge ${props => props.theme.color};"
    }
`;
const tryBolder = props => props.try ? css`font-weight: bolder; text-shadow: 1px 1px goldenrod;` : css`font-weight: normal;`;

const SongDescriptor = styled.p`
    ${tryBolder};
    font-size: 1.3em;
    padding-top: 0;
    padding-bottom: 0;
    margin-top: 10px;
    margin-bottom: 10px;
    width: 400px;
    padding-left: 25px

`;

function SongList(props) {
    const [songs, setSongs] = useState([]);
    async function fetchData() {
        const res = await axios('http://localhost:3001/api/getSongs', {
            params: {
                Album_ID: props.albumID
            }
        });
        console.log(res.data.data);
        setSongs(res.data.data);

    }

    useEffect(() => {
        fetchData();

    }, []);
    console.log();
    const songsAsElements = [];
    songs.map(song =>{
        songsAsElements.push(
            <Song key={song.Song_id} explicit={song.Exp_flag}>
                <SongDescriptor>{song.Track_num}</SongDescriptor>
                <SongDescriptor try={song.Try_flag}>{song.Song_title}</SongDescriptor>
                <SongDescriptor>{song.Artist}</SongDescriptor>
                <SongDescriptor>{secondsToMinutes(song.Length)}</SongDescriptor>
            </Song>
        );
    })
    return (
        <ListWrapper>
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
    return (s - (s %= 60)) / 60 + (9 < s ? ":" : ":0") + s;
}

export default SongList;

