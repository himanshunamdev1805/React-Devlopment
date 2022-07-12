import React,{useState} from "react"
import memesData from "../memesData.js"

export default function Meme() {
    const [meme, setMeme] =useState(
{
        topText: "",
        bottomText: "",
        randomImage: "https://source.unsplash.com/user/c_v_r"
    })
    const [allMemeImages,setAllMemeImages] = useState(memesData)
    
   
    function getMemeImage() {
        console.log(allMemeImages.data.memes)
        const memesArray = allMemeImages.data.memes
        // console.log(memesArray)
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme=>({
             ...prevMeme,
            randomImage: url
            
        }))
    
    }
    function handleChange(event)
    {
        const {name,value}=event.target
        setMeme(prevMeme => ({
           
            ...prevMeme,
           
            [name]: value
       
       
       
        }
        
        )
        
        )
    }
    console.log(meme)
    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <img src={meme.randomImage} className="meme--image"/>
            <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </main>
    )
}