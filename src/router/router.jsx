import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AddSchedule from "../pages/AddSchedule";
import AllSchedule from "../pages/AllSchedule";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import UpdateSchedule from "../components/UpdateSchedule";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/add-schedule",
        element: <AddSchedule></AddSchedule>,
      },
      {
        path: "/all-schedule",
        element: <AllSchedule></AllSchedule>,
        loader: () => fetch("http://localhost:4000/schedule"),
      },
      {
        path: "/update-schedule/:id",
        element: <UpdateSchedule></UpdateSchedule>,
        loader: ({ params }) =>
          fetch(`http://localhost:4000/schedule/${params.id}`),
      },
      {
        path: "/sign-in",
        element: <SignIn></SignIn>,
      },
      {
        path: "/sign-up",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);
