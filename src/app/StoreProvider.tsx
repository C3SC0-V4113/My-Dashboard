"use client";
import { AppStore, store } from "@/store";
import { setFavoritePokemons } from "@/store/pokemons/pokemonSlice";
import { useEffect, useRef } from "react";
import { Provider } from "react-redux";

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore | null>(null);

  useEffect(() => {
    const favorites = JSON.parse(
      localStorage.getItem("favorite-pokemons") ?? "{}"
    );

    storeRef.current!.dispatch(setFavoritePokemons(favorites));
  }, []);

  if (!storeRef.current) {
    storeRef.current = store();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
