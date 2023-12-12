import { useState } from 'react'
import NavBar from './HomeLayout/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Screens/Home'
import Explore from './Screens/Explore'
import CreatePost from './Components/Explorar/CreatePost'
import PostDetail from './Components/Explorar/PostDetail'
import AboutUS from './Screens/AboutUS'
import LogInScreen from './Components/auth/LogInScreen'
import ShowProfile from './Components/user/ShowProfile'
import Community from './Screens/Community'
import Register from './Components/auth/Register'
import RequireAuth from './Components/auth/RequireAuth'
import Admin from './Components/auth/Admin'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explorar" element={<Explore />} />
        <Route path="/explorar/crear-publicacion" element={<CreatePost />} />
        <Route path="/explorar/publicacion/:idPost" element={<PostDetail />} />
        <Route path="/nosotros" element={<AboutUS />} />
        <Route exact path='/comunidad' element={<Community/>}/>
        <Route exact path='/comunidad/ingresar' element={<LogInScreen/>}/>
        <Route exact path='/comunidad/registrarse' element={<Register/>}/>
        <Route exact path='/comunidad/perfil/:idProfile' element={<ShowProfile/>}/>
        <Route element={<RequireAuth/>}>
          <Route exact path='/admin' element={<Admin/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  
  )
}

export default App
