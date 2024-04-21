import { useNavigate, useLocation } from 'react-router-dom';

function Single() {
  const { state } = useLocation();
  const item = state.item;
  const navigate = useNavigate();
  if (!item) return null;
  return (
    <dialog open>
      <h1>{item.title}</h1>
      <p>{item.description}</p>
      <img src={item.filename} alt={item.title} />
      <button onClick={() => navigate(-1)}>Close</button>
    </dialog>
  );
}

export default Single;
