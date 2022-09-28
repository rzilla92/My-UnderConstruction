import { useState } from 'react'
import Projects from './components/Projects'
import ParticlesBg from 'particles-bg'
import './App.css'

function App() {
  return (
    <div className="App">
      <ParticlesBg className="particles" color="#1DB4E0" type="cobweb" bg={true}/>
      <h1>Under Construction</h1>
      <p className="read-the-docs">
        Check out some of my projects in the mean time!
      </p>
      <Projects />
    </div>
  )
}

export default App
