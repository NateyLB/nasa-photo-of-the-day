import React, { useState, useEffect } from "react";
import axios from "axios";
import ChangeDate from "./ChangeDate.js"
import Title from "./Title.js";
import Img from "./Img.js";
import Info from "./Info.js";
import Description from "./Description.js";



function NasaCard() {
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
                    setImg(response.data.url);
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
            <ChangeDate setSelectDate={setSelectDate} />
            <Title title = "NASA's PHOTO OF THE DAY" type="blue"/>
            <Title title={title} type = "black"/>
            <Img img={img} />
            <Info author={author} date={date} />
            <Description description={description} />
        </div>
    );
}

export default NasaCard;