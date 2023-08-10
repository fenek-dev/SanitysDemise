import { configureStore } from "@reduxjs/toolkit";

import characterReducer from "./character/character.slice";
import generalReducer from "./general/general.slice";

export const store = configureStore({
  reducer: {
    character: characterReducer,
    general: generalReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
