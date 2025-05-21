import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import UsersMain from './UsersMain.jsx'
import axios from "axios";
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UsersMain/>
  </StrictMode>,
)
