import type { Meta, StoryObj } from "@storybook/react";

import UserForm from "./UserForm";
import { useReactHookForm } from "../../.storybook/decorators";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof UserForm> = {
  title: "Components/UserForm",
  component: UserForm,
  decorators: [useReactHookForm],
};

export default meta;
type Story = StoryObj<typeof UserForm>;

// export const Basic: Story = {
//   args: {
//     firstName: "Kay",
//     lastName: "Sarnasaurus",
//   },
// };
// export const Error: Story = {
//   args: {
//     firstName: "Kay",
//     lastName: "Sarnasaurus",
//     errorMessage: "Oops",
//   },
// };
export const Success: Story = {
  args: {
    successMessage: "Yay",
  },
};
