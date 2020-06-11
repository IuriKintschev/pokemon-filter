import React, { useState } from "react";
import InputRange from "react-input-range";
import Checkbox from "../../components/Chekbox";

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
  const [range, setRange] = useState<ValueRange>({ min: 2, max: 15 });
  const [checked, setChecked] = useState<boolean>(false);

  function handlerCheck(event: React.ChangeEvent<HTMLInputElement>) {
    setChecked(event.target.checked);
  }

  return (
    <Container>
      <RangeContainer>
        <h1 className="title">Filtro</h1>
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

      <ContentCheck>
        <p className="labelTypes">Types</p>

        <div className="checks">
          <ul className="checkUl" >
            {[...Array(18)].map((_, index) => (
              <li key={String(index)}>
                <Checkbox
                  checked={checked}
                  handlerCheck={handlerCheck}
                  label={String(index)}
                />
              </li>
            ))}
          </ul>
        </div>
      </ContentCheck>
    </Container>
  );
};

export default FilterMenu;
