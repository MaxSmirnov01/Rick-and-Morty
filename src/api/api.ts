import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL, LIST_CHARACTERS, SEARCH_CHARACTER } from './urls';
import type { Characters } from '../types/api';

export const api = createApi({
  reducerPath: 'characters',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ['Characters'],
  endpoints: (builder) => ({
    getCharacters: builder.query<Characters, void>({
      query: () => ({
        url: `${LIST_CHARACTERS}`,
      }),
      providesTags: ['Characters'],
    }),
  }),
});

export const { useGetCharactersQuery } = api;
