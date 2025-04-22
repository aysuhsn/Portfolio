import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Services from './pages/Services'
import Layout from './pages/Layout'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/about',
          element: <About />,
        },
        {
          path: '/contact',
          element: <Contact />,
        },
        {
          path: '/service',
          element: <Services />,
        },
      ],
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}
export default App;