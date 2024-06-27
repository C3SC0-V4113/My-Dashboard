const getPokemons = async (limit = 20, offset = 0) => {
  const data = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((response) => response.json());

  return data;
};

export default async function PokemonsPage() {
  const pokemons = await getPokemons();
  return <div>{JSON.stringify(pokemons)}</div>;
}
