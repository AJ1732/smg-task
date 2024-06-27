import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "../App";
import Main from "../components/layout/Main";
import SuccessPage from "../components/layout/SuccessPage";

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
      {
        path: "/success",
        element: <SuccessPage />,
      },
    ],
  },
  {
    path: "/*",
    element: <Navigate to={`.`} />,
  },
]);
