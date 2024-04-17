import PropTypes from 'prop-types';
import Button from './UI/Button';

const SingleView = (props) => {
  const { item, setSelectedItem } = props;
  console.log("props: ", props)
  if (!item) return null;
  return (
    <dialog open>
      <h1>{item.title}</h1>
      <p>{item.description}</p>
      <img src={item.image} alt={item.title} />
      <Button text="Close" handleClick={() => setSelectedItem(null)} />
    </dialog>
  );
}

SingleView.propTypes = {
  item: PropTypes.object,
  setSelectedItem: PropTypes.func.isRequired,
};

export default SingleView;
