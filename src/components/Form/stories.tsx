import { Meta, Story } from '@storybook/react'

import Form from '.'

import { InputControlProps } from '../../interfaces/IInputProps'

import { Img } from '@chakra-ui/react'

const meta: Meta = {
  title: 'Form',
  component: Form
}

export default meta

const Template: Story<InputControlProps> = (args) => <Form {...args} />

export const Default = Template.bind({})

const rightIcon = <Img src={'/img/visibility-on.svg'} />

Default.args = {
  inputProps: {
    id: 'Label',
    placeholder: 'place holder',
    rightIcon
  },
  control: {
    label: 'label'
  }
}
