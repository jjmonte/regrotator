import React, {useContext} from "react";
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

// import Category from "../components/Category"
import { AlbumContext } from "../contextComponents/AlbumContext"
import FilterToolbar from "../components/FilterToolbar"

const MainWrapper = styled.div`
    display: flex;  
    flex-direction: column;
    justify-content: flex-start;
    background-color: ${props => props.theme.bwPrimary};
    height: 100%;
    width: 78%;
`;
const NavElement = styled.div`
    margin: 0;
    text-align: center;
    color: white;
    background-color: ${props => props.theme.highlightColor};
    color: ${props => props.theme.bwPrimary};
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
const AlbumList = styled.ul`
    overflow: scroll;
    height: 86%;
    width: 97%;
    padding-left: 40px;
    padding-top: 20px;
    background-color: ${props => props.theme.bwPrimary};

`;
const AlbumItem = styled.li`
    font-size: 2.5em;
    margin: 15px 0;
    font-weight: bolder;
    color: ${props => props.theme.bwSecondary};
`;
function Rotation(props) {
    const [albums, setAlbums] = useContext(AlbumContext);

    return (
        <React.Fragment>
            <NavElement><span>ROTATION</span></NavElement>
            <MainWrapper>
                <FilterToolbar />
                <AlbumList>
                    {albums.map(album => (
                        <AlbumItem key={album.Album_id}>
                            <Link to={`${album.Artist.replace(/\s+/g, '-').toLowerCase()}/${album.Album_id}-${album.Album_title.replace(/\s+/g, '-').toLowerCase()}/`}>
                                {album.Artist.toUpperCase()} - {album.Album_title.toUpperCase()}
                            </Link>
                        </AlbumItem>
                    ))}
                </AlbumList>
            </MainWrapper>
        </React.Fragment>

    );
}
export default Rotation;