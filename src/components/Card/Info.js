import React from "react";
import axios from "axios";

function Info(props) {

    return(
    <div>
        <h3>{props.author}</h3>
        <h3>{props.date}</h3>
    </div>
    );
}

export default Info