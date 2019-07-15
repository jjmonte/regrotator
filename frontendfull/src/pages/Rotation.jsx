import React, { useContext, useState, useEffect } from "react";
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import { AlbumContext } from "../contextComponents/AlbumContext"
import SortBar from "../components/SortBar";
import CategoryFilter from "../components/CategoryFilter";

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
const FilterToolbar = styled.div`
    display: flex;  
    flex-direction: column;
    justify-content: flex-start;
    height: 15%;
    width: 100%;
`;

const AlbumList = styled.ul`
    overflow: scroll;
    height: 86%;
    width: 97%;
    padding-left: 40px;
    padding-top: 20px;
    background-color: ${props => props.theme.bwPrimary};

`;
//Please don't murder me jade
//Or do? i dunno, don't let me tell you how to live your life
const AlbumItem = styled.li`
    font-size: 2.5em;
    margin: 15px 0;
    font-weight: bolder;
    color: ${props => props.theme.bwSecondary};
    &.björk{
        text-shadow: 2px 2px 4px #000000;
        -webkit-animation: rainbow 5s infinite; 
        -ms-animation: rainbow 5s infinite;
        animation: rainbow 5s infinite; 
    }
    @-webkit-keyframes rainbow{
        0%{color: orange;}	
        10%{color: purple;}	
        20%{color: red;}
        30%{color: CadetBlue;}
        40%{color: yellow;}
        50%{color: coral;}
        60%{color: green;}
        70%{color: cyan;}
        80%{color: DeepPink;}
        90%{color: DodgerBlue;}
        100%{color: orange;}
    }
    @-ms-keyframes rainbow{
        0%{color: orange;}	
        10%{color: purple;}	
        20%{color: red;}
        30%{color: CadetBlue;}
        40%{color: yellow;}
        50%{color: coral;}
        60%{color: green;}
        70%{color: cyan;}
        80%{color: DeepPink;}
        90%{color: DodgerBlue;}
        100%{color: orange;}
    }
    @keyframes rainbow{
        0%{color: orange;}	
        10%{color: purple;}	
        20%{color: red;}
        30%{color: CadetBlue;}
        40%{color: yellow;}
        50%{color: coral;}
        60%{color: green;}
        70%{color: cyan;}
        80%{color: DeepPink;}
        90%{color: DodgerBlue;}
        100%{color: orange;}
    }
`;
const Category = styled.p`
    float: right;
    position: relative;
    width: 40px;
    margin-right: 50px;
    right: -40px;
    text-align: center;
`;

function Rotation(props) {
    const [albums, setAlbums] = useContext(AlbumContext);
    const [category, setCategory] = useState("ALL");
    const [sortType, setSortType] = useState("category");
    const [sortOrder, setSortOrder] = useState("descending");
    
    useEffect(() => {
        document.title = `RegRotator: Current Rotation`; 
    });
    const rotationList = albums
        // .filter(album => album.Rotation_flag === 1)   //Not enough sample data, so disabling for now
        .filter(album => category === 'ALL' || category === album.Category);

    switch(sortType) {
        case "artist":
            console.log("sorting by Artist");
            rotationList.sort(compareArtist);
            break;
        case "album":
            console.log("sorting by Album_title");
            rotationList.sort(compareAlbum);
            break;
        default:
            console.log("whoopsiedaisy");
    }
    return (
        <React.Fragment>
            <NavElement><span>ROTATION</span></NavElement>
            <MainWrapper>
                <FilterToolbar>
                    <SortBar sortType={sortType} setSortType={setSortType} sortOrder={sortOrder} setSortOrder={setSortOrder} useAllCategories={category === "ALL"} />
                    <CategoryFilter category={category} setCategory={setCategory} />
                </FilterToolbar>
                <AlbumList>
                    {rotationList.map(album => {
                        return (
                            <AlbumItem className={album.Artist === "Björk" ? "björk" : "not_björk"}key={album.Album_id}>
                                <Link to={`/${album.Artist.replace(/\s+/g, '-').toLowerCase()}/${album.Album_id}-${album.Album_title.replace(/\s+/g, '-').toLowerCase()}/`}>
                                    {album.Artist.toUpperCase()} - {album.Album_title.toUpperCase()}
                                </Link>
                                <Category>{album.Category}</Category>
                            </AlbumItem>);
                    })}
                </AlbumList>
            </MainWrapper>
        </React.Fragment>

    );
}
function compareArtist(a, b) {
    if (a.Artist.toUpperCase() < b.Artist.toUpperCase())  {
        return -1;
    }
    if (a.Artist.toUpperCase() > b.Artist.toUpperCase()) {
        return 1;
    }
    return 0;
}
function compareAlbum(a, b) {
    if (a.Album_title.toUpperCase() < b.Album_title.toUpperCase()) {
        return -1;
    }
    if (a.Album_title.toUpperCase() > b.Album_title.toUpperCase()) {
        return 1;
    }
    return 0;
}
export default Rotation;