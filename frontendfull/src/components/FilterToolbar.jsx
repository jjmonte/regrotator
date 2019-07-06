import React, { useContext } from "react";
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import SortBar from "./SortBar";
import CategoryFilter from "./CategoryFilter";

const ToolbarWrapper = styled.div`
    display: flex;  
    flex-direction: column;
    justify-content: flex-start;
    height: 15%;
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