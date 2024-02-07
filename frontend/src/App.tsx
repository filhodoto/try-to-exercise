import React from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Home from 'pages/Home';
import NavBar from 'components/NavBar';
import ErrorPage from 'pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavBar />, // Place the main layout component here
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> }, // Default page to be shown in <Outlet> when in "/" path
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
    </div>
  );
}

export default App;
