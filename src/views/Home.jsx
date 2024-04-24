import { useState, useEffect } from 'react';
import MediaRow from '../components/MediaRow';
import SingleView from '../components/SingleView';
import { fetchData } from '../utils/fetchData';

const Home = () => {
  const [mediaArray, setMediaArray] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  useEffect(() => {
    const getMedia = async () => {
      try {
        const json = await fetchData('test.json');
        setMediaArray(json);
      } catch (error) {
        console.error('Error fetching media', error);
      }
    };
    getMedia();

    console.log("mediaArray: ", mediaArray);
  }, []);
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
            <th>Count</th>
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
