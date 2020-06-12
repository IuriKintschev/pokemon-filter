import styled from "styled-components";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { background, characters, device } from "../../css/constants";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  justify-content: space-between;

  @media ${device.mobileL} {
    flex-direction: column;
  }
`;

export const MainContent = styled.div`
  width: 100%;
  height: 95%;
  padding: 4rem;
  padding-right: 2rem;
  margin-top: auto;
  margin-right: 5.8rem;
  background: ${background.Content};
  border-radius: 50px 50px 0px 0px;

  .title {
    font-size: 3.5rem;
  }

  .subtitle {
    font-weight: bold;
    font-size: 1.6rem;
    color: ${characters.titleBlue};
  }

  .gridPoke {
    display: grid;
    grid-template-columns: repeat(3, minmax(9rem, 1fr));
    grid-gap: 1.5rem;
  }

  .ps__rail-y {
    opacity: 1;
  }
  .ps--active-y > .ps__rail-y {
    background: #fff;
    border-radius: 10px;
  }
  .ps__thumb-y {
    right: 0;
    width: 15px;

    &:hover {
      width: 15px;
    }
  }

  /* for small screen */
  @media ${device.laptopL} {
    .gridPoke {
      grid-template-columns: repeat(2, minmax(9rem, 1fr));
    }
  }

  @media ${device.laptopS} {
    .gridPoke {
      grid-template-columns: repeat(1, minmax(9rem, 1fr));
    }
  }

  @media ${device.mobileL} {
    order: +1;
    border-radius: 0;
  }
`;

export const Scroll = styled(PerfectScrollbar)`
  padding-right: 3rem;
  margin-top: 3.7rem;

  height: calc(100% - 6rem - 3.7rem);
`;
