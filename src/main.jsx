import React from 'react';
import ReactDOM from 'react-dom';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import Discover from './Discover';
import Inbox from './Inbox';


const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/anasayfa",
      element: <Discover />,
    },
    {
      path: "/gelenkutusu",
      element: <Inbox />,
    },
  ]
);



ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);