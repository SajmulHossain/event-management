import { createBrowserRouter } from "react-router";
import App from "../App";
import Events from "../pages/Events/Events";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/events',
                element: <Events />
            }
        ]
    },
    {
        path: '/auth/login',
        element: <Login />
    },
    {
        path: '/auth/register',
        element: <Register />
    }
])

export default router;