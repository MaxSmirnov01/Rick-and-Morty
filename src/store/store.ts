import { configureStore } from '@reduxjs/toolkit';
import { api } from '../api/api';
import characterReducer from './charactersSlice';

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    currentCharacter: characterReducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
