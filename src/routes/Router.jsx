import { createBrowserRouter } from "react-router";
import App from "../App";
import Events from "../pages/Events/Events";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/events',
                element: <Events />
            }
        ]
    }
])

export default router;