import { StateCreator, SetState, GetState, StoreApi } from "zustand";
// import { ModelPoke } from "../../interfaces/pokemon";
import { iGET_POKEMON_ARR } from "../../services/querys";

/**
 * Types
 */
export type Middleware<S> = (
  config: StateCreator<S>
) => (set: SetState<S>, get: GetState<S>, api: StoreApi<S>) => S; // Type Middleware

export interface PokeState {
  // state
  data: iGET_POKEMON_ARR | null;

  setData(n: iGET_POKEMON_ARR): void;
} // type State
