import { IProfile } from '../../interfaces/profile/profile.interfaces';
import { $axios } from '../config';
import { ReponseApi } from '../config.interface';

interface IGetProfile extends ReponseApi {
  data: IProfile;
}

interface ICreateProfile extends ReponseApi {
  data: IProfile;
}

export const $profileApi = {
  getProfile: (): Promise<IGetProfile> => {
    return $axios.get('profile');
  },

  createProfile: (name: string): Promise<ICreateProfile> => {
    return $axios.post('profile/create', {
      body: {
        name,
      },
    });
  },
};
