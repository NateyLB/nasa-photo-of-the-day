import React from "react";
import axios from "axios";
import styled from 'styled-components';

function Title (props){

    const StyledH1 = styled.h1`
    font-family: Nasalization;

    ${props => (props.type === 'black' ? `color: black;` : null)}
    ${props => (props.type === 'blue' ? `color:#17a2b8;` : null)}
    `;

    return <StyledH1 type = {props.type}>{props.title}</StyledH1>
}

export default Title