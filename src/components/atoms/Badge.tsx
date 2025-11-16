import React from 'react'
import './Badge.css'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'blue'
}

const Badge: React.FC<BadgeProps> = ({ children, variant = 'default' }) => {
  return (
    <div className={`badge badge--${variant}`}>
      {children}
    </div>
  )
}

export default Badge

