import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './views/Home';
import Profile from './views/Profile';
import Single from './views/Single';
import Upload from './views/Upload';
import Layout from './components/Layout';
import Login from './views/Login';
import Logout from './views/Logout';
import Register from './views/Register';
import { UserProvider } from './contexts/UserContext';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <UserProvider>

        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route index element={<Home />} />
            <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/single" element={<Single />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/logout" element={<Logout />} />
          </Route>
        </Routes>
      </UserProvider>
    </Router>
  );
};
export default App;
