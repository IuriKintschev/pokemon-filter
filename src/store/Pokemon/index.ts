import create from "zustand";
import { Middleware, PokeState } from "./types";
import { produce } from "../../utils/scripts";

/**
 * debug middleware
 */

const log: Middleware<PokeState> = (config) => (set, get, api) =>
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
  log(
    (set, get): PokeState => ({
      data: null,

      setData: (newData) => {
        set(
          produce<PokeState>((state) => {
            state.data = newData;
          })
        );
      },
    })
  )
);
