import { Story, Meta } from '@storybook/react';

import { Button, ButtonProps } from '.';

export default {
  title: 'Molecules/Button',
  component: Button,
  argTypes: {
    label: {
      defaultValue: "Button",
      control: {
      type: 'text'
      }
    }
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args}/>;

export const Primary = Template.bind({});
Primary.args = {
};

export const Secondary = Template.bind({});
Secondary.args = {
  secondary: true,
};
