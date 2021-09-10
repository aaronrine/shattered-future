import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { composeStories } from '@storybook/testing-react'
import * as stories from './ItemList.stories'
import _ItemList from './ItemList'
const ItemList = composeStories(stories)



describe('Item List Component', () => {
  const Component = ItemList.Default
  const MOCK_DATA = ItemList.Default.args.items

  it('should render a list of item cards', () => {
    render(<Component />)
    MOCK_DATA.forEach(({ title }) => {
      const text = screen.getByText(title)
      expect(text).toBeInTheDocument()
    })
  })

  it('should naviage to item\'s page on click event', () => {
    render(<Component />)
    MOCK_DATA.forEach(({ title, onClick }) => {
      const item = screen.getByText(title)
      userEvent.click(item)
      expect(onClick).toBeCalledTimes(1)
    })
  })
})
