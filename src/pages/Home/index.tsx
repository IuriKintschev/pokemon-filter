import React from "react";

import { Container } from "./styles";
import { iGET_POKEMON_ARR } from "../../services/querys";

interface Props {
  data: iGET_POKEMON_ARR;
}

const Home: React.FC<Props> = ({ data }) => {
  return (
    <Container>
      <ul>
        {data?.pokemons.map((poke) => (
          <li key={poke.id}>{poke.name}</li>
        ))}
      </ul>
    </Container>
  );
};

export default Home;
