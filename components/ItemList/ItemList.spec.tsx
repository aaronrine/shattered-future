import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { composeStories } from '@storybook/testing-react'
import * as stories from './ItemList.stories'
import { parseItems } from './ItemList'

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

describe('Parse Usable List', () => {
  const MOCK_ROUTER = { push: jest.fn() }
  const MOCK_DATA = [
    { id: 1, title: 'Item 1' },
    { id: 2, title: 'Item 2' },
    { id: 3, title: 'Item 3' },
  ]

  afterEach(() => {
    MOCK_ROUTER.push.mockReset()
  })

  it('should use the image given', () => {
    const MOCK_DATA_WITH_IMAGE = MOCK_DATA.map(item => {
      return {
        ...item,
        image: `test-image-${item.id}`
      }
    })
    
    // @ts-ignore
    const PARSED_DATA = parseItems(MOCK_DATA_WITH_IMAGE, MOCK_ROUTER)
    PARSED_DATA.forEach(({ id, image }) => {
      expect(image).toEqual(`test-image-${id}`)
    })
  })
  
  it('should use a default image placeholder if no image is given', () => {
    // @ts-ignore
    const PARSED_DATA = parseItems(MOCK_DATA, MOCK_ROUTER)
    PARSED_DATA.forEach(({ image }) => {
      expect(image).toEqual('https://via.placeholder.com/150')
    })
  })

  describe('onClick', () => {
    it('should push the router when given a path', () => {
      // @ts-ignore
      const PARSED_DATA = parseItems(MOCK_DATA, MOCK_ROUTER, '/path')
      PARSED_DATA.forEach(({ id, onClick }) => {
        onClick()
        expect(MOCK_ROUTER.push).toBeCalledWith(`/path/${id}`)
      })
    })

    it('should not push the router when path is undefined', () => {
      // @ts-ignore
      const PARSED_DATA = parseItems(MOCK_DATA, MOCK_ROUTER)
      PARSED_DATA.forEach(({ id, onClick }) => {
        onClick()
        expect(MOCK_ROUTER.push).not.toBeCalled()
      })
    })
  })
})
