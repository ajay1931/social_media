import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import PostListStore  from './Store/PostListStore'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <PostListStore>
        <App />
      </PostListStore>
    </BrowserRouter>
  </StrictMode>,
)
