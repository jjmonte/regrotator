import React from "react";
import styled from '@emotion/styled';

import albumCover from "../resources/placeholdercover.jpeg"

const SummaryWrapper = styled.div`
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
const AlbumCover = styled.img`
    width: 60%;
    margin: 10px;
    margin-top: 10%;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
`;
const AlbumTitle = styled.h1`
    text-align: center;
    margin: 10px;
    max-width: 70%;
    line-height: 1.2em;
`;
const ArtistName = styled.h2`
    text-align: center;
    margin: 10px;
    max-width: 70%;
    line-height: 1.2em;
`;
const Description = styled.p`
    width: 70%;
    margin: 10px;
    font-size: 1.2em;
    text-align: justify;
`;
const Dates = styled.span`
    margin-top: 20px;
    font-weight: bold;
`;
function AlbumSummary(props) {
    var parsedReleaseDate = new Date(props.released.substring(0, 4), props.released.substring(5, 7), props.released.substring(8, 10), 0, 0, 0);
    var parsedAddDate = new Date(props.added.substring(0, 4), props.added.substring(5, 7), props.added.substring(8, 10), 0, 0, 0);

    return (
        <SummaryWrapper>
            <AlbumCover src={albumCover} />
            <AlbumTitle>{props.album}</AlbumTitle>
            <ArtistName>{props.artist}</ArtistName>
            <Description>{props.description}</Description>
            <Dates>Released: {parsedReleaseDate.toDateString().substring(4, 15)} • Added: {parsedAddDate.toDateString().substring(4, 15)}</Dates>
        </SummaryWrapper>
    );
}

export default AlbumSummary;
