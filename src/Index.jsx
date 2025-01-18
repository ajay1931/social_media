import React from 'react'
import CreatePost from './Components/CreatePost'
import YourPost from './Components/YourPost'
import { Routes, Route } from 'react-router-dom'
import Login from './Components/Login'
import Home from './Components/Home'
import Profile from './Components/Profile'
import Settings from './Components/Settings'
import About from './Components/About'
import Post from './Components/Post'

const Index = () => {
    return (
        <div>
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
        </div>
    )
}

export default Index
