import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './Header'
import Main1 from './Main1'
import Main2 from './Main2'
import Main3 from './Main3'
import Main4 from './Main4'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Main1/>
    <Main2/>
    <Main3/>
    <Main4/>
  </StrictMode>,
)
