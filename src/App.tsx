import './App.scss';

import { Home } from './views/Home/Home';
import { Wallet } from './views/Wallet/Wallet';
import { Dashboard } from './views/Dashboard/Dashboard';
import { Admin } from './components/layouts/Admin/Admin';
import { Routes, Route, Navigate } from 'react-router-dom';
import { CreateProfile } from './views/Profile/CreateProfile/CreateProfile';
import { PrivateRoute } from './routes/PrivateRoute';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<PrivateRoute />}>
        <Route path="/admin">
          <Route element={<Admin />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="wallet" element={<Wallet />} />
            <Route path="*" element={<Navigate to="dashboard" />} />
          </Route>

          <Route path="profile/create" element={<CreateProfile />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
