import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import { setUpAuthStateAction } from '../store/modules/auth';
import { Outlet, useNavigate } from 'react-router-dom';
import { ScreenLoading } from '../components/layouts/Admin/ScreenLoading/ScreenLoading';
import { addAxiosAuthorization } from '../api/config';
import { $profileApi } from '../api/modules/profile.api';

export const PrivateRoute = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const { isAuthenticated, user, getAccessTokenSilently, isLoading } = useAuth0();

  const setUpAuthStore = async () => {

    try {
      const sub = user?.sub || '';
      const authorization = await getAccessTokenSilently();
      if (authorization) addAxiosAuthorization(authorization);

      const haveProfile = await $profileApi.getProfile();

      if (!haveProfile.data) {
        navigate('admin/profile/create');
        setLoading(false);
        return;
      }

      dispatch(setUpAuthStateAction({
        sub,
        authorization,
        profileName: haveProfile.data.name
      }));

      setLoading(false);
    } catch (error) {
      console.error(error);
      navigate('/');
    }
  };

  useEffect(() => {
    if (isLoading) setLoading(true);
    if (!isLoading && !isAuthenticated) return navigate('/');
    if (!isLoading && isAuthenticated) setUpAuthStore();
  }, [isLoading]);

  return (
    <>
      {loading ? <ScreenLoading /> : <Outlet />}
    </>
  );
};
