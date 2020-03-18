import React from "react";
import axios from "axios";

function ChangeDate(props) {

    return(
        <div>
    <label for="dates">Choose a date to view:</label>

    <select id="dates" onChange = {() => props.setSelectDate(document.getElementById("dates").value)}>
        <option value="none">Select a date</option>
        <option value="2020-03-17">March 17, 2020</option>
        <option value="2020-03-16">March 16, 2020</option>
        <option value="2020-03-15">March 15, 2020</option>
        <option value="2020-03-14">March 14, 2020</option>
        <option value="2020-03-13">March 13, 2020</option>
        <option value="2020-03-12">March 12, 2020</option>
        <option value="2020-03-11">March 11, 2020</option>
        <option value="2020-03-10">March 10, 2020</option>
        <option value="2020-03-09">March 09, 2020</option>
        <option value="2020-03-08">March 08, 2020</option>
        <option value="2020-03-07">March 07, 2020</option>
        <option value="2020-03-06">March 06, 2020</option>
        <option value="2020-03-05">March 05, 2020</option>
        <option value="2020-03-04">March 04, 2020</option>
        <option value="2020-03-03">March 03, 2020</option>
        <option value="2020-03-02">March 02, 2020</option>
        <option value="2020-03-01">March 01, 2020</option>
    </select>
    </div>
    );
}

export default ChangeDate