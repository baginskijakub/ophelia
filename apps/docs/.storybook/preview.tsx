import type { Preview } from "@storybook/react";
import "@ophelia/ui/styles.css";
import React from "react";

export const decorators = [
  (Story) => {
    document.documentElement.setAttribute("data-theme", "light");

    return <React.Fragment>{Story()}</React.Fragment>;
  },
];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
