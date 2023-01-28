import { Meta, Story } from '@storybook/react'

import { Input } from '.'

import { InputProps } from '../../interfaces/IInputProps'

import { Img } from '@chakra-ui/react'

const meta: Meta = {
  title: 'Input',
  component: Input
}

export default meta

const Template: Story<InputProps> = (args) => <Input {...args} />

export const Default = Template.bind({})

const rightIcon = <Img src={'/img/visibility-on.svg'} />

Default.args = {}

export const InputIcon = Template.bind({})

InputIcon.args = {
  rightIcon
}
