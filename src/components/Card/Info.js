import React from "react";
import axios from "axios";
import styled from 'styled-components';


function Info(props) {
    const InfoContainer = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-evenly;
    align-items:center;
    `;

    const StyledH3 = styled.h3`
    font-family: 'Space Mono', monospace;
    
    `;
    return(
    <InfoContainer>
        <StyledH3>{props.author}</StyledH3>
        <StyledH3>{props.date}</StyledH3>
    </InfoContainer>
    );
}

export default Info