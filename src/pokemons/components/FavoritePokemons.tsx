"use client";
import { useAppSelector } from "@/hooks";
import { PokemonGrid } from "./PokemonGrid";
import { useState } from "react";
import { NoFavorites } from "./NoFavorites";

export const FavoritePokemons = () => {
  const favoritePokemons = useAppSelector((state) =>
    Object.values(state.pokemons)
  );
  const [pokemons, setPokemons] = useState(favoritePokemons);

  return pokemons.length ? (
    <PokemonGrid pokemons={pokemons} />
  ) : (
    <NoFavorites />
  );
};
