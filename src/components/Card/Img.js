import React from "react";
import axios from "axios";
import styled from 'styled-components';


function Img (props){

    const StyledImg = styled.img`
    border-radius:10px
    
    `;

    return <StyledImg src={props.img} alt="image of the day"  />
}

export default Img