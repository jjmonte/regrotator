import React, { useState } from "react";
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortDown } from '@fortawesome/free-solid-svg-icons'
import { faSortUp } from '@fortawesome/free-solid-svg-icons'

const SortBarWrapper = styled.div`
    display: flex;  
    flex-direction: row;
    justify-content: flex-start;
    background-color: ${props => props.theme.color};
    height: 10%;
    width: 100%;
    position: relative;
`;
const SortButton = styled.button`
    font-size: 20px;    
    color: white;
    position: relative;
    margin-left: 4em;
    width: 15%;
    text-align: left;
    &:hover {
        cursor: pointer;
    }
`; 

function SortBar({ sortOrder, setSortOrder, sortType, setSortType, useAllCategories}) {
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
            <SortButton onClick={() => handleClick("date")} >Date Added <SortOrderButton selected={sortType === "date"} order={sortOrder} /></SortButton>
            <SortButton onClick={() => handleClick("album")} >Album A-Z   <SortOrderButton selected={sortType === "album"} order={sortOrder} /></SortButton>
            <SortButton onClick={() => handleClick("artist")} >Artist A-Z <SortOrderButton selected={sortType === "artist"} order={sortOrder} /></SortButton>
            {useAllCategories ? <SortButton onClick={() => handleClick("category")} >Category H-A <SortOrderButton selected={sortType === "category"} order={sortOrder} /></SortButton> : ""}       
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