import { Outlet, Link } from 'react-router-dom';

const Layout = () => (
  <div>
    <header>
      <nav>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/upload">Upload</Link>
          <Link to="/login">Login</Link>
          <Link to="/logout">Logout</Link>
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

export default Layout;
