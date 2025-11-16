import React from 'react'
import './StatNumber.css'

interface StatNumberProps {
  number: string
  description: string
}

const StatNumber: React.FC<StatNumberProps> = ({ number, description }) => {
  return (
    <div className="stat-number">
      <div className="stat-number__value">{number}</div>
      <div className="stat-number__description">{description}</div>
    </div>
  )
}

export default StatNumber

