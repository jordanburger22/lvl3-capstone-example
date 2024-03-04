import { useState } from "react";
import { v4 as uuidv4 } from 'uuid'


function MemeForm({ allMemes, saveMeme }) {

    const [formData, setFormData] = useState({
        topText: '',
        bottomText: '',
        imgUrl: 'https://i.imgflip.com/30b1gx.jpg',
        _id: uuidv4()
    })
    console.log(formData)
    function handleChange(e) {
        const { name, value } = e.target
        setFormData(prevData => {
            return {
                ...prevData,
                [name]: value
            }
        })
    }

    function getRandomImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        setFormData(prevData => {
            return {
                ...prevData,
                imgUrl: allMemes[randomNumber].url
            }
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        setFormData(prevData => {
            return{
                ...prevData,
                _id: uuidv4()
            }
        })
        saveMeme(formData)
        setFormData(prevData => {
            return {
                ...prevData,
                topText: '',
                bottomText: ''
            }
        })
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="form">
                <input
                    name="topText"
                    value={formData.topText}
                    placeholder="Top Text"
                    onChange={handleChange}
                    className="form--input"
                />
                <input
                    name="bottomText"
                    value={formData.bottomText}
                    placeholder="Bottom Text"
                    onChange={handleChange}
                    className="form--input"
                />

                <button className="form--button">Save your Meme!</button>
            </form>
            <div className="meme-container">
                <button className="form--button" onClick={getRandomImage}>Get New Meme Image!</button>
                <div className="meme" >
                    <img className="meme--image" src={formData.imgUrl} />
                    <h3 className="meme--text top">{formData.topText}</h3>
                    <h3 className="meme--text bottom">{formData.bottomText}</h3>
                </div>
            </div>
        </>
    );
}

export default MemeForm;