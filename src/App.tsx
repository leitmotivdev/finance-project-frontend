import './App.scss';

import { Wallet } from './views/Wallet/Wallet';
import { Dashboard } from './views/Dashboard/Dashboard';
import { Admin } from './components/layouts/Admin/Admin';
import { Routes, Route, Navigate } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Admin />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="wallet" element={<Wallet />} />
        <Route path="*" element={<Navigate to="dashboard" />} />
      </Route>
    </Routes>
  );
};

export default App;
