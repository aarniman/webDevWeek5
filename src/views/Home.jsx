import { useState, useEffect } from 'react';
import MediaRow from '../components/MediaRow';
import SingleView from '../components/SingleView';
import { fetchData } from '../utils/fetchData';

const Home = () => {
  const [mediaArray, setMediaArray] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

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
  console.log("selectedItem: ", selectedItem)
  return (
    <>
      <SingleView item={selectedItem} setSelectedItem={setSelectedItem} />
      <h2>My Media</h2>
      <table>
        <thead>
          <tr>
            <th>Thumbnail</th>
            <th>Title</th>
            <th>Description</th>
            <th>Created At</th>
            <th>Size</th>
            <th>Media Type</th>
            <th>User</th>
          </tr>
        </thead>
        <tbody>
          {mediaArray.map((media) => (
            <MediaRow key={media.media_id} item={media} setSelectedItem={setSelectedItem} open={selectedItem} />
          ))}
        </tbody>
      </table>
    </>
  );
};
export default Home;
