import { useState } from "react";


function Meme(props) {

    const { topText, bottomText, imgUrl, deleteMeme, editMeme, _id } = props

    const [isEditing, setIsEditing] = useState(false)

    const [formData, setFormData] = useState({
        topText,
        bottomText,
        _id,
        imgUrl
    })

    function handleChange(e) {
        const { name, value } = e.target
        setFormData(prevData => {
            return {
                ...prevData,
                [name]: value
            }
        })
    }

    function handleToggle() {
        setIsEditing(prev => !prev)
    }

    function handleSubmit(e) {
        e.preventDefault()
        editMeme(_id, formData)
        handleToggle()
    }

    return (
        <div className="single-saved-meme">
            <div>

                <div className="meme" >
                    <img className="meme--image" src={imgUrl} />
                    <h3 className="meme--text top">{topText}</h3>
                    <h3 className="meme--text bottom">{bottomText}</h3>
                </div>
                <div className="saved-meme-button-container">
                    <button className="saved-meme-button" onClick={() => deleteMeme(_id)}>Delete</button>
                    <button className="saved-meme-button" onClick={handleToggle}>Edit</button>
                </div>
            </div>
            {
                isEditing &&
                <form onSubmit={handleSubmit} className="edit-form">
                    <input
                        name="topText"
                        value={formData.topText}
                        onChange={handleChange}
                    />
                    <input
                        name="bottomText"
                        value={formData.bottomText}
                        onChange={handleChange}
                    />
                    <button>Save Change</button>
                    <button onClick={handleToggle}>Cancel Change</button>
                </form>
            }
        </div>
    );
}

export default Meme;