import { ButtonProps } from '@chakra-ui/react'
import { Story, Meta } from '@storybook/react/types-6-0'

import Button from '.'

const meta: Meta = {
  title: 'Button',
  component: Button
}

export default meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Primary = Template.bind({})

Primary.args = {
  children: 'Continuar',
  variant: 'primary'
}

export const Secondary = Template.bind({})

Secondary.args = {
  children: 'Continuar',
  variant: 'secondary'
}
