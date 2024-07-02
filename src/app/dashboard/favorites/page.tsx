import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";

export const metadata = {
  title: "Favoritos",
  description: "151 Pokémons",
};

export default async function FavoritePokemonsPage() {
  return (
    <div className="flex flex-col">
      <span className="text-4xl my-2">Pokémons Favoritos (Estado Global)</span>
      <PokemonGrid pokemons={[]} />
    </div>
  );
}
