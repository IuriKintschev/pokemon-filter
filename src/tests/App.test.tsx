import React from "react";
import "@testing-library/jest-dom/extend-expect";

import { render } from "@testing-library/react";
import App from "../App";

describe("Teste front end app", () => {
  test("teste render app", () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/Hello Wolrd/i);
    expect(linkElement).toBeInTheDocument();
  });
});
