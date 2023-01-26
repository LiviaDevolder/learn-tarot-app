import { Meta, Story } from '@storybook/react/types-6-0'
import { IHeader, Type } from 'interfaces/IHeader'

import Header from '.'

const meta: Meta = {
  title: 'Header',
  component: Header
}

export default meta

const Template: Story<IHeader> = (args) => <Header {...args} />

export const Primary = Template.bind({})

Primary.args = {
  type: Type.logged
}

export const Secondary = Template.bind({})

Secondary.args = {
  type: Type.guest
}

export const Tertiary = Template.bind({})

Tertiary.args = {
  type: Type.none
}
