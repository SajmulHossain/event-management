import { createBrowserRouter } from "react-router";
import App from "../App";
import Events from "../pages/Events/Events";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Home from "../pages/Home/Home";
import AddEvent from "../pages/AddEvent/AddEvent";
import PrivetRoute from './PrivetRoute';
import MyEvent from "../pages/MyEvent/MyEvent";
import PageNotFound from "../pages/404/PageNotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PageNotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/events",
        element: (
          <PrivetRoute>
            <Events />
          </PrivetRoute>
        ),
      },
      {
        path: "/add-event",
        element: (
          <PrivetRoute>
            <AddEvent />
          </PrivetRoute>
        ),
      },
      {
        path: '/my-event',
        element: <PrivetRoute>
          <MyEvent />
        </PrivetRoute>
      },
      {
        path: '/edit/:id',
        element: <PrivetRoute>
          <AddEvent />
        </PrivetRoute>
      }
    ],
  },
  {
    path: "/auth/login",
    element: <Login />,
  },
  {
    path: "/auth/register",
    element: <Register />,
  },
]);

export default router;
