import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const defaultValues = {
  page: 1,
  filters: { name: '', status: '', gender: '', species: '', type: '' },
};

const initialState = { page: defaultValues.page, filters: defaultValues.filters };

type Filter = {
  [key: string]: string;
};

const characterSlice = createSlice({
  name: 'currentCharacter',
  initialState,
  reducers: {
    setPage: (state, { payload }: PayloadAction<number>) => {
      state.page = payload;
    },
    setFilter: (state, { payload }: PayloadAction<Filter>) => {
      if (payload.name) {
        state.filters = { ...state.filters, ...defaultValues.filters, ...payload };
        state.page = defaultValues.page;
        return;
      }
      state.filters = { ...state.filters, ...payload };
      state.page = defaultValues.page;
    },
  },
});

export const { setPage, setFilter } = characterSlice.actions;
export default characterSlice.reducer;
