export const getAuthorizationToken = (): string => {
  return localStorage.getItem('authorization-token') || '';
};

export const setAuthorizationToken = (token: string) => {
  return localStorage.setItem('authorization-token', token);
};
