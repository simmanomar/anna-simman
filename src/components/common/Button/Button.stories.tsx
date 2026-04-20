import type { Meta, StoryObj } from '@storybook/react-vite'
import Button from './Button'

const meta: Meta<typeof Button> = {
    title: 'Common/Button',
    component: Button,
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
    args: {
        variant: 'primary',
        children: 'Button',
    },
}

export const Neutral: Story = {
    args: {
        variant: 'neutral',
        children: 'Button',
    },
}

export const Subtle: Story = {
    args: {
        variant: 'subtle',
        children: 'Button',
    },
}
