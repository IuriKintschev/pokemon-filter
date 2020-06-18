import create from "zustand";
import { PokeState } from "./types";
import { produce, initialState } from "../../utils/scripts";
import { Range } from "react-input-range";
import { iGET_POKEMON_ARR } from "../../services/querys";

export const [usePokeState, usePokeApi] = create<PokeState>(
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
      // em vez de fazer essa lógica pra popular result pra depois retornar ele, tu poderia retornar diretamente a funcão
      if (filters.length === 0) {
        get().dataPokemons?.pokemons.map((poke) => {
          const cp = poke.maxCP;
          // essa validacão ta sendo feita em dois lugares, poderias reduzir a repetição de código colocando dentor de uma função que recebe um cp
          // e verifica se está dentro do range de valores min e max
          if (cp >= min && cp <= max) {
            // a semantica disso ficou bem estranha, pokemons.pokemons?
            pokemons.pokemons.push(poke);
          }
        });

        result = pokemons;
      } else if (filters.length >= 1) {
        get().dataPokemons?.pokemons.forEach((poke) => {
          const cp = poke.maxCP;

          poke.types.forEach((ty) =>
          // talvez isso seja mais uma opinião pessoal, mas quando o nome é pequeno (filter) prefiro bem mais do que encurtar pra
          // algo que não existe nem padrao -> diferente de encurtar currentBackgroundColor para currBgColor
            filters.forEach((fi) => {
              if (
                !pokemons.pokemons.includes(poke) &&
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
);
