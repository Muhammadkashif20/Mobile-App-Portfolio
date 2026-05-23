import React from 'react'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
const App = () => {
  return <>
  {/* <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/portfolio' element={<Portfolio />} />
      <Route path='/services' element={<Services />} />
    </Routes>
  </BrowserRouter> */}
  <Navbar/>
  <Home/>
  <About/>
  <Contact/>
  <Portfolio/>
  <Services/>
  </>
}

export default App