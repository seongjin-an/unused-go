import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';
import { Skeleton } from '../components/atoms/skeleton';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export

export default {
  title: 'Example/Skelton',
  component: Skeleton,
} as ComponentMeta<typeof Skeleton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = args => <Button {...args} />;
const SkeletonStory: ComponentStory<typeof Skeleton> = args => <Skeleton {...args} />;

export const Primary = SkeletonStory.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  width: 500,
  height: 500,
};
