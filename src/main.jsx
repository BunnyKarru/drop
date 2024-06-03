import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import HomePage from './components/Home.jsx';

import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import Header from './components/Header.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Header/>,
      },
      {
        path: "/men",
        element: <HomePage/>,
      },
      {
        path: "/women",
        element:<HomePage/>
      },
      {
        path:"/notFound",
        element:<HomePage/>
      },
      {
        path:"/unisex",
        element:<HomePage/>
      }
    ],
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}/>
  
  </React.StrictMode>,
)
