import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react'

import {MatchGraph} from "../components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: 'Example/MatchGraph',
    component: MatchGraph,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
} as Meta<typeof MatchGraph>;
export default meta

type Story = StoryObj<typeof MatchGraph>


export const Border: Story = {
    args: {
        name: 'border',
        value: '1px solid red'
    },
}

export const LinearGradient: Story = {
    args: {
        name: 'linear-gradient()',
        value: 'red, blue'
    }
}

export const BorderRadius: Story = {
    args: {
        name: 'border-radius'
    }
}

export const Width: Story = {
    args: {
        name: 'width'
    }
}

export const WidthFit: Story = {
    args: {
        name: 'width',
        value: 'fit-content(30px)'
    }
}
