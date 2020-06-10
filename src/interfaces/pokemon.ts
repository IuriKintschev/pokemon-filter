export declare module ModelPoke {
  interface Special {
    name: string;
    type: string;
    damage: number;
  }

  interface Attacks {
    special: Special[];
  }

  interface Pokemon {
    id: string;
    name: string;
    attacks: Attacks;
    number: string;
    image: string;
    types: string[];
    maxCP: number;
  }
}
