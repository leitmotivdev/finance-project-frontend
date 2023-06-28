import { AuthState } from './initialState';
import { PayloadAction } from '@reduxjs/toolkit';

const authReducer = {
  setUserSub(state: AuthState, { payload }: PayloadAction<string>) {
    state.userSub = payload;
    return state;
  },
  setUserAuthorization(state: AuthState, { payload }: PayloadAction<string>) {
    state.authorization = payload;
    return state;
  },
};

export default authReducer;
