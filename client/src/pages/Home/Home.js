import React from 'react'
import {useTheme} from '../../context/ThemeContext';
import './home.css';
import Fade from 'react-reveal/Fade';
import Resume from '../../assets/doc/Resume.pdf'
import Typewriter from 'typewriter-effect';
import {BsFillMoonStarsFill,BsFillSunFill} from 'react-icons/bs'
export default function Home() {
  const [theme,setTheme] = useTheme();
  //handle Theme
  const handleTheme = () =>{
    setTheme((prevState)=> (prevState == 'light' ? 'dark' : 'light'))
  }
  return (
    <>
      <div className="container-fluid home-container" id='home'>
      <div className="theme-btn" onClick={handleTheme}>
        {theme == 'light' ? (<BsFillMoonStarsFill size={20}/>) :(<BsFillSunFill size={20}/>)}
      </div>
        <div className="container home-content">
        <Fade right>
          <h2>Hi 👋 I'm a</h2>
          <h1>
          <Typewriter
             options={{
                 strings: ['FullStack Developer !', 
                 'Mern Developer !',
                 "React native Developer !"],
                  autoStart: true,
                  loop: true,
          }}
          />
          </h1>
          </Fade>
          <Fade bottom>
          <div className="home-buttons">
          <a className='btn btn-hire' href="https://api.whatsapp.com/send?phone=7052575272"
          rel='noreferrer'
          target='_blank'
          >
          Hire Me</a>
            <a className='btn btn-cv' href={Resume} download="ManishResume.pdf">My Resume</a>
          </div>
          </Fade>
        </div>
      </div>
    </>
  )
}
