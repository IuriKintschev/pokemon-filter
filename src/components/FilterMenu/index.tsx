import React, { useState } from "react";
import InputRange from "react-input-range";
import Checkbox from "../../components/Chekbox";
import shallow from "zustand/shallow";
import { usePokeState } from "../../store/Pokemon";

import {
  Container,
  RangeContainer,
  BoxRangeValue,
  ContentCheck,
} from "./styles";

interface ValueRange {
  min: number;
  max: number;
}

const FilterMenu: React.FC = () => {
  const [filters, minCp, maxCp] = usePokeState(
    (state) => [state.filters, state.minCp, state.maxCp],
    shallow
  );

  const [range, setRange] = useState<ValueRange>({ min: minCp, max: maxCp });

  return (
    <Container>
      <RangeContainer>
        <h1 className="title">Filtro</h1>
        <p className="cplabel">maxCP</p>

        <InputRange
          maxValue={3904}
          minValue={0}
          value={range}
          onChange={(value) => setRange(value as ValueRange)}
        />

        <BoxRangeValue>
          <div>
            <p>{range.min}</p>
          </div>

          <div>
            <p>{range.max}</p>
          </div>
        </BoxRangeValue>
      </RangeContainer>

      <ContentCheck>
        <p className="labelTypes">Types</p>

        <div className="checks">
          <ul className="checkUl">
            {filters.map((item) => (
              <li key={String(item.id)}>
                <Checkbox filter={item} />
              </li>
            ))}
          </ul>
        </div>
      </ContentCheck>
    </Container>
  );
};

export default FilterMenu;
