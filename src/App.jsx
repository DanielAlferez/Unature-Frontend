import { useState } from 'react'
import NavBar from './HomeLayout/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Screens/Home'
import Explore from './Screens/Explore'
import CreatePost from './Components/Explorar/CreatePost'
import PostDetail from './Components/Explorar/PostDetail'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explorar" element={<Explore />} />
        <Route path="/explorar/crear-publicacion" element={<CreatePost />} />
        <Route path="/explorar/publicacion/:idPost" element={<PostDetail />} />

      </Routes>
    </BrowserRouter>
  
  )
}

export default App
