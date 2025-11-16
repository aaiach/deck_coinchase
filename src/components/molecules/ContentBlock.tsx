import React from 'react'
import Text from '../atoms/Text'
import './ContentBlock.css'

interface ContentBlockProps {
  overline?: string
  heading: string
  subheading?: string
  body?: string
  align?: 'left' | 'center'
}

const ContentBlock: React.FC<ContentBlockProps> = ({
  overline,
  heading,
  subheading,
  body,
  align = 'left'
}) => {
  return (
    <div className={`content-block content-block--${align}`}>
      {overline && <Text variant="overline">{overline}</Text>}
      <Text variant="heading">{heading}</Text>
      {subheading && <Text variant="subheading">{subheading}</Text>}
      {body && <Text variant="body">{body}</Text>}
    </div>
  )
}

export default ContentBlock

