import { ToastContainer, toast, ToastPosition, Zoom } from 'react-toastify';
import { ToastAlert } from './ToastAlert';

const options = {
  position: 'top-right' as ToastPosition,
  autoClose: 3000,
  closeButton: false,
  closeOnClick: true,
  hideProgressBar: true,
  pauseOnHover: false,
  pauseOnFocusLoss: false,
  draggable: false,
  transition: Zoom,
  style: { width: 'fit-content', minHeight: 0, padding: 0, right: 200 },
  bodyStyle: { padding: 0 },
};

const showSuccess = (message: string) =>
  toast(<ToastAlert title="Success:" variant="success" message={message} />, options);

const showError = (message: string) =>
  toast(<ToastAlert title="Error:" variant="danger" message={message} />, options);

<ToastContainer {...options} style={{ backgroundColor: 'red' }} />;

export { ToastContainer, showSuccess, showError };
