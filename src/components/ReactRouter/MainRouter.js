import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Service from './pages/Service'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import {Routes,Route} from 'react-router-dom'


const MainRouter = () => {
  return (
    <div>
        <Routes>
        <Route path ='/' element={<Home />}/>
        <Route path ='about' element={<About />}/>
        <Route path ='contact' element={<Contact />}/>
        <Route path ='service' element={<Service />}/>
        <Route path ='*' element={<NotFound />}/>
        </Routes>
    </div>
  )
}

export default MainRouter