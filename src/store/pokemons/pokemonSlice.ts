import { SimplePokemon } from "@/pokemons";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PokemonsState {
  favorites: {
    [key: string]: SimplePokemon;
  };
}

const initialState: PokemonsState = {
  favorites: {},
};

const pokemonSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    setFavoritePokemons(
      state,
      action: PayloadAction<{ [key: string]: SimplePokemon }>
    ) {
      state.favorites = action.payload;
    },
    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
      const pokemon = action.payload;

      const { id } = pokemon;
      if (!!state.favorites[id]) {
        delete state.favorites[id];
        return;
      }

      state.favorites[id] = pokemon;
    },
  },
});

export const { toggleFavorite, setFavoritePokemons } = pokemonSlice.actions;

export default pokemonSlice.reducer;
