import type { RootState } from '../configureStore';

export const selectCreationHub = (state: RootState) => state.creationHub;
export const selectCreationHubUser = (state: RootState) =>
  selectCreationHub(state).user;
