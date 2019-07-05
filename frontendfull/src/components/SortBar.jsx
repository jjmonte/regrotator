import React, { useState, useEffect } from "react";
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortDown } from '@fortawesome/free-solid-svg-icons'
import { faSortUp } from '@fortawesome/free-solid-svg-icons'

const SortBarWrapper = styled.div`
    display: flex;  
    flex-direction: row;
    justify-content: flex-start;
    background-color: ${props => props.theme.color};
    height: 62%;
    width: 100%;
     position: relative;
`;
const SortButton = styled.button`
    font-size: 20px;    
    color: white;
    position: relative;
    margin-left: 4em;
    width: 10%;
    text-align: left;
`; 

function SortBar(props) {
    const [sortType, setSortType] = useState("album");
    const [sortOrder, setSortOrder] = useState("descending");
    
    const toggleSort = () => { sortOrder === "descending" ? setSortOrder("ascending") : setSortOrder("descending") }
    
    function handleClick(e){
        if (e === sortType) {
            toggleSort();
        } else {
            setSortType(e);
        }
    }
    return (
        <SortBarWrapper>
            <SortButton onClick={() => handleClick("date")} >Date Played  <SortOrderButton selected={sortType === "date"} order={sortOrder} /></SortButton>
            <SortButton onClick={() => handleClick("album")} >Album A-Z   <SortOrderButton selected={sortType === "album"} order={sortOrder} /></SortButton>
            <SortButton onClick={() => handleClick("artist")} >Artist A-Z <SortOrderButton selected={sortType === "artist"} order={sortOrder} /></SortButton>
        </SortBarWrapper>
    );
}

function SortOrderButton(props){
    if (!props.selected) {
        return null;
    }
    return(
        <React.Fragment>
            {props.order === "descending" ? (
            <FontAwesomeIcon icon={faSortDown} size="lg" />
        ) : (
            <FontAwesomeIcon icon={faSortUp} size="lg" />
        )}
        </React.Fragment>
    );

}

export default SortBar;