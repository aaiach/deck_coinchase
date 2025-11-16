import React from 'react'
import StatNumber from '../atoms/StatNumber'
import './StatsRow.css'

interface Stat {
  number: string
  description: string
}

interface StatsRowProps {
  stats: Stat[]
}

const StatsRow: React.FC<StatsRowProps> = ({ stats }) => {
  return (
    <div className="stats-row">
      {stats.map((stat, index) => (
        <div key={index} className="stats-row__item">
          <StatNumber number={stat.number} description={stat.description} />
        </div>
      ))}
    </div>
  )
}

export default StatsRow

