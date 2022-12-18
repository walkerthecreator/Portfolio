import React from 'react'

const Footer = () => {
  return (
    <section  id='footer-section'>
    <div  id='contact-wrapper'>
        <div id='contact-intro'>
            <h1>Contact </h1>
            <p>i would love to hear about your projects
                and how i could help.Please message me 
                and i'll get back to you as soon as possible.
            </p>
        </div>
        <div data-aos="slide-up"  id='contact-data'>
            <form  action="https://formspree.io/f/xoqbgypy" method='POST'>
            <input type="name" placeholder='Name' name='name' required/>
            <input type="email" placeholder='Email' name='email' required/>
            <input type="text" placeholder='Message' name='message' required/>
            <button id='submit-btn'><u>SEND MESSAGE</u></button>
            </form>
        </div>
    </div>
    <hr />
    <div  id='footer-section-nav'>
    <p >Nitin</p>
        <ul>
            <li><a href="https://twitter.com/nitinjaswal26" target="_blank"><i class="fa-brands fa-square-twitter"></i> </a></li>
            <li><a href="https://github.com/walkerthecreator" target="_blank"><i class="fa-brands fa-github"></i></a></li>
            <li><a href="https://www.linkedin.com/in/nitin-jaswal-208952200/" target="_blank"><i class="fa-brands fa-linkedin"></i></a></li>
        </ul>
        </div>
        <button className='go-top'>
            <a href="#nav-container"><i class="fa-solid fa-arrow-up"></i></a>    
        </button>

    </section>
  )
}

export default Footer