import { useState } from 'react'
import './App.css'
import SideBar from './Components/SideBar'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {

  return (
    <>
      <div className='app-container'>
        <SideBar />
        <div className='header-footer'>
          <Header />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
