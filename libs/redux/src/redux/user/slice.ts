import { createSlice } from '@reduxjs/toolkit';
import {
  UserModel,
  MetaDataResponse,
  userServiceApi,
} from '../userService/userServiceEndpoints';

export interface UserState {
  user: UserModel | null;
  metadata: MetaDataResponse | null;
}

export const initialState: UserState = {
  user: null,
  metadata: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      userServiceApi.endpoints.getWithUserNameUsingGet.matchFulfilled,
      (state, action) => {
        state.user = action.payload;
      }
    );
    builder.addMatcher(
      userServiceApi.endpoints.getMetadataByUsernameUsingGet.matchFulfilled,
      (state, action) => {
        state.metadata = action.payload;
      }
    );
  },
});
