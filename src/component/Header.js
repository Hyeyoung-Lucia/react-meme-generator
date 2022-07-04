import React from "react"
import img from "../images/troll-face.png"

export default function Headers(){
    return (
        <header className="header">
            <img src={img} alt="logo-image" className="logo-image"/>
            <h1 className="header-title">Meme Generator</h1>
            <h3 className="header-project">React Course - Project 3</h3>
        </header>
    )   
}