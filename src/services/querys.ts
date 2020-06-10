import { gql } from "apollo-boost";
import { ModelPoke } from "../interfaces/pokemon";

export interface iGET_POKEMON_ARR {
  pokemons: ModelPoke.Pokemon[];
}

export const GET_POKEMON_ARR = gql`
  {
    pokemons(first: 151) {
      id
      name
      attacks {
        special {
          name
          type
          damage
        }
      }
      number
      image
      types
      maxCP
    }
  }
`;
