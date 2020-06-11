import styled from "styled-components";
import { characters, device } from "../../css/constants";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  max-width: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  padding: 3.7rem;
  /* background: #f9f9f9; */

  /* all tag p */
  p {
    font-weight: 500;
    margin-left: 1rem;
    color: ${characters.paragraph};
  }

  header {
    height: 100%;
    display: flex;
    align-items: center;

    img {
      width: 5.2rem;
      height: 5.2rem;
    }

    p {
      display: flex;
      flex-direction: column;

      span {
        font-weight: 700;
        font-size: 1.8rem;
        color: ${characters.title};
      }
    }
  }

  main {
    height: 100%;
    li .tileLi {
      display: flex;
      align-items: center;
      border-bottom-right-radius: 2rem;
      border-top-right-radius: 2rem;

      .tileWrapperImg {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0.6rem;

        width: 4rem;
        height: 4rem;
        border-radius: 1.5rem;

        img {
          width: 2.2rem;
          height: 2.2rem;
        }
      }

      cursor: pointer;
      &:hover {
        background: rgba(0, 0, 0, 0.01);
      }
    }

    li:first-child {
      .tileWrapperImg {
        background: ${characters.titleBlue};
        box-shadow: 0px 0px 6px #00c1fdcc;
      }

      p {
        color: ${characters.titleBlue};
        font-weight: bold;
        text-shadow: 0px 0px 6px #00c1fd80;
      }
    }
  }

  footer {
    height: 100%;
    margin: 0.6rem;
    display: flex;
    align-items: flex-end;
  }

  @media ${device.laptop} {
    max-width: 22rem;
  }

  @media ${device.mobileL} {
    max-width: 100%;

    main, footer {
      display: none;
    }
  }
`;
