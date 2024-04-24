import { useNavigate, useLocation, useParams } from 'react-router-dom';
import SingleView from '../components/SingleView';
import mediaArray from '../data/mediaArray';

function Single() {
  const location = useLocation();
  const params = useParams();
  const navigate = useNavigate();
  const id = Number(params.id);

  let item;
  if (!location.state?.item) {
    item = mediaArray.find(({ media_id }) => Number(media_id) === id);
  } else {
    item = location.state.item;
  }

  if (!item) {
    return <>Item not found</>;
  }

  return (
    <SingleView
      item={item}
      setSelectedItem={() => navigate(-1)}
    />
  );
}

export default Single;
