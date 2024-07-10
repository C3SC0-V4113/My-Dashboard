import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import pokemonReducer from "./pokemons/pokemonSlice";
import { localStorageMiddleware } from "./middlewares/localStorage-middleware";

export const store = () => {
  return configureStore({
    reducer: {
      counter: counterReducer,
      pokemons: pokemonReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(localStorageMiddleware),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof store>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore["dispatch"];
