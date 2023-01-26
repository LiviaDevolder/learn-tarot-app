import { Story, Meta } from '@storybook/react/types-6-0'

import Footer from '.'

const meta: Meta = {
  title: 'Footer',
  component: Footer
}

export default meta

const Template: Story = (args) => <Footer {...args} />

export const Primary = Template.bind({})

Primary.args = {}
