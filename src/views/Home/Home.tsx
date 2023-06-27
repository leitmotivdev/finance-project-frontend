import { useAuth0 } from '@auth0/auth0-react';

export const Home = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div>
      <button onClick={() => loginWithRedirect()}>Sign In</button>
    </div>
  );
};

