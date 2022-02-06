import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './components/home/Home';
import Login from './components/auth/Login';
import Logout from './components/auth/Logout';

import './App.css';

const App = () => {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/logout' element={<Logout />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
