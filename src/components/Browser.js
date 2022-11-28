import React from "react";
import BrowserImage from "./BrowserImage";
import Description from "./Description.js";

function Browser({name, image, description}) {
    return (
        <section id={name.toLocaleLowerCase().replace(/ /g, "-")}>
            <h1>{name}</h1>
            <Description description = {description}/>
            <BrowserImage browserImage = {image}/>
        </section>
    );
}

export default Browser;