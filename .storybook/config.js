import { configure } from "@storybook/react";

const req = require.context('../app/src', true, /.stories.tsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
