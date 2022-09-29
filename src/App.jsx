import { useState } from 'react'
import Projects from './components/Projects'
import ParticlesBg from 'particles-bg'
import './App.css'
import { FaGithub, FaFileAlt } from "react-icons/fa"

function App() {
  return (
    <div className="App">
      <div className="particles">
        <ParticlesBg color="#1DB4E0" type="cobweb" bg={true}/>
      </div>
      <h1>Under Construction</h1>
      <p className="read-the-docs">
        View my <br />
         <div className='viewmy'>
          <a href='https://drive.google.com/file/d/1i0Csl3zy_7wAx6X463IYWuqK1sCKasCZ/view?usp=sharing'> <button><FaFileAlt className='icon'/>CV</button> </a>
          <a href='https://github.com/rzilla92'> <button><FaGithub className='icon' />Github</button> </a>
         </div>
        Or check out some of my projects in the mean time!
      </p>
      <Projects />
    </div>
  )
}

export default App
