import React from 'react'
import Slide from './Slide'
import ContentBlock from '../molecules/ContentBlock'
import './FutureProblemSlide.css'

const FutureProblemSlide: React.FC = () => {
  return (
    <Slide layout="single">
      <ContentBlock
        overline="FUTURE PROBLEM"
        heading="Crypto payments need to support chargeback"
        subheading="Chargeback is a fundamental feature od online payments."
      />
      
      <div className="future-problem-slide__grid">
        <div className="future-problem-slide__card">
          <div className="future-problem-slide__label">Users</div>
          <p className="future-problem-slide__text">
            Users will write poor prompts that execute payments.
          </p>
        </div>

        <div className="future-problem-slide__card">
          <div className="future-problem-slide__label">Payment Agents</div>
          <p className="future-problem-slide__text">
            Agents will missinterpret user prompts, or execute the wrong orders.
          </p>
        </div>

        <div className="future-problem-slide__card">
          <div className="future-problem-slide__label">Conflict</div>
          <p className="future-problem-slide__text">
            Agents operate with cryptocurrencies. There is no native chargeback for crypto.
          </p>
        </div>
      </div>
    </Slide>
  )
}

export default FutureProblemSlide

