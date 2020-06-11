import React from "react";
import { ModelPoke } from "../../interfaces/pokemon";

import { Container, ImageDiv, ContentStatus } from "./styles";

interface Props {
  pokemon: ModelPoke.Pokemon;
}

const CardPoke: React.FC<Props> = ({ pokemon }) => {
  return (
    <Container>
      <div className="wrapperImgWithStatus">
        <ImageDiv imgUrl={pokemon.image} />

        <ContentStatus>
          <header>
            <span>{pokemon.name}</span>
            <p>{pokemon.types.join(", ")}</p>
          </header>

          <div className="statusCP">
            <p>{pokemon.maxCP}</p>
          </div>
        </ContentStatus>
      </div>

      <p>001</p>
    </Container>
  );
};

export default CardPoke;
