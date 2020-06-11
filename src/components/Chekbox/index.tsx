import React from "react";

import { Container } from "./styles";

interface Props {
  label: string;
  checked: boolean;
  handlerCheck(e: React.ChangeEvent<HTMLInputElement>): void;
}

const Chekbox: React.FC<Props> = ({ checked, handlerCheck, label }) => {
  return (
    <Container checked={checked}>
      <input
        className="styled-checkbox"
        id={`${label}_check`}
        type="checkbox"
        value={label}
        checked={checked}
        onChange={handlerCheck}
      />
      <label htmlFor={`${label}_check`}>{label}</label>
    </Container>
  );
};

export default Chekbox;
