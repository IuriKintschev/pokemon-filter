import styled from "styled-components";
import { background } from "../../css/constants";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const MainContent = styled.div`
  width: 100%;
  height: 95%;
  margin-top: auto;
  margin-right: 5.8rem;
  background: ${background.Content};
  border-radius: 50px 50px 0px 0px;
`;
