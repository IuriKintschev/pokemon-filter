import React from "react";
import { ModelPoke } from "../../interfaces/pokemon";
import { getColorByCP } from "../../utils/scripts";

import { Container, ImageDiv, ContentStatus } from "./styles";

interface Props {
  pokemon: ModelPoke.Pokemon;
}

const CardPoke: React.FC<Props> = ({ pokemon }) => {
  return (
    <Container>
      <div className="wrapperImgWithStatus">
        <ImageDiv imgUrl={pokemon.image} />

        <ContentStatus colorCp={getColorByCP(pokemon.maxCP)}>
          <header>
            <span>{pokemon.name}</span>
            <p>{pokemon.types.join(", ")}</p>
          </header>

          <div className="statusCP">
            <p>{pokemon.maxCP}</p>
          </div>
        </ContentStatus>
      </div>

      <p>{pokemon.number}</p>
    </Container>
  );
};

export default CardPoke;
