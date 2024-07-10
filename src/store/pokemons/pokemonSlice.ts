import { SimplePokemon } from "@/pokemons";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface PokemonsState {
  [key: string]: SimplePokemon;
}

const getInitialState = (): PokemonsState => {
  // if (typeof localStorage === "undefined") return {};

  const favorites = JSON.parse(
    localStorage.getItem("favorite-pokemons") ?? "{}"
  );
  return favorites;
};

const initialState: PokemonsState = getInitialState();

const pokemonSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
      const pokemon = action.payload;

      const { id } = pokemon;
      if (!!state[id]) {
        delete state[id];
        return;
      }

      state[id] = pokemon;
    },
  },
});

export const { toggleFavorite } = pokemonSlice.actions;

export default pokemonSlice.reducer;
