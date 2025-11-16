import React from 'react'
import Slide from './Slide'
import ContentBlock from '../molecules/ContentBlock'
import StatNumber from '../atoms/StatNumber'
import './CurrentProblemSlide.css'

const CurrentProblemSlide: React.FC = () => {
  return (
    <Slide layout="single">
      <ContentBlock
        overline="CURRENT PROBLEM"
        heading="$130B Problem"
        subheading="Friendly fraud costs online merchants $130B annually."
      />
      
      <div className="current-problem-slide__question">
        <ul className="current-problem-slide__list">
          <li>AI agents will introduce more opportunities for fraud.</li>
          <li>Chargeback must be implemented for frictionless adoption of agentic payments.</li>
          <li>Merchants will want more protection against fraudulant chargebacks.</li>
        </ul>
       
      </div>
    </Slide>
  )
}

export default CurrentProblemSlide

