import React from "react";

import { Container, MainContent, Scroll } from "./styles";

import MenuItens from "../../components/MenuItems";
import FilterMenu from "../../components/FilterMenu";
import Cardpoke from "../../components/CardPoke";

const Home: React.FC = () => {
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
            {[...Array(18)].map((_, index) => (
              <li key={String(index)}>
                <Cardpoke />
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
