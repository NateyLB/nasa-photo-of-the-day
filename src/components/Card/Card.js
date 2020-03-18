import React, { useState, useEffect } from "react";
import axios from "axios";
import Title from "./Title.js";
import Img from "./Img.js";
import Info from "./Info.js";
import Description from "./Description.js";


function Card() {
    const [title, setTitle] = useState('');
    const [img, setImg] = useState('');
    const [author, setAuthor] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [selectDate, setSelectDate] = useState('2020-03-18')


        useEffect(() => {
            axios
                .get(`https://api.nasa.gov/planetary/apod?api_key=HHSZm9gE0Z0rIyaxjbFkKRDFrVyhvR62A0YLzbAU&date=${selectDate}`)
                .then(response => {
                    console.log(response.data);
                    setTitle(response.data.title);
                    setImg(response.data.hdurl);
                    setAuthor(response.data.copyright);
                    setDate(response.data.date);
                    setDescription(response.data.explanation)
                })
                .catch(error => {
                    console.log("No data recieved", error)
                });
        }, [selectDate])
    return (
        <div>
         <label for="dates">Choose a date to view:</label>

            <select id="dates" onChange = {() => setSelectDate(document.getElementById("dates").value)}>
                <option value="none">Select a date</option>
                <option value="2020-03-16" >March 17, 2020</option>
                <option value="2020-03-16">March 16, 2020</option>
                <option value="2020-03-15">March 15, 2020</option>
                <option value="2020-03-14">March 14, 2020</option>
                <option value="2020-03-13">March 13, 2020</option>
                <option value="2020-03-12">March 13, 2020</option>
                <option value="2020-03-11">March 12, 2020</option>
            </select>
            <Title title={title} />
            <Img img={img} />
            <Info author={author} date={date} />
            <Description description={description} />
        </div>
    );
}

export default Card;