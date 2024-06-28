import { Pokemon } from "@/pokemons";
import { NextPage } from "next";

export const metadata = {
  title: "SEO Title",
  description: "SEO Title",
};

interface Props {
  params: { id: string };
}

const getPokemon = async (id: string): Promise<Pokemon> => {
  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
    cache: "force-cache",
  }).then((resp) => resp.json());

  return pokemon;
};

const PokemonPage: NextPage<Props> = async ({ params }) => {
  const pokemon = await getPokemon(params.id);
  return (
    <div>
      <h1>Pokémon {params.id}</h1>
      <div className="">{JSON.stringify(pokemon)}</div>
    </div>
  );
};

export default PokemonPage;
