import { StateCreator, SetState, GetState, StoreApi } from "zustand";
import { Range } from "react-input-range";
import { iGET_POKEMON_ARR } from "../../services/querys";

/**
 * Types
 */
export type Middleware<S> = (
  config: StateCreator<S>
) => (set: SetState<S>, get: GetState<S>, api: StoreApi<S>) => S; // Type Middleware

// padrão de Tipo com letra maiscula
export interface Filter {
  id: number;
  type: string;
  status: boolean;
}

export interface PokeState {
  // state
  dataPokemons: iGET_POKEMON_ARR | null;
  filters: Filter[];
  maxCp: number;
  minCp: number;

  //computed values
  getterdataPokeByFilter(): iGET_POKEMON_ARR | null;

  // actions
  setData(n: iGET_POKEMON_ARR): void;
  setStatusFilter(s: number, b: boolean): void;
  setCpValue(n: number | Range): void;
} // type State
