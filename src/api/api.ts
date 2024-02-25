import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL, LIST_CHARACTERS } from './urls';
import type { Characters, Arg } from '../types/api';

export const api = createApi({
  reducerPath: 'characters',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ['Characters'],
  endpoints: (builder) => ({
    getCharacters: builder.query<Characters, Arg>({
      query: ({ name, page }) => ({
        url: `${LIST_CHARACTERS}/?name=${name}&page=${page}`,
      }),
      providesTags: ['Characters'],
    }),
  }),
});

export const { useGetCharactersQuery } = api;
