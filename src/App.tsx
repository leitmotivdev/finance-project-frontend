import './App.scss';

import { Home } from './views/Home/Home';
import { Wallet } from './views/Wallet/Wallet';
import { Dashboard } from './views/Dashboard/Dashboard';
import { Admin } from './components/layouts/Admin/Admin';
import { Routes, Route, Navigate } from 'react-router-dom';
import { CreateWallet } from './views/Wallet/CretateWallet/CreateWallet';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<Admin />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="wallet">
        <Route path="" element={<Wallet />}/>
        <Route path="create" element={<CreateWallet/>}/>
        </Route>
        <Route path="*" element={<Navigate to="dashboard" />} />
      </Route>
    </Routes>
  );
};

export default App;
