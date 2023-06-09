import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {RouterProvider} from "react-router";
import {router} from "./router/router";
import 'bootstrap/dist/css/bootstrap.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}>
      <App />
  </RouterProvider>
);

