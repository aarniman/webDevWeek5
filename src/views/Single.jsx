import { useNavigate, useLocation } from 'react-router-dom';

const Single = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const item = state.item;

  return (
    <dialog
      className="fixed top-0 h-dvh w-dvw bg-black bg-opacity-50 p-4 text-stone-100"
      open={item ? true : false}
    >
      <p>
        <button onClick={() => navigate(-1)}>Go back</button>
      </p>
      {item && (
        <>
          {item.media_type.includes('video') ? (
            <video className="m-auto h-3/4 content-center" controls>
              <source
                src={item.filename}
                type={item.media_type}
              />
            </video>
          ) : (
            <img
              className="m-auto h-3/4"
              src={item.filename}
              alt={item.title}
            />
          )}
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <p>Created: {new Date(item.created_at).toLocaleString()}</p>
          <p>Size: {item.filesize}</p>
        </>
      )}
    </dialog>
  )
}

export default Single;
