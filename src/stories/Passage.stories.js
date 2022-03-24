import Passage from "../components/Passage";

export default {
  title: "Passage",
  component: Passage,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Passage },
  template: `<Passage><span>text..</span></Passage>`,
});

export const Default = Template.bind({});
