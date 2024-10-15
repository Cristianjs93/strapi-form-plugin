import { Page } from '@strapi/strapi/admin';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './HomePage';
import { ToastContainer } from '../components/ui/Toast';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="*" element={<Page.Error />} />
      </Routes>
      <ToastContainer />
    </>
  );
};

export default App;
