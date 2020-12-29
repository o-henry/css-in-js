import React from "react";
import ReactDOM from "react-dom";

import PrimaryButton, {
  SecondaryButton,
  TertiaryButton,
} from "./components/Button";
import { GlobalStyle } from "./utils";

const App = () => (
  <>
    <PrimaryButton>Hello World</PrimaryButton>
    <SecondaryButton>Goodby World</SecondaryButton>
    <TertiaryButton>Hey World</TertiaryButton>
    <GlobalStyle />
  </>
);

ReactDOM.render(<App />, document.querySelector("#root"));

// cmd + d select all tag
