import React from 'react';

import HeaderContainer from '../components/HeaderContainer';

export default {
  title: 'Example/Header',
  component: HeaderContainer,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) => <HeaderContainer {...args} />;

export const Default = Template.bind({});

