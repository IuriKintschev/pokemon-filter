import React from "react";
import { usePokeState } from "../../store/Pokemon";

import { Container, MainContent, Scroll } from "./styles";

import MenuItens from "../../components/MenuItems";
import FilterMenu from "../../components/FilterMenu";
import Cardpoke from "../../components/CardPoke";

const Home: React.FC = () => {
  const dataState = usePokeState((state) => state.data);

  return (
    <Container>
      <MenuItens />

      <MainContent>
        <header>
          <h1 className="title">Lista de pokémons</h1>
          <p className="subtitle">Total visíveis: ***</p>
        </header>

        <Scroll>
          <ul className="gridPoke">
            {dataState?.pokemons.map((poke) => (
              <li key={poke.id}>
                <Cardpoke pokemon={poke} />
              </li>
            ))}
          </ul>
        </Scroll>
      </MainContent>
      <FilterMenu />
    </Container>
  );
};

export default Home;
