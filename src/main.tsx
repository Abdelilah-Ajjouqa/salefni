import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CreditTypes from './components/creditTypes.tsx'

const router = createBrowserRouter([
  {path: "/", element: <App />},
  {path: "/credit-types", element: <CreditTypes />}
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
