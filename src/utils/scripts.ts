import { cp as colorCp } from "../css/constants";
import { Middleware, PokeState } from "../store/Pokemon/types";
/**
 * Funcao para setar valor em state imutavel
 */
export function produce<T>(cb: (state: T) => void) {
  return (state: T) => {
    const copy = { ...state };
    cb(copy);
    return copy;
  };
}

/**
 * Switch returna cor de acordo com CP
 */

// Da pra encurtar uma pouco is if's, por que é lógico que se passar da primeira condição
// (se o maxCP nao for menor ou igual a 500, ele é maior que 500, que era a condição seguinte)
export function getColorByCP(cp: number){
  if (cp <= 500) {
    return colorCp.Orange;
  } if (cp <= 1000) {
    return colorCp.Purple;
  } else if (cp <= 1500) {  
    return colorCp.Yelow;
  } else {
    return colorCp.Blue;
  }
}

/**
 * Middleware pra imprimir logs no console do estado
 */
export const _log: Middleware<PokeState> = (config) => (set, get, api) =>
  config(
    (args) => {
      console.log("  setter", args);
      set(args);
      console.log("  new state", get());
    },
    get,
    api
  );

/**
 * Cola do estado de filters
 */
export const initialState = [
  {
    id: 1,
    type: "Normal",
    status: false,
  },
  {
    id: 2,
    type: "Fire",
    status: false,
  },
  {
    id: 3,
    type: "Fighting",
    status: false,
  },
  {
    id: 4,
    type: "Water",
    status: false,
  },
  {
    id: 5,
    type: "Flying",
    status: false,
  },
  {
    id: 6,
    type: "Grass",
    status: false,
  },
  {
    id: 7,
    type: "Poison",
    status: false,
  },
  {
    id: 8,
    type: "Electric",
    status: false,
  },
  {
    id: 9,
    type: "Ground",
    status: false,
  },
  {
    id: 10,
    type: "Psychic",
    status: false,
  },
  {
    id: 11,
    type: "Rock",
    status: false,
  },
  {
    id: 12,
    type: "Ice",
    status: false,
  },
  {
    id: 13,
    type: "Bug",
    status: false,
  },
  {
    id: 14,
    type: "Dragon",
    status: false,
  },
  {
    id: 15,
    type: "Ghost",
    status: false,
  },
  {
    id: 16,
    type: "Dark",
    status: false,
  },
  {
    id: 17,
    type: "Steel",
    status: false,
  },
  {
    id: 18,
    type: "Fairy",
    status: false,
  },
];
