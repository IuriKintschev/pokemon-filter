import React from "react";
import InputRange from "react-input-range";

import { Container, RangeContainer, BoxRangeValue } from "./styles";

interface ValueRange {
  min: number;
  max: number;
}

const FilterMenu: React.FC = () => {
  const [range, setRange] = React.useState<ValueRange>({ min: 2, max: 15 });
  return (
    <Container>
      <h1 className="title">Filtro</h1>

      <RangeContainer>
        <p className="cplabel">maxCP</p>

        <InputRange
          maxValue={20}
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
    </Container>
  );
};

export default FilterMenu;
