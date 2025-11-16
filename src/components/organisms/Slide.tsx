import React from 'react'
import CornerBrackets from '../atoms/CornerBrackets'
import './Slide.css'

interface SlideProps {
  children: React.ReactNode
  layout?: 'single' | 'split' | 'centered'
  background?: string
}

const Slide: React.FC<SlideProps> = ({ 
  children, 
  layout = 'single',
  background = 'var(--color-white)'
}) => {
  return (
    <div 
      className={`slide slide--${layout}`}
      style={{ background }}
    >
      <CornerBrackets />
      <div className="slide__content">
        {children}
      </div>
    </div>
  )
}

export default Slide

