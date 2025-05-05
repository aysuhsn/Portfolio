import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Wishlist from "./pages/Wishlist";
import Basket from "./pages/basket/Basket";
import DetailPage from "./pages/detailpage/DetailPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminPanel from "./pages/adminpanel/AdminPanel";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/wishlist",
          element: <Wishlist />,
        },
        {
          path: "/basket",
          element: <Basket />,
        },
        {
          path: "/detailpage/:id",
          element: <DetailPage />,
        },
        {
          path: "/adminpanel",
          element: <AdminPanel />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
