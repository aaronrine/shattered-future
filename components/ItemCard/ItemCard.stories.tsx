import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ItemCard } from "./ItemCard";

export default {
  title: 'Components/Item Card',
  component: ItemCard,
} as ComponentMeta<typeof ItemCard>

const Template: ComponentStory<typeof ItemCard> = (args) => <ItemCard {...args} />
const DefaultArgs = {
  title: 'Item Card',
  img: 'https://via.placeholder.com/150'
}

export const Descriptive = Template.bind({})
Descriptive.args = {
  ...DefaultArgs,
  desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores, ad nam. Saepe iure eligendi asperiores sed tempora nobis consequuntur quis, vitae labore tempore exercitationem totam modi autem temporibus quidem voluptatum.'
}

export const Primary = Template.bind({})
Primary.args = {
  ...DefaultArgs,
  primary: true
}

export const Secondary = Template.bind({})
Secondary.args = DefaultArgs

export const Large = Template.bind({})
Large.args = {
  ...DefaultArgs,
  size: 'large'
}

export const Small = Template.bind({})
Small.args = {
  ...DefaultArgs,
  size: 'small'
}
