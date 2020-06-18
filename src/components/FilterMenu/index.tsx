import React from "react";
import InputRange, { Range } from "react-input-range";
import Checkbox from "../../components/Chekbox";
import shallow from "zustand/shallow";
import { usePokeState } from "../../store/Pokemon";

import {
  Container,
  RangeContainer,
  BoxRangeValue,
  ContentCheck,
} from "./styles";

const FilterMenu: React.FC = () => {
  const [filters, minCp, maxCp, setCpValue] = usePokeState(
    (state) => [state.filters, state.minCp, state.maxCp, state.setCpValue],
    shallow
  );

  return (
    <Container>
      <RangeContainer>
        <h1 className="title">Filtro</h1>
        <p className="cplabel">maxCP</p>

        <InputRange
        // o que acontece a API retornar algum pokemon que tenha mais que 3904 de MaxCP? Não vai funcionar corretamente o filtro
        // poderias passar esse valor como param, poderias dar um orderBy(maxCP) e pegar o primeiro elemento (anyway, tem várias abordagens) 
          maxValue={3904}
          minValue={0}
          value={{ max: maxCp, min: minCp }}
          onChange={(value: number | Range) => setCpValue(value)}
        />

        <BoxRangeValue>
          <div>
            <p>{minCp}</p>
          </div>

          <div>
            <p>{maxCp}</p>
          </div>
        </BoxRangeValue>
      </RangeContainer>

      <ContentCheck>
        <p className="labelTypes">Types</p>

        <div className="checks">
          <ul className="checkUl">
            {filters.map((item, index) => (
              <li key={String(item.id)}>
                <Checkbox filter={item} index={index} />
              </li>
            ))}
          </ul>
        </div>
      </ContentCheck>
    </Container>
  );
};

export default FilterMenu;
