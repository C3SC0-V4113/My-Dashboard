"use client";
import { useAppSelector } from "@/hooks";
import { PokemonGrid } from "./PokemonGrid";
import { NoFavorites } from "./NoFavorites";

export const FavoritePokemons = () => {
  const { favorites } = useAppSelector((state) => state.pokemons);
  const pokemons = Object.values(favorites);

  return pokemons.length ? (
    <PokemonGrid pokemons={Object.values(pokemons)} />
  ) : (
    <NoFavorites />
  );
};
