export interface AuthState {
  authorization: string | null;
  sub: string;
  profile: {
    name: string;
  }
}

export const initialState: AuthState = {
  authorization: null,
  sub: '',

  profile: {
    name: '',
  }
};

