import { Outlet, Link } from 'react-router-dom';
import { useUserContext } from '../hooks/contextHooks';


const Layout = () => {
  const { user } = useUserContext();

  return (
    <div>
      <header>
        <nav>
          <ul>
            <Link to="/">Home</Link>
            {user ? (
              <>
                <Link to="/profile">Profile</Link>
                <Link to="/upload">Upload</Link>
                <Link to="/logout">Logout</Link>
              </>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        Copyright 2024
      </footer>
    </div>
  );
};

export default Layout;
