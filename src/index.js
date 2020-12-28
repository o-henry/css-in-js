import React from "react";
import ReactDOM from "react-dom";

import PrimaryButton, {
  SecondaryButton,
  TertiaryButton,
} from "./components/Button";

const App = () => (
  <>
    <PrimaryButton>Hello World</PrimaryButton>
    <SecondaryButton>Goodby World</SecondaryButton>
    <TertiaryButton>Hey World</TertiaryButton>
  </>
);

ReactDOM.render(<App />, document.querySelector("#root"));

// cmd + d select all tag
