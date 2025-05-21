import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './Header.jsx'
import Main1  from './Main1.jsx'
import BurgerMenu from './BurgeMenu.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Main1 />
    
  </StrictMode>,
)
