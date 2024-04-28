import { useState, useEffect } from 'react';
import { fetchData } from '../utils/fetchData';
const useMedia = () => {
  const [mediaArray, setMediaArray] = useState([]);

  const getMedia = async () => {

    const json = await fetchData(import.meta.env.VITE_MEDIA_API + '/media');

    const getUser = await Promise.all(
      json.map(async (media) => {
        console.log("ID: ", media.user_id)
        const user = await fetchData(import.meta.env.VITE_AUTH_API + `/users/${media.user_id}`);
        return { ...media, user: user.username };
      })
    );

    setMediaArray(getUser);
  };

  useEffect(() => {
    getMedia();
  }, []);

  console.log("mediaArray: ", mediaArray);
  return { mediaArray };
};

const useAuthentication = () => {
  const postLogin = async (inputs) => {
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs),
    };
    const loginResult = await fetchData(import.meta.env.VITE_AUTH_API + '/auth/login', fetchOptions);
    return loginResult;
  };
  return { postLogin };
};

const useUser = () => {
  const getUserByToken = async (token) => {
    const fetchOptions = {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    };
    const url = import.meta.env.VITE_AUTH_API + '/users/token';
    const result = await fetchData(url, fetchOptions);
    return result;
  };

  const postUser = async (inputs) => {
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs),
    };
    const userResult = await fetchData(import.meta.env.VITE_AUTH_API + '/users', fetchOptions);
    return userResult;
  };

  return { getUserByToken, postUser };
};
export { useMedia, useAuthentication, useUser };
