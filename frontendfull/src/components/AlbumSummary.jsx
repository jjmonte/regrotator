import React from "react";
import styled from '@emotion/styled';

import albumCover from "../resources/placeholdercover.jpeg"

const SummaryWrapper = styled.div`
    display: flex;  
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: inherits;
    border-right: 4mm ridge ${props => props.theme.color};
    height: 91%;
    width: 30%;
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
function AlbumSummary(props) {

    return (
        <SummaryWrapper>
            <AlbumCover src={albumCover} />
            <AlbumTitle>{props.album}</AlbumTitle>
            <ArtistName>{props.artist}</ArtistName>
            <Description>{props.description}</Description>
        </SummaryWrapper>
    );
}

export default AlbumSummary;
