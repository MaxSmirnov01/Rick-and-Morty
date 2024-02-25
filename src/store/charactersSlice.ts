import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = { name: '', page: 1 };

const characterSlice = createSlice({
  name: 'currentCharacter',
  initialState,
  reducers: {
    setName: (state, { payload }: PayloadAction<string>) => {
      state.name = payload;
    },
    setPage: (state, { payload }: PayloadAction<number>) => {
      state.page = payload;
    },
  },
});

export const { setName, setPage } = characterSlice.actions;
export default characterSlice.reducer;
