import React from "react";

import { Container, MainContent } from "./styles";

import MenuItens from "../../components/MenuItems";
import FilterMenu from "../../components/FilterMenu";

const Home: React.FC = () => {
  return (
    <Container>
      <MenuItens />

      <MainContent />

      <FilterMenu />
    </Container>
  );
};

export default Home;
