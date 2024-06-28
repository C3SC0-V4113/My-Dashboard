import { Pokemon } from "@/pokemons";
import { Metadata, NextPage } from "next";

interface Props {
  params: { id: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id, name } = await getPokemon(params.id);
  return {
    title: `${name} | #${id}`,
    description: `Pagina del Pokémon ${name}`,
  };
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
      <div className="">{pokemon.name}</div>
    </div>
  );
};

export default PokemonPage;
