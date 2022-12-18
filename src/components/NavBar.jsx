import React from 'react'
import { useState } from 'react'

import resume from '../assets/resume.pdf'
const NavBar = () => {
    const [side,setSide] = useState(false)

    const clickHandler = () => {
        setSide(!(side))
    }

  return (
    <div id='nav-container'>
    <div id='nav-wrapper'>
        <p>Nitin</p>
        <ul>
            <li><a href="https://twitter.com/nitinjaswal26" target="_blank"><i class="fa-brands fa-square-twitter"></i> </a></li>
            <li><a href="https://github.com/walkerthecreator" target="_blank"><i class="fa-brands fa-github"></i></a></li>
            <li><a href="https://www.linkedin.com/in/nitin-jaswal-208952200/" target="_blank"><i class="fa-brands fa-linkedin"></i></a></li>
            <li><button  ><a href={resume} > <i class="fa-regular fa-file"></i> resume</a></button></li>
        </ul>
        <button onClick={clickHandler}><i class="fa-solid fa-bars"></i></button>

        { side && 
            <div  className='aside' >
                <li><a href="https://twitter.com/nitinjaswal26" target="_blank"><i class="fa-brands fa-square-twitter"></i> Twitter</a></li>
                <li><a href="https://github.com/walkerthecreator" target="_blank"><i class="fa-brands fa-github"></i> Github</a></li>
                <li><a href="https://www.linkedin.com/in/nitin-jaswal-208952200/" target="_blank"><i class="fa-brands fa-linkedin"></i> LinkedIn</a></li>
                <li><a href={resume} > <i class="fa-regular fa-file"></i> Resume</a></li>
                <button onClick={clickHandler}><i class="fa-solid fa-xmark"></i> </button>
            </div>
        }

    </div>
    <section  id='intro-section'>
        <div id='intro-wrapper'>
            <h1>Nice to meet you! I'm <u>Nitin Jaswal</u>.</h1>
            <p data-aos="fade-right">Based in India.I'm a <span>Front-end developer</span> who is
            passionate about building things for the web. i create web apps that user loves.
        </p>
        <button><a href="#footer-section"><u>CONTACT ME</u></a></button>
        </div>
        
        <div id='img-wrapper'>

        </div>
        <div>
            <p className='go-down'>
                <i class="fa-solid fa-arrow-down-long"></i>
            </p>
        </div>
    </section>
    </div>
  )
}

export default NavBar