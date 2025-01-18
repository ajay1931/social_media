import React, { useContext, useEffect } from 'react'
import './App.css'
import SideBar from './Components/SideBar'
import Header from './Components/Header'
import Footer from './Components/Footer'
import CreatePost from './Components/CreatePost'
import YourPost from './Components/YourPost'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { postListContext } from './Store/PostListStore'
import Login from './Components/Login'
import Home from './Components/Home'
import { Toaster } from 'react-hot-toast';
import Profile from './Components/Profile'
import Settings from './Components/Settings'
import About from './Components/About'
import Post from './Components/Post'

function App() {
  const { isLoggedIn } = useContext(postListContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/Login')
    }
  }, [isLoggedIn, navigate]);

  return (
    <>
      <Toaster />
      {
        isLoggedIn ? (
          <div className='app-container'>
            <SideBar />
            <div className='header-footer'>
              <Header />
              <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/yourpost' element={<YourPost />}></Route>
                <Route path="/CreatePost" element={<CreatePost />}></Route>
                <Route path="/Login" element={<Login />}></Route>
                <Route path="/profile" element={<Profile />}></Route>
                <Route path="/settings" element={<Settings />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/post/:id" element={<Post />}></Route>
              </Routes>
              <Footer />
            </div>
          </div>
        ) : (
          <Login />
        )
      }
    </>
  )
}

export default App
