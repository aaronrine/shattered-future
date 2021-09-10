import React from 'react'
import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import * as stories from './ItemCard.stories'
const ItemCard = composeStories(stories)

describe('Item Card Component', () => {
  const Component = ItemCard.Primary
  
  it('should have text', () => {
    render(<Component />)
    const title = Component.args!.title
    const text = screen.getByText(title)
    expect(text).toBeInTheDocument()
  })

  it('should have an image', () => {
    render(<Component />)
    const title = Component.args!.title
    const image = screen.getByAltText(title)
    expect(image).toBeInTheDocument()
  })
})
