import React from "react";
import { Filter } from "../../store/Pokemon/types";
import { usePokeState } from "../../store/Pokemon";
import shallow from "zustand/shallow";

import { Container } from "./styles";

interface Props {
  filter: Filter;
  index: number;
}

const Chekbox: React.FC<Props> = ({ filter, index }) => {
  const [setStatusFilter, checked] = usePokeState(
    (state) => [state.setStatusFilter, state.filters[index].status],
    shallow
  );

  function handlerCheck(event: React.ChangeEvent<HTMLInputElement>) {
    setStatusFilter(filter.id, event.target.checked);
  }

  return (
    <Container checked={checked}>
      <input
        className="styled-checkbox"
        id={`${filter.type}_check`}
        type="checkbox"
        value={filter.type}
        checked={checked}
        onChange={handlerCheck}
      />
      <label htmlFor={`${filter.type}_check`}>{filter.type}</label>
    </Container>
  );
};

export default Chekbox;
