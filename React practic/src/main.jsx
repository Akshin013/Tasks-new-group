import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './style.css'
import Navbar from './Navbar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
  </StrictMode>,
)
