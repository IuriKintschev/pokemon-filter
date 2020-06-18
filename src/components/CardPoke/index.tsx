import React from "react";
import { ModelPoke } from "../../interfaces/pokemon";
import { getColorByCP } from "../../utils/scripts";

import { Container, ImageDiv, ContentStatus } from "./styles";

interface Props {
  pokemon: ModelPoke.Pokemon;
}

const CardPoke: React.FC<Props> = ({ pokemon: {maxCP, name, types, image, number} }) => {
  return (
    <Container>
      <div className="wrapperImgWithStatus">
        <ImageDiv imgUrl={image} />

        <ContentStatus colorCp={getColorByCP(maxCP)}>
          <header>
            <span>{name}</span>
            <p>{types.join(", ")}</p>
          </header>

          <div className="statusCP">
            <p>{maxCP}</p>
          </div>
        </ContentStatus>
      </div>

      <p>{number}</p>
    </Container>
  );
};

export default CardPoke;
