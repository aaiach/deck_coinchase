import React from 'react'
import './CornerBrackets.css'

const CornerBrackets: React.FC = () => {
  return (
    <div className="corner-brackets">
      <svg className="corner-brackets__border" xmlns="http://www.w3.org/2000/svg">
        <rect 
          className="corner-brackets__rect"
          x="0" 
          y="0" 
          width="100%" 
          height="100%"
          fill="none"
          stroke="var(--color-gray-300)"
          strokeWidth="0.5"
        />
      </svg>
      <div className="corner-brackets__corner corner-brackets__corner--top-left"></div>
      <div className="corner-brackets__corner corner-brackets__corner--top-right"></div>
      <div className="corner-brackets__corner corner-brackets__corner--bottom-left"></div>
      <div className="corner-brackets__corner corner-brackets__corner--bottom-right"></div>
    </div>
  )
}

export default CornerBrackets

