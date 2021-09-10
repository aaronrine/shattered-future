import { ComponentMeta, ComponentStory } from '@storybook/react'
import { HomePage } from '../pages/index'

export default {
  title: 'Pages/Home Page',
  component: HomePage,
} as ComponentMeta<typeof HomePage>

const Template: ComponentStory<typeof HomePage> = (args) => <HomePage {...args} />

export const Default = Template.bind({})
Default.args = {}
