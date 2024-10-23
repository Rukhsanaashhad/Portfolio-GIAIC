import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Footer from './components/Footer'
import Contact from './components/Contact'

function App() {
  return (
    <div>
      <Navbar/>
      <Home />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
