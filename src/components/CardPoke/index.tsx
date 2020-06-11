import React from "react";

import { Container, ImageDiv, ContentStatus } from "./styles";

const CardPoke: React.FC = () => {
  return (
    <Container>
      <div className="wrapperImgWithStatus">
        <ImageDiv imgUrl="https://img.pokemondb.net/artwork/bulbasaur.jpg" />

        <ContentStatus>
          <header>
            <span>Bulbasaur</span>
            <p>Grass, Poison</p>
          </header>

          <div className="statusCP">
            <p>951</p>
          </div>
        </ContentStatus>
      </div>

      <p>001</p>
    </Container>
  );
};

export default CardPoke;
