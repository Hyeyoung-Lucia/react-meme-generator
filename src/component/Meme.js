import React from "react"
import memesData from "../memesData"

export default function Meme() {

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage:"http://i.imgflip.com/1bij.jpg"
  });

  const [allMemeImages, setAllMemeImages] = React.useState(memesData);
  
  function handleClick() {
    const memeArray = allMemeImages.data.memes;
    const randomNum = memeArray[Math.floor(Math.random() * memeArray.length)];
    const url = randomNum.url;
    setMeme(prevMeme => ({
      ...prevMeme,
        randomImage:url
    }))
    }
  
    return (
        <main>
            <div className="meme-form">
                <div className="input-group">
                    <input className="form-input" type="text" placeholder="Top text" />
                    <input className="form-input" type="text" placeholder="Bottom text" />
                </div>
                <button className="generate-btn" onClick={handleClick}>Get a new meme image</button>
            </div>
            <div>
              <img src={meme.randomImage} alt="url" className="meme-image"/>
            </div>
        </main>
    )
}