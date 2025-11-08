import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CreditTypes from './components/creditTypes.tsx'
import Layout from './components/layouts/Layout.tsx'
import App from './App.tsx'

const router = createBrowserRouter([
  {
    path: "/", element: <Layout />,
    children: [
      { index: true, element: <App /> },
      { path: "/credit-types", element: <CreditTypes /> },
      // {path: "/jobs", element: <Jobs/>},
      // {path: "/application", element: <Application/>},
      // {path: "/simulations", element: <Simulations/>},
      // {path: "/notification", element: <Notification/>},
      // {path: "/setting", element: <Setting/>},
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
