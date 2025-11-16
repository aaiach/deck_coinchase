import React from 'react'
import './Text.css'

interface TextProps {
  variant: 'overline' | 'heading' | 'subheading' | 'body' | 'caption'
  children: React.ReactNode
  className?: string
}

const Text: React.FC<TextProps> = ({ variant, children, className = '' }) => {
  return (
    <div className={`text text--${variant} ${className}`}>
      {children}
    </div>
  )
}

export default Text

