import { Story, Meta } from '@storybook/react/types-6-0'

import Header from '.'

const meta: Meta = {
  title: 'Header',
  component: Header
}

export default meta

const Template: Story = (args) => <Header type={''} {...args} />

export const Primary = Template.bind({})

Primary.args = {
  type: 'logged'
}

export const Secondary = Template.bind({})

Secondary.args = {
  type: 'guest'
}

export const Tertiary = Template.bind({})

Tertiary.args = {
  type: 'none'
}
