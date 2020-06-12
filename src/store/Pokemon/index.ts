import create from "zustand";
import { Middleware, PokeState } from "./types";
import { produce, initialState } from "../../utils/scripts";

/**
 * debug middleware
 */

const _log: Middleware<PokeState> = (config) => (set, get, api) =>
  config(
    (args) => {
      console.log("  setter", args);
      set(args);
      console.log("  new state", get());
    },
    get,
    api
  );

export const [usePokeState, usePokeApi] = create<PokeState>(
  // debugger
  _log(
    (set, get): PokeState => ({
      //state
      dataPokemons: null,
      filters: [...initialState],
      maxCp: 3904,
      minCp: 0,

      // actions
      setData: (newData) => {
        set(
          produce<PokeState>((state) => {
            state.dataPokemons = newData;
          })
        );
      },
    })
  )
);
