import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ItemList } from "./ItemList";

export default {
  title: 'Components/Item List',
  component: ItemList,
} as ComponentMeta<typeof ItemList>

const IMG = 'https://via.placeholder.com/150'
let MOCK_DATA = [
  { id: 1, title: 'Item 1', image: IMG },
  { id: 2, title: 'Item 2', image: IMG },
  { id: 3, title: 'Item 3', image: IMG },
  { id: 4, title: 'Item 4', image: IMG },
]

if (jest) MOCK_DATA = MOCK_DATA.map(data => {
  return {
    ...data,
    onClick: jest.fn()
  }
})

const Template: ComponentStory<typeof ItemList> = (args) => <ItemList {...args} />

export const Default = Template.bind({})
Default.args = {
  items: MOCK_DATA
}

export const Horizontal = Template.bind({})
Horizontal.args = {
  items: MOCK_DATA,
  layout: 'horizontal'
}

export const Vertical = Template.bind({})
Vertical.args = {
  items: MOCK_DATA,
  layout: 'vertical'
}
