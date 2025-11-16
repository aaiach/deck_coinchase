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
          <div className="future-problem-slide__label">Reality</div>
          <p className="future-problem-slide__text">
            Customers need chargebacks because e-commerce platforms fail them constantly.
          </p>
        </div>

        <div className="future-problem-slide__card">
          <div className="future-problem-slide__label">Problem</div>
          <p className="future-problem-slide__text">
            Merchants need protection if they're going to offer chargeback guarantees.
          </p>
        </div>

        <div className="future-problem-slide__card">
          <div className="future-problem-slide__label">Conflict</div>
          <p className="future-problem-slide__text">
            Agents operate with cryptocurrencies. No banks. No reversals. No safety net.
          </p>
        </div>
      </div>
    </Slide>
  )
}

export default FutureProblemSlide

