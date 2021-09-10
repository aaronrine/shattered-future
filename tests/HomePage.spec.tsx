import { render, screen, waitForElementToBeRemoved } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useRouter } from 'next/router'
import { composeStories } from '@storybook/testing-react'
import * as stories from '../stories/HomePage.stories'

const HomePage = composeStories(stories)

jest.mock('next/router', () => ({
  useRouter: jest.fn()
}))

describe('Home Page', () => {
  const Component = HomePage.Default
  const MOCK_DATA = Component.parameters.mockData[0].response

  it('should render a item list', async () => {
    render(<Component />)
    const loading = screen.queryByTestId('loading')
    await waitForElementToBeRemoved(loading)

    MOCK_DATA.forEach(({ title }) => {
      const text = screen.getByText(title)
      expect(text).toBeInTheDocument()
    })
  })

  it('should navigate when an item is clicked', async () => {
    const mockRouter = { push: jest.fn() }
    ;(useRouter as jest.Mock).mockReturnValue(mockRouter)

    render(<Component />)
    const loading = screen.queryByTestId('loading')
    await waitForElementToBeRemoved(loading)

    MOCK_DATA.forEach(({ id, title }) => {
      const text = screen.getByText(title)
      userEvent.click(text)
      expect(mockRouter.push).toHaveBeenCalledWith(`/show/${id}`)
    })
  })

  describe('Loading', () => {
    const Component = HomePage.Loading

    it('should render a loading screen', () => {
      render(<Component />)
      const loading = screen.getByTestId('loading')
      expect(loading).toBeInTheDocument()
    })
  })

  describe('Empty', () => {
    const Component = HomePage.Empty

    it('should display an empty item list', async () => {
      render(<Component />)
      const loading = screen.queryByTestId('loading')
      await waitForElementToBeRemoved(loading)

      MOCK_DATA.forEach(({ title }) => {
        const text = screen.queryByText(title)
        expect(text).not.toBeInTheDocument()
      })
    })
  })
})
