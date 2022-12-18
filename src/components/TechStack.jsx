import React from 'react'

const Card = ({head,level}) =>  {
    return(
        <>
        <div id='tech-card'>
            <h1>{head}</h1>
            <p>{level}</p>
        </div>
        </>
    )
}

const TechStack = () => {
  return (
    <div data-aos="fade-up" id='tech-wrapper'>
    <h1>TechStack</h1>
        <div id='card-wrapper'>
            <Card head="HTML" level="Intermediate"/>
            <Card head="CSS" level="Intermediate"/>
            <Card head="JavaScript" level="Intermediate"/>
            <Card head="React" level="Basic"/>
            <Card head="Java" level="Intermediate"/>
            <Card head="Git" level="Basic"/>
        </div>  

    </div>

  )
}

export default TechStack