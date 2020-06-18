import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";

import { iGET_POKEMON_ARR } from "../services/querys";
import Home from "../pages/Home";

describe("Test for Home page", () => {
  it('should return "Bulbasaur" text', () => {

    // mok
    const data = {
      pokemons: [
        {
          id: "ewrwerfas",
          name: "Bulbasaur",
        },
      ],
    } as iGET_POKEMON_ARR;
    // Home não espera receber um data como props, esse teste funciona?
    const { getByText } = render(<Home data={data} />);
    const linkElement = getByText(/Bulbasaur/i);
    expect(linkElement).toBeInTheDocument();
  });
});
