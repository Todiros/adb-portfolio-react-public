import React from 'react'
import _MyPhoto from '../../res/home_face.svg'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div id='home-page-wrapper'>
      <section id='intro-wrapper'>
        <p id='welcome-msg'>Welcome!</p>
        <p id='short-intro'>Hey, it's Anthony D. Borr</p>
        <Link to={`/work`} id='home-page-work-button' className='page-link'>Work</Link>
      </section>
      <section id='landing-wrapper'>
        <img 
          src={_MyPhoto}
          alt='me'
          id='home-image'>
        </img>
      </section>
    </div>
  )
}

export default HomePage;