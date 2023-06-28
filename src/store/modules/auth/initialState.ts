export interface AuthState {
  authorization: string | null;
  userSub: string;
}

export const initialState: AuthState = {
  authorization: null,
  userSub: '',
};

