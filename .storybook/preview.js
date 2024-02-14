/** @type { import('@storybook/react').Preview } */
import "../src/index.css";
import { initialize, mswLoader } from "msw-storybook-addon";

// Initialize MSW
initialize();

// Configure Storybook to log the actions( onArchiveTask, onPinTask)
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  loaders: [mswLoader],
};

export default preview;
