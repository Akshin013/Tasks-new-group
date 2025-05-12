import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Main1 from './Main1'
import Main2 from './Main2'
import Main3 from './Main3'
import Main4 from './Main4'
import Main5 from './Main5'   
import Main6 from './Main6'
import Main7 from './Main7'
import Footer from './Footer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Main1/>
    <Main2/>
    <Main3/>
    <Main4/>
    <Main5/>
    <Main6/>
    <Main7/>
    <Footer/>
  </StrictMode>,
)
