import React from 'react'
import Badge from '../atoms/Badge'
import './BadgeGroup.css'

interface BadgeItem {
  text: string
  variant?: 'default' | 'blue'
}

interface BadgeGroupProps {
  badges: BadgeItem[]
}

const BadgeGroup: React.FC<BadgeGroupProps> = ({ badges }) => {
  return (
    <div className="badge-group">
      {badges.map((badge, index) => (
        <Badge key={index} variant={badge.variant}>
          {badge.text}
        </Badge>
      ))}
    </div>
  )
}

export default BadgeGroup

