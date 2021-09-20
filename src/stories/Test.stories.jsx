import React from "react";
import { Test } from "./Test";

//👇 This default export determines where your story goes in the story list
export default {
  title: "Test Commponent",
  component: Test,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Test {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
  /*👇 The args you need here will depend on your component */
  text: "New text",
};
