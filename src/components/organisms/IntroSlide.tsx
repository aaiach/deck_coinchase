import React from 'react'
import Slide from './Slide'
import ContentBlock from '../molecules/ContentBlock'
import './IntroSlide.css'

const IntroSlide: React.FC = () => {
  return (
    <Slide layout="centered">
      <div className="intro-slide">
        <div className="intro-slide__logo">COINCHASE</div>
        <ContentBlock
          heading="Dispute management for agentic payments"
          subheading="The agentic layer between AI paymentagents, users, and merchants when online purchases go wrong."
          align="center"
        />
      </div>
    </Slide>
  )
}

export default IntroSlide

