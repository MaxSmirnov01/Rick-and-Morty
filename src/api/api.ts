import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL, LIST_CHARACTERS } from './urls';
import type { Characters, Arg } from '../types/api';

export const api = createApi({
  reducerPath: 'characters',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ['Characters'],
  endpoints: (builder) => ({
    getCharacters: builder.query<Characters, Partial<Arg>>({
      query: ({ name, page, status, gender, species, type }) => {
        // сомнительно, но окэй
        let url = `${LIST_CHARACTERS}/?`;
        if (name) url += `name=${name}&`;
        if (page) url += `page=${page}&`;
        if (status) url += `status=${status}&`;
        if (gender) url += `gender=${gender}&`;
        if (species) url += `species=${species}&`;
        if (type) url += `type=${type}&`;

        url = url.replace(/&$/, '');

        return { url };
      },
      providesTags: ['Characters'],
    }),
  }),
});

export const { useGetCharactersQuery } = api;
