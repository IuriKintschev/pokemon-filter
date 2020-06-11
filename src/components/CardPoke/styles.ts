import styled from "styled-components";
import { characters, cp } from "../../css/constants";

interface Props {
  imgUrl: string;
}

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  min-width: 24rem;
  min-height: 8rem;
  padding: 0.8rem;
  padding-right: 2rem;

  background: #ffffff;
  border-radius: 20px;

  .wrapperImgWithStatus {
    display: flex;
  }

  & > p {
    color: ${characters.paragraph};
    font-size: 1.2rem;
  }
`;

export const ImageDiv = styled.div`
  width: 6.4rem;
  height: 6.4rem;

  background: transparent url(${({ imgUrl }: Props) => imgUrl}) 0% 0% no-repeat
    padding-box;
  background-size: contain;
  border: 1px solid #dbdbdb;
  border-radius: 14px;
`;

export const ContentStatus = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding-left: 1rem;

  header > span {
    font-weight: bold;
    font-size: 1.6rem;
  }

  header > p {
    color: ${characters.paragraph};
    font-size: 1.2rem;
  }

  .statusCP {
    background: ${cp.Purple};
    display: flex;
    align-items: center;
    justify-content: center;

    width: 5.4rem;
    height: 1.9rem;
    border-radius: 4px;

    & > p {
      color: #fff;
      font-weight: bold;
      font-size: 1.5rem;
    }
  }
`;
