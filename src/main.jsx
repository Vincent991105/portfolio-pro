import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux';
import { RouterProvider } from "react-router-dom";
import router from "./router.jsx";
import store from "./store.jsx";
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <Provider store={store}>
      <RouterProvider router={router} />
    </Provider> */}
  </StrictMode>,
)
