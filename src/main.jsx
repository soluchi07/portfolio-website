import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/css/index.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Layout from './pages/Layout.jsx'
import Home from './pages/Home.jsx' 
import Projects  from './pages/Projects.jsx' 
import Research from './pages/Research.jsx' 
import Thoughts from './pages/Thoughts.jsx' 
import About from './pages/About.jsx'
import NotFound from './pages/NotFound.jsx'
import ThoughtDetails from './pages/ThoughtDetails.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/research' element={<Research/>}/>
            <Route path='/thoughts' element={<Thoughts/>}/>
            <Route path='/thoughts/:id' element={<ThoughtDetails/>}/>
          </Route>
          <Route path='/*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
