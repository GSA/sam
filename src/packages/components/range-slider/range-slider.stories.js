import { createRangeSlider } from "./range-slider";
export default {
  title: "Components/RangeSlider",
  argTypes: {
    label: { control: "text" },
    onClick: { action: "onClick" },
    type: {
      control: { type: "select" },
      options: ["", "secondary", "base", "unstyled", "accent-cool", "outline", "outline-inverse", "shadow", "white", "danger"],
    },
    size: {
      control: { type: "select" },
      options: ["", "big", "small"],
    },
    focusType: {
      control: { type: "select" },
      options: ["", "hover", "active", "focus", "disabled"],
    },
  },
};

const Template = ({ label, ...args }) => {
  return createRangeSlider({ label, ...args });
};

export const RangeSlider = Template.bind({});
RangeSlider.args = { label: "Default" };
