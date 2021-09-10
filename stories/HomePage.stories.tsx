import { ComponentMeta, ComponentStory } from '@storybook/react'
import withMock from 'storybook-addon-mock'
import { SWRConfig } from 'swr'
import { HomePage } from '../pages/index'

export default {
  title: 'Pages/Home Page',
  component: HomePage,
  decorators: [withMock]
} as ComponentMeta<typeof HomePage>

const Template: ComponentStory<typeof HomePage> = (args) => (
  <SWRConfig value={{ provider: () => new Map() }} >
    <HomePage {...args} />
  </SWRConfig>
)

export const Default = Template.bind({})
Default.parameters = {
  mockData: [{
    url: '/api/shows',
    response: [
      { id: 1, title: 'Show 1' },
      { id: 2, title: 'Show 2' },
      { id: 3, title: 'Show 3' },
    ]
  }]
}

export const Loading = Template.bind({})
Loading.parameters = {
  mockData: [{
    url: '/api/shows',
    response: undefined
  }]
}

export const Empty = Template.bind({})
Empty.parameters = {
  mockData: [{
    url: '/api/shows',
    response: []
  }]
}
