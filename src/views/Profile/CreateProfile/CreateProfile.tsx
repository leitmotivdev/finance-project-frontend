import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './CreateProfile.scss';
import { $profileApi } from '../../../api/modules/profile.api';
import { forwardIcon } from '../../../constants/assets/profileAssets';

export const CreateProfile = () => {
  const [profileName, setProfileName] = useState('');
  const navigate = useNavigate();

  const onChangeProfileName = (value: string) => {
    if (!value) return setProfileName('');

    const words = value.split(' ');

    if (words.length === 3) return setProfileName(value.trim());

    setProfileName(words.reduce((acc: string, value: string, index: number) => {
      if (value === '') return acc + ' ';
 
      const word = value[0].toUpperCase() + value.substring(1).toLocaleLowerCase();
      if (index > 0) return acc + ` ${word}`;
      return word;
    }, ''));
  };

  const createProfileSubmit = () => {
    $profileApi.createProfile(profileName.trim()).then((response) => {
      console.log('profile response', response);
      navigate('/admin/dashboard');
    });
  };

  return (
    <main className='create-profile'>
      <section>
        <h2 className="create-profile__title">Hola Amigo Bienvenido a <span className="active-title">Finance</span> 🎉</h2>
        <p className="create-profile__description">
          Antes de iniciar a usar la plataforma es necesario registrar un nombre de perfil para tu cuenta, recuerda que puedes tener multiples perfiles.
        </p>

        <input
          className="create-profile__input"
          onChange={({ target }) => onChangeProfileName(target.value)}
          value={profileName}
          placeholder="Ingresa el nombre del tu perfil aquí"
        />
        <button
          className="create-profile__button"
          disabled={!(profileName.length > 3)}
          onClick={createProfileSubmit}
        >
          Continuar
          <img className="w-5 h-5" src={forwardIcon} />
        </button>
      </section>
    </main>
  );
};
