import { $axios } from '../config';

export const $authApi = {
  authorizationTest: (userId: number, query: { search: string }) => {
    return $axios.get('auth/sign-in-test/:id', {
      params: { id: userId },
      query,
    });
  },
};
