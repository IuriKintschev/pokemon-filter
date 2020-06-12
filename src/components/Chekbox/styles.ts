import styled from "styled-components";
import { characters, device } from "../../css/constants";

const blueConst = characters.titleBlue;

interface Props {
  checked: boolean;
}

export const Container = styled.div`
  .styled-checkbox {
    position: absolute;
    opacity: 0;

    & + label {
      position: relative;
      cursor: pointer;
      padding: 0;
    }

    /* Box. */
    & + label:before {
      content: "";
      margin-right: 10px;
      display: inline-block;
      vertical-align: text-top;
      width: 18px;
      height: 18px;
      background: white;
      border-radius: 8px;
      border: 3px solid #dbdbdb;
      transition: 0.8s;
    }

    /* Box hover */
    &:hover + label:before {
      background: ${blueConst}55;
      transition: 0.8s;
    }

    /* Box focus */
    &:focus + label:before {
      /* box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.12); */
    }

    /* Box checked */
    &:checked + label:before {
      border: 3px solid ${blueConst};
    }

    /* Disabled state label. */
    &:disabled + label {
      color: #b8b8b8;
      cursor: auto;
    }

    /* Disabled box. */
    &:disabled + label:before {
      box-shadow: none;
      background: #ddd;
    }

    /* Checkmark. Could be replaced with an image */
    &:checked + label:after {
      content: "";
      position: absolute;
      left: 7px;
      top: 11px;
      background: ${blueConst};
      width: 2px;
      height: 2px;
      box-shadow: 2px 0 0 ${blueConst}, 4px 0 0 ${blueConst},
        4px -2px 0 ${blueConst}, 4px -4px 0 ${blueConst},
        4px -6px 0 ${blueConst}, 4px -8px 0 ${blueConst};
      transform: rotate(45deg);
    }
  }

  label {
    font-size: 1.7rem;
    font-weight: 500;
    color: ${({ checked }: Props) => (checked ? blueConst : characters.title)};
    text-shadow: ${({ checked }: Props) =>
      checked ? "0px 0px 6px #00c1fd66" : ""};
    transition: 0.8s;
  }

  @media ${device.laptop} {
    label {
      font-size: 1.2rem;
    }
  }

  @media ${device.mobileL} {
    label {
      font-size: 1.7rem;
    }
  }
`;
