import styled from "styled-components";
import { background, characters, device } from "../../css/constants";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 4rem;

  margin: auto 0;

  max-width: 42.9rem;
  max-height: 55.6rem;

  border-radius: 50px 0 0 50px;

  background: ${background.Content};

  .title {
    font-weight: bold;
    font-size: 3.5rem;

    margin-bottom: 2rem;
  }

  @media ${device.laptop} {
    max-width: 35rem;
  }

  @media ${device.mobileL} {
    max-width: 100%;

    border-radius: 50px 50px 0px 0px;
  }
`;

export const RangeContainer = styled.div`
  .cplabel {
    color: ${characters.paragraph};

    margin: 0.8rem 0;
  }

  .input-range__slider {
    width: 1.8rem;
    height: 1.8rem;
    appearance: none;
    background: #fff;
    box-shadow: 0px 0px 6px #00000029;
    border-radius: 100%;
    cursor: pointer;
    display: block;
    margin-left: -0.9rem;
    margin-top: -1.2rem;
    outline: none;
    position: absolute;
    top: 50%;
    transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
  }
  .input-range__slider:active {
    transform: scale(1.3);
  }
  .input-range__slider:focus {
    box-shadow: 0 0 0 5px rgba(63, 81, 181, 0.2);
  }
  .input-range--disabled .input-range__slider {
    background: #cccccc;
    border: 1px solid #cccccc;
    box-shadow: none;
    transform: none;
  }

  .input-range__slider-container {
    transition: left 0.3s ease-out;
  }

  .input-range__label {
    display: none;
  }

  .input-range__track {
    background: #dbdbdb;
    border-radius: 0.3rem;
    cursor: pointer;
    display: block;
    height: 0.8rem;
    position: relative;
    transition: left 0.3s ease-out, width 0.3s ease-out;
  }
  .input-range--disabled .input-range__track {
    background: #dbdbdb;
  }

  .input-range__track--background {
    left: 0;
    margin-top: -0.15rem;
    position: absolute;
    right: 0;
    top: 50%;
  }

  .input-range__track--active {
    background: #04e762;
  }

  .input-range {
    height: 1rem;
    position: relative;
    width: 100%;
  }
`;

export const BoxRangeValue = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 1.9rem;

    width: 7.7rem;
    height: 3.4rem;
    border: 2px solid #dbdbdb;
    border-radius: 10px;
  }

  p {
    font-weight: bold;
    font-size: 1.8rem;
  }
`;

export const ContentCheck = styled.div`
  .labelTypes {
    color: ${characters.paragraph};

    margin: 1rem 0;
  }

  .checks {
    .checkUl {
      display: grid;
      grid-template-columns: repeat(3, minmax(9rem, 1fr));
      grid-gap: 1rem;
    }
  }
`;
