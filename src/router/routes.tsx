import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "../App";
import Main from "../components/layout/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <App />
      </>
    ),
    children: [
      {
        path: "/",
        element: <Main />,
      },
    ],
  },
  {
    path: "/*",
    element: <Navigate to={`.`} />,
  },
]);
