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
  <Navbar/>
  <Home/>
  <About/>
  <Services/>
  <Portfolio/>
  <Contact/>
  </>
}

export default App