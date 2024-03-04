import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Header from './components/Header'
import MemeForm from './components/MemeForm'
import SavedMemeList from './components/SavedMemeList'

function App() {

  const [allMemes, setAllMemes] = useState([])

  const [savedMemes, setSavedMemes] = useState([])

  console.log(savedMemes)

  function saveMeme(meme) {
    setSavedMemes(prev => [meme, ...prev])
  }

  function deleteMeme(memeId) {
    setSavedMemes(prevMemes => prevMemes.filter(meme => meme._id !== memeId))
  }

  function editMeme(memeId, update){
    setSavedMemes(prevMemes => prevMemes.map(meme => meme._id !== memeId ? meme : update))
  }

  useEffect(() => {
    axios.get("https://api.imgflip.com/get_memes")
      .then(res => setAllMemes(res.data.data.memes))
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      <Header isFooter={false}/>
      <MemeForm allMemes={allMemes} saveMeme={saveMeme} />
      <SavedMemeList
        savedMemes={savedMemes}
        deleteMeme={deleteMeme}
        editMeme={editMeme}
      />
      <Header isFooter={true}/>
    </>
  )
}

export default App
