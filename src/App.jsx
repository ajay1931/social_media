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
              </Routes>
              <Footer />
            </div>
            <Toaster />
          </div>
        ) : (
          <Login />
        )
      }
    </>
  )
}

export default App
