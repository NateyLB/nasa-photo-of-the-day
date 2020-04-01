import React from "react";
import axios from "axios";
import styled from 'styled-components';

function ChangeDate(props) {
    const DateSelect = styled.select`
height:5vh;
`;

    const StyledOption = styled.option
        `
font-family: Nasalization;

`;
    return (
        <div>

            <DateSelect id="dates" onChange={() => props.setSelectDate(document.getElementById("dates").value)}>
                <StyledOption value="none">Choose a date to view</StyledOption>
                <StyledOption value="2020-03-31">March 17, 2020</StyledOption>
                <StyledOption value="2020-03-30">March 16, 2020</StyledOption>
                <StyledOption value="2020-03-29">March 15, 2020</StyledOption>
                <StyledOption value="2020-03-28">March 14, 2020</StyledOption>
                <StyledOption value="2020-03-27">March 13, 2020</StyledOption>
                <StyledOption value="2020-03-26">March 12, 2020</StyledOption>
                <StyledOption value="2020-03-25">March 11, 2020</StyledOption>
                <StyledOption value="2020-03-24">March 10, 2020</StyledOption>
                <StyledOption value="2020-03-23">March 09, 2020</StyledOption>
                <StyledOption value="2020-03-22">March 08, 2020</StyledOption>
                <StyledOption value="2020-03-21">March 07, 2020</StyledOption>
                <StyledOption value="2020-03-20">March 06, 2020</StyledOption>
                <StyledOption value="2020-03-19">March 05, 2020</StyledOption>
                <StyledOption value="2020-03-18">March 04, 2020</StyledOption>
                <StyledOption value="2020-03-17">March 03, 2020</StyledOption>
                <StyledOption value="2020-03-16">March 02, 2020</StyledOption>
                <StyledOption value="2020-03-15">March 01, 2020</StyledOption>
            </DateSelect>
        </div>
    );
}

export default ChangeDate