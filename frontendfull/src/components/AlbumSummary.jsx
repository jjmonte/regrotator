import React from "react";
import styled from '@emotion/styled';
import ContentLoader from "react-content-loader"

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
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
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
            {props.artist === '' ?
            (<ContentLoader
                height={600}
                width={400}
                speed={2}
                primaryColor="#f3f3f3"
                secondaryColor="#ecebeb"
            >

                <rect x="80" y="50" rx="5" ry="5" width="240" height="240" />
                <rect x="110" y="300" rx="4" ry="4" width="185" height="24" />
                <rect x="120" y="335" rx="4" ry="4" width="165" height="25" />
                <rect x="90" y="380" rx="4" ry="4" width="225" height="100" />
                <rect x="90" y="500" rx="4" ry="4" width="225" height="15" />

            </ContentLoader>)
            :
            (<React.Fragment>
                <AlbumCover src={albumCover} />
                <AlbumTitle>{props.album}</AlbumTitle>
                <ArtistName>{props.artist}</ArtistName>
                <Description>{props.description}</Description>
                <Dates>Released: {parsedReleaseDate.toDateString().substring(4, 15)} • Added: {parsedAddDate.toDateString().substring(4, 15)}</Dates>
            </React.Fragment>)}
        </SummaryWrapper>
    );
}






export default AlbumSummary;
