import type { RootState } from '../configureStore';

export const selectUser = (state: RootState) => state.user.user;

export const selectMetadata = (state: RootState) => state.user.metadata;

export const selectTradeDeskType = (state: RootState) => {
  const metadata = selectMetadata(state);
  if (metadata && metadata.tradeDeskType) {
    return metadata.tradeDeskType;
  }
  return [];
};
