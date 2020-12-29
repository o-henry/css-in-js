import { addParameters, addDecorator } from "@storybook/react";
import { withContexts } from "@storybook/addon-contexts/react";
import { contexts } from "./contexts";

addParameters({
  backgrounds: {
    values: [
      { name: "Default theme", value: "#FFFFFF", default: true },
      { name: "Dark theme", value: "#050449" },
    ],
  },
});

addDecorator(withContexts(contexts));
