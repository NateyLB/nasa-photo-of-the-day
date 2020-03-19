import React from "react";
import axios from "axios";
import styled from 'styled-components';

function ChangeDate(props) {
    const DateSelect = styled.select`
height:5vh;
`;

    const StyledOption = styled.option
        `
font-family: 'Space Mono', monospace;

`;
    return (
        <div>

            <DateSelect id="dates" onChange={() => props.setSelectDate(document.getElementById("dates").value)}>
                <StyledOption value="none">Choose a date to view</StyledOption>
                <StyledOption value="2020-03-17">March 17, 2020</StyledOption>
                <StyledOption value="2020-03-16">March 16, 2020</StyledOption>
                <StyledOption value="2020-03-15">March 15, 2020</StyledOption>
                <StyledOption value="2020-03-14">March 14, 2020</StyledOption>
                <StyledOption value="2020-03-13">March 13, 2020</StyledOption>
                <StyledOption value="2020-03-12">March 12, 2020</StyledOption>
                <StyledOption value="2020-03-11">March 11, 2020</StyledOption>
                <StyledOption value="2020-03-10">March 10, 2020</StyledOption>
                <StyledOption value="2020-03-09">March 09, 2020</StyledOption>
                <StyledOption value="2020-03-08">March 08, 2020</StyledOption>
                <StyledOption value="2020-03-07">March 07, 2020</StyledOption>
                <StyledOption value="2020-03-06">March 06, 2020</StyledOption>
                <StyledOption value="2020-03-05">March 05, 2020</StyledOption>
                <StyledOption value="2020-03-04">March 04, 2020</StyledOption>
                <StyledOption value="2020-03-03">March 03, 2020</StyledOption>
                <StyledOption value="2020-03-02">March 02, 2020</StyledOption>
                <StyledOption value="2020-03-01">March 01, 2020</StyledOption>
            </DateSelect>
        </div>
    );
}

export default ChangeDate