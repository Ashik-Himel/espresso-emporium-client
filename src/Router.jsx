import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import AddCoffee from "./pages/AddCoffee";
import CoffeeDetails from "./pages/CoffeeDetails";
import UpdateCoffee from "./pages/UpdateCoffee";
import ErrorPage from "./pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/add",
        element: <AddCoffee />,
      },
      {
        path: "/update/:id",
        element: <UpdateCoffee />,
        loader: ({ params }) =>
          fetch(
            `https://espresso-emporium-server-side.vercel.app/coffees/${params.id}`
          ),
      },
      {
        path: "/coffees/:id",
        element: <CoffeeDetails />,
        loader: ({ params }) =>
          fetch(
            `https://espresso-emporium-server-side.vercel.app/coffees/${params.id}`
          ),
      },
    ],
  },
]);
