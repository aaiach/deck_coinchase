import React from 'react'
import Slide from './Slide'
import ContentBlock from '../molecules/ContentBlock'
import './SolutionOverviewSlide.css'

const SolutionOverviewSlide: React.FC = () => {
  return (
    <Slide layout="centered">
      <ContentBlock
        overline="THE SOLUTION"
        heading="An agentic dispute layer"
        subheading="AI-powered infrastructure that sits between agents, users, and merchants—managing disputes and issuing crypto-based chargebacks."
        align="center"
      />
    </Slide>
  )
}

export default SolutionOverviewSlide

