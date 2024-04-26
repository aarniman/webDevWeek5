import { useState } from 'react';
import MediaRow from '../components/MediaRow';
import SingleView from '../components/SingleView';
import { useMedia } from '../hooks/apiHooks';

const Home = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const { mediaArray } = useMedia();

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
