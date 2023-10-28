import { IsetUpAuthState } from '../../../interfaces/auth/reducer.interfaces';
import { AuthState } from './initialState';
import { PayloadAction } from '@reduxjs/toolkit';

const authReducer = {
  setUpAuthState(state: AuthState, { payload }: PayloadAction<IsetUpAuthState>) {
    const { authorization, sub, profileName } = payload;

    state.sub = sub;
    state.profile.name = profileName;
    state.authorization = authorization;

    return state;
  }
};

export default authReducer;
