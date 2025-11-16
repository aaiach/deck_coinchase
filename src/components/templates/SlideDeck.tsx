import React, { useState, useEffect } from 'react'
import IntroSlide from '../organisms/IntroSlide'
import CurrentProblemSlide from '../organisms/CurrentProblemSlide'
import FutureProblemSlide from '../organisms/FutureProblemSlide'
import SolutionOverviewSlide from '../organisms/SolutionOverviewSlide'
import OrderFlowSlide from '../organisms/OrderFlowSlide'
import DisputeFlowSlide from '../organisms/DisputeFlowSlide'
import './SlideDeck.css'

const SlideDeck: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = 6

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1)
    }
  }

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)
    }
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault()
        nextSlide()
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        prevSlide()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentSlide])

  const slides = [
    <IntroSlide key="intro" />,
    <CurrentProblemSlide key="current-problem" />,
    <FutureProblemSlide key="future-problem" />,
    <SolutionOverviewSlide key="solution-overview" />,
    <OrderFlowSlide key="order-flow" />,
    <DisputeFlowSlide key="dispute-flow" />
  ]

  return (
    <div className="slide-deck">
      <div 
        className="slide-deck__container"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="slide-deck__slide">
            {slide}
          </div>
        ))}
      </div>

      <div className="slide-deck__controls">
        <div className="slide-deck__indicators">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              className={`slide-deck__indicator ${
                index === currentSlide ? 'slide-deck__indicator--active' : ''
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="slide-deck__navigation">
          <button
            className="slide-deck__nav-button"
            onClick={prevSlide}
            disabled={currentSlide === 0}
            aria-label="Previous slide"
          >
            ←
          </button>
          <span className="slide-deck__counter">
            {currentSlide + 1} / {totalSlides}
          </span>
          <button
            className="slide-deck__nav-button"
            onClick={nextSlide}
            disabled={currentSlide === totalSlides - 1}
            aria-label="Next slide"
          >
            →
          </button>
        </div>
      </div>
    </div>
  )
}

export default SlideDeck

