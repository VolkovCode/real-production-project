import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ListBox } from './ListBox';

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => <div style={{ padding: 100 }}><Story /></div>,
    ],
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const topLeft = Template.bind({});
topLeft.args = {
    direction: 'top left',
    items: [
        { content: 'фыввфывфывф123', value: '123' },
        { content: 'фыввфывфывфasdasd123', value: '1qwe23' },
        { content: 'фыввфывzxccvzxфывф123', value: '12123' },
    ],
};

export const Normal = Template.bind({});
Normal.args = {
    items: [
        { content: 'фыввфывфывф123', value: '123' },
        { content: 'фыввфывфывфasdasd123', value: '1qwe23' },
        { content: 'фыввфывzxccvzxфывф123', value: '12123' },
    ],
};

export const topRight = Template.bind({});
topRight.args = {
    direction: 'top right',
    value: '123',
    items: [
        { content: 'фыввфывфывф123', value: '123' },
        { content: 'фыввфывфывфasdasd123', value: '1qwe23' },
        { content: 'фыввфывzxccvzxфывф123', value: '12123' },
    ],
};

export const bottomLeft = Template.bind({});
bottomLeft.args = {
    direction: 'bottom left',
    value: '123',
    items: [
        { content: 'фыввфывфывф123', value: '123' },
        { content: 'фыввфывфывфasdasd123', value: '1qwe23' },
        { content: 'фыввфывzxccvzxфывф123', value: '12123' },
    ],
};

export const bottomRight = Template.bind({});
bottomRight.args = {
    direction: 'bottom right',
    value: '123',
    items: [
        { content: 'фыввфывфывф123', value: '123' },
        { content: 'фыввфывфывфasdasd123', value: '1qwe23' },
        { content: 'фыввфывzxccvzxфывф123', value: '12123' },
    ],
};
