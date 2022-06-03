import Layout from './components/layout/Layout';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </Layout>
  );
}

export default App;
