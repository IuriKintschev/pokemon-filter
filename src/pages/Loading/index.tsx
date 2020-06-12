import React from "react";
import logoPoke from "../../assets/pokemon.svg";

import { Container } from "./styles";

const Loading: React.FC = () => {
  return (
    <Container>
      <div className="contentImg">
        <img src={logoPoke} alt="pokebola" />
      </div>
    </Container>
  );
};

export default Loading;
