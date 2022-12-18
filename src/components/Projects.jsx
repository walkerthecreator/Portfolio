import React from 'react'
import drumkit from '../assets/Drumkit.png'
import wabot from '../assets/Wabot.png'
import twitter from '../assets/twitter.png'
import blog from '../assets/blog.png'

const Project = ({title,code,photo}) => {
    return(
        <>
        <div className='project-card'>
            <div className='img-div'>
                <img src={photo} className='project-card-img'/>
            </div>
            <div className='project-card-data'>
                <h2>{title}</h2>
                <p>{code}</p>
            </div>
        </div>
        </>
    )
}

const Projects = () => {
  return (
    <div className='project-container'>
        <h1>Projects</h1>
        <div className='project-card-wrapper'>
            <Project title={"Ecommerce"} code={"HTML  CSS  REACT "} photo={wabot}/>
            <Project title={"Drum kit"} code={"HTML  CSS  JS"} photo={drumkit}/>
            <Project title={"Twitter Clone"} code={"HTML  CSS  REACT"} photo={twitter}/>
            <Project title={"Blogging Website"} code={"HTML  CSS  REACT"} photo={blog}/>
        </div>
    </div>
  )
}

export default Projects