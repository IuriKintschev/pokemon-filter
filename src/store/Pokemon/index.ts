import create from "zustand";
import { Middleware, PokeState } from "./types";
import { produce, initialState } from "../../utils/scripts";
import { Range } from "react-input-range";
import { iGET_POKEMON_ARR } from "../../services/querys";

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

      // computeds values
      getterdataPokeByFilter: () => {
        let result = null;
        let pokemons = {
          pokemons: [],
        } as iGET_POKEMON_ARR;
        const filters = get().filters.filter((item) => item.status === true);
        const max = get().maxCp;
        const min = get().minCp;

        // filter
        if (filters.length === 0) {
          get().dataPokemons?.pokemons.map((poke) => {
            const cp = poke.maxCP;
            if (cp >= min && cp <= max) {
              pokemons.pokemons.push(poke);
            }
          });

          result = pokemons;
        } else if (filters.length >= 1) {
          get().dataPokemons?.pokemons.forEach((poke) => {
            const cp = poke.maxCP;
            poke.types.forEach((ty) =>
              filters.forEach((fi) => {
                if (
                  fi.type.toLowerCase().trim() === ty.toLowerCase().trim() &&
                  cp >= min &&
                  cp <= max
                ) {
                  pokemons.pokemons.push(poke);
                }
              })
            );
          });

          result = pokemons;
        }

        return result;
      }, // filtered values to screen

      // actions
      setData: (newData) => {
        set(
          produce<PokeState>((state) => {
            state.dataPokemons = newData;
          })
        );
      }, // set poke arr data

      setStatusFilter: (id, status) => {
        set(
          produce<PokeState>((state) => {
            state.filters.map((item) => {
              if (item.id === id) {
                return (item.status = status);
              } else {
                return item;
              }
            });
          })
        );
      }, // set status in filter

      setCpValue: (range) => {
        const { max, min } = range as Range;
        set(
          produce<PokeState>((state) => {
            state.maxCp = max;
            state.minCp = min;
          })
        );
      }, // set maxcp with mincp value
    })
  )
);
