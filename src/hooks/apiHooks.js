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

export { useMedia };
