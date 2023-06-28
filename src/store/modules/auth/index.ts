import { initialState } from './initialState';
import authReducer from './reducer';
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: authReducer,
});

export default authSlice.reducer;

export const {
  setUserSub: setUserSubAction,
  setUserAuthorization: setUserAuthorizationAction,
} = authSlice.actions;
