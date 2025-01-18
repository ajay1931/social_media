import React, { useContext, useEffect } from 'react'
import './App.css'
import SideBar from './Components/SideBar'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { useNavigate } from 'react-router-dom'
import { postListContext } from './Store/PostListStore'
import Login from './Components/Login'
import { Toaster } from 'react-hot-toast';
import Index from './Index'

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
      <div className='app-container'>
        <SideBar />
        <div className='header-footer'>
          <Header />
          {
            isLoggedIn ? (
              <Index />
            ) : (
              <Login />
            )
          }
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
