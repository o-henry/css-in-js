import styled from "styled-components";
import { defaultTheme, typeScale } from "../utils";

// Default (shared) Button
// We'll inherit other button by this
const Button = styled.button`
  padding: 12px 24px;
  font-size: ${typeScale};
  border-radius: 2px;
  min-width: 100px;
  cursor: pointer;
  font-family: "Roboto Mono", monospace;
  background-color: white;
`;

const PrimaryButton = styled(Button)`
  background-color: ${defaultTheme.primaryColor};
  border: none;
  color: white;
  padding: 12px 24px;
  font-size: 1rem;
`;

export const SecondaryButton = styled(Button)`
  border: 2px solid ${defaultTheme.primaryColor};
  color: ${defaultTheme.primaryColor};
`;

export const TertiaryButton = styled(Button)`
  border: 2px solid transparent;
  color: ${defaultTheme.primaryColor};
`;

export default PrimaryButton;
