import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const aboutText = 'About me'.split('')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={aboutText}
              //   1.5 seconds delay
              idx={15}
            />
          </h1>
          <p>
            I'm a <mark>Self-Taught Developer</mark>, originally a
            graduated&nbsp;
            <mark>Agronomic Engineer</mark> with{' '}
            <mark>5 years Forensic Entomology PhD studies</mark>.
          </p>
          <p>
            I've been professionally occupying the post of{' '}
            <mark>Frontend Software Developer</mark> with{' '}
            <mark>VERMEG for Banking & Insurance</mark> for the past{' '}
            <mark>~3 yrs</mark>. Fell in love with the JavaScript ecosystem,
            which only amplified my geekiness & passion for learning.
          </p>
          <p align="LEFT">
            I'm looking for a Frontend position, and I'm open to learning and
            trying new technologies, even though I'm experienced in{' '}
            <mark>Angular</mark> and still love <mark>React</mark>.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
