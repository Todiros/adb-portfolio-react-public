import React from 'react'
import _MyPhoto from '../../res/home_face.svg'
import _MustacheGuy from '../../res/mustache_guy.svg'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div id='home-page-wrapper'>
      <section id='intro-wrapper'>
        <h2 id='welcome-msg'>
          Welcome! <img src={_MustacheGuy} alt='mustache guy' id='welcome-icon'/> 
        </h2>
        <p id='short-intro'>It's Tony here, the creator of ADB<span className="accent">Studios</span></p>
        <p id="role">
          and {'<'}<span className="code">Full Stack Developer</span>{'/>'}
        </p>
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