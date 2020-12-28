import React from "react";
import ReactDOM from "react-dom";

import PrimaryButton from "./components/Button";

const App = () => <PrimaryButton>Hello World</PrimaryButton>;

ReactDOM.render(<App />, document.querySelector("#root"));

// cmd + d select all tag
