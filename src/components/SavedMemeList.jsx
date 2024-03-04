import Meme from "./Meme";

function SavedMemeList({ savedMemes, deleteMeme, editMeme }) {

    const memeList = savedMemes.map(meme => {
        return (
            <Meme
                key={meme._id}
                {...meme}
                deleteMeme={deleteMeme}
                editMeme={editMeme}
            />
        )
    })

    return (
        <div className="saved-memes">
            <h1>Saved Memes!</h1>
            {memeList}
        </div>
    );
}

export default SavedMemeList;