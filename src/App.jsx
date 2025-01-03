import React from 'react'
import './App.css'
import SideBar from './Components/SideBar'
import Header from './Components/Header'
import Footer from './Components/Footer'
import CreateContent from './Components/CreateContent'
import YourPost from './Components/YourPost'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductListStore from './Store/ProductListStore'
import Login from './Components/Login'
import Home from './Components/Home'

function App() {

  return (
    <BrowserRouter>
      <ProductListStore>
        <div className='app-container'>
          <SideBar />
          <div className='header-footer'>
            <Header />
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/yourpost' element={<YourPost />}></Route>
              <Route path="/CreateContent" element={<CreateContent />}></Route>
              <Route path="/Login" element={<Login />}></Route>
            </Routes>
            <Footer />
          </div>
        </div>
      </ProductListStore>
    </BrowserRouter>
  )
}

export default App
