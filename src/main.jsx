import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import 'remixicon/fonts/remixicon.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Hero from './Pages/Hero';
import Collection from './Pages/Collection';

const routes = createBrowserRouter([
  {path:'/', element:<Hero/>,},
  {path:'/collections', element:<Collection/>,},
  {path:'*', element:"404 Not found",},
  
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
