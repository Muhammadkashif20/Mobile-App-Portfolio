import React from 'react'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Portfolio from './Components/Portfolio'
import Services from './Components/Services'
const App = () => {
  return <>
  <Navbar/>
  <Home/>
  <About/>
  <Services/>
  <Portfolio/>
  <Contact/>
  </>
}

export default App