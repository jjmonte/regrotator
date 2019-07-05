import React, { useContext } from "react";
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import SortBar from "./SortBar";

const ToolbarWrapper = styled.div`
    display: flex;  
    flex-direction: column;
    justify-content: flex-start;
    background-color: ${props => props.theme.backgroundColor};
    height: 15%;
    width: 100%;
`;
const CategoryFilter = styled.div`
    display: flex;  
    flex-direction: row;
    justify-content: flex-start;
    background-color: ${props => props.theme.highlightColor};
    height: 38%;
    width: 100%;
`;
function FilterToolbar(props) {
    return (
        <ToolbarWrapper>
            <SortBar />
            <CategoryFilter/>
        </ToolbarWrapper>

    );
}
export default FilterToolbar;