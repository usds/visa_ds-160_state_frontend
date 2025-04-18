import type { Meta, StoryObj } from "@storybook/react";

import AppHeaderSimple from "../../components/AppHeaderSimple";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof AppHeaderSimple> = {
  component: AppHeaderSimple,
};

export default meta;
type Story = StoryObj<typeof AppHeaderSimple>;

export const JustOurLilHeader: Story = {
  args: {
    //👇 The args you need here will depend on your component
  },
};
