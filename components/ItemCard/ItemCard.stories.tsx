import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ItemCard } from "./ItemCard";

export default {
  title: 'Components/Item Card',
  component: ItemCard,
} as ComponentMeta<typeof ItemCard>

const Template: ComponentStory<typeof ItemCard> = (args) => <ItemCard {...args} />

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  title: 'Item Card',
  img: 'https://via.placeholder.com/150'
}

export const Secondary = Template.bind({})
Secondary.args = {
  title: 'Item Card',
  img: 'https://via.placeholder.com/150'
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  title: 'Item Card',
  img: 'https://via.placeholder.com/150'
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  title: 'Item Card',
  img: 'https://via.placeholder.com/150'
}
