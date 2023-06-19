import './App.scss';

import { Routes, Route } from 'react-router-dom';
import { Dashboard } from './views/Dashboard/Dashboard';
import { Admin } from './components/layouts/Admin/Admin';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Admin />}>
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default App;
