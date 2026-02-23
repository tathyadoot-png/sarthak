import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Home from "../components/Home";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: (
          <>
            <Home />
          </>
        ),
      },
      {
        path: "vision",
        element: <VisionM />,
      },
      {
        path: "contact",
        element: <ContactUs />,
      },
     
    ],
  },
]);
