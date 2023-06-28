import authReducer from './reducer';
import initialState from './initialState';
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: authReducer,
});

export default authSlice.reducer;
