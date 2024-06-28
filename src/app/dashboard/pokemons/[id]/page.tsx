import { NextPage } from "next";

interface Props {
  params: { id: string };
}

const PokemonPage: NextPage<Props> = ({ params }) => {
  return (
    <div>
      <h1>Pokémon {params.id}</h1>
    </div>
  );
};

export default PokemonPage;
