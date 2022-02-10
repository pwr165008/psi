import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './components/home/Home';
import Preferences from './components/preferences/Preferences';
import { OperatorEntrustments } from './components/entrustments/OperatorEntrustments';

import './App.css';

const App = () => {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/Preferences' element={<Preferences />} />
          <Route path='/OperatorEntrustments' element={<OperatorEntrustments />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
