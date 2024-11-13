import { useState } from 'react'
import './App.css'
import SideBar from './Components/SideBar'
import Header from './Components/Header'
import Footer from './Components/Footer'
import CreateContent from './Components/CreateContent'
import HomePage from './Components/HomePage'

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <>
      <div className='app-container'>
        <SideBar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className='header-footer'>
          <Header />
          {selectedTab === "Home" ? <HomePage /> : <CreateContent />}
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
