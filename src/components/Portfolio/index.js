import React, { useState, useEffect } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import portfolioData from '../../data/portfolio.json'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  const renderPortfolio = (portfolioArray) => {
    return (
      <div className="images-container">
        {portfolioArray.map((port, index) => {
          return (
            <div key={index} className="image-box">
              <img
                className="portfolio-image"
                src={port.cover}
                alt={port.title + index}
              />
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <>
      <div className="container portfolio-page">
        {/* title  */}
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'Portfolio'.split('')}
            idx={15}
          />
        </h1>
        {/* content  */}
        <div>{renderPortfolio(portfolioData.portfolio)}</div>
      </div>
      {/* loader  */}
      <Loader type="pacman" />
    </>
  )
}

export default Portfolio
