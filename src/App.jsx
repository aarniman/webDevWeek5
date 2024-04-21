import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './views/Home';
import Layout from './components/Layout';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          {/* TODO: add missing routes */}
        </Route>
      </Routes>
    </Router>
  );
};
export default App;
