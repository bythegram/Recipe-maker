import React from 'react';

import FooterContainer from '../components/FooterContainer';

export default {
  title: 'Example/Footer',
  component: FooterContainer,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) => <FooterContainer {...args} />;

export const Default = Template.bind({});

