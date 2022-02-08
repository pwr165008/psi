import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './components/home/Home';
import Preferences from './components/preferences/Preferences';

import './App.css';

const App = () => {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/preferences' element={<Preferences />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
