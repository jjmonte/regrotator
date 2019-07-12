import React, {useContext} from "react";
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import BreadCrumb from "../components/Breadcrumb"


const MainWrapper = styled.div`
    display: flex;  
    flex-direction: column;
    justify-content: flex-start;
    background-color: ${props => props.theme.bwPrimary};
    height: 100%;
    width: 85%;
`;
function Album({ match }) {
    
    return (
        <MainWrapper>
            <BreadCrumb artist={match.params.artist} album={match.params.album} />
        </MainWrapper>
    );
}
export default Album;