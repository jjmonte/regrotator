import React, {useContext} from "react";
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

// import Category from "../components/Category"
import { AlbumContext } from "../contextComponents/AlbumContext"
import logoPNG from "../resources/regrotatorlogo.png"

const RotationWrapper = styled.div`
    display: flex;  
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    background-color: white;
    height: 100%;
    width: 78%;
`;
const NavElement = styled.div`
    margin: 0;
    text-align: center;
    color: white;
    background-color: ${props => props.theme.highlightColor};
    height: 100%;
    width: 7%;
    span {
        font-size: 3em;
        line-height: normal;
        letter-spacing: .2em;
        transform: translateX(-50%) translateY(-50%) rotate(-90deg);
        top: 50%;
        position: absolute;
    }
`;
function Rotation(props) {
    const [albums, setAlbums] = useContext(AlbumContext);
    return (
        <React.Fragment>
            <NavElement><span>ROTATION</span></NavElement>
            <RotationWrapper>
                <ul>
                    {albums.map(album => (
                        <li>{album.Artist} - {album.Album_title}</li>
                    ))}
                </ul>
            </RotationWrapper>
        </React.Fragment>

    );
}
export default Rotation;