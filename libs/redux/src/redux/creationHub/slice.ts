import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CreationHubState {
  user: string;
}

const initialState: CreationHubState = {
  user: 'DefaultUser',
};

export const creationHubSlice = createSlice({
  name: 'creationHub',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<string>) {
      state.user = action.payload;
    },
  },
});
