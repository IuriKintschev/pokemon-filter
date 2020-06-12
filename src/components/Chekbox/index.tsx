import React from "react";
import { filter } from "../../store/Pokemon/types";

import { Container } from "./styles";

interface Props {
  filter: filter;
}

const Chekbox: React.FC<Props> = ({ filter }) => {
  const [checked, setChecked] = React.useState<boolean>(filter.status);

  function handlerCheck(event: React.ChangeEvent<HTMLInputElement>) {
    setChecked(event.target.checked);
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
