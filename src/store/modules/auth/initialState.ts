export interface AuthState {
  authorization: string | null;
}

const initialState: AuthState = {
  authorization: null,
};

export default initialState;
