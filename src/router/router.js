import {createBrowserRouter} from "react-router-dom";
import Library from "../pages/Library";
import Users from "../pages/Users";
import App from "../App";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: 'library',
                element: <Library/>
            },
            {
                path: 'users',
                element: <Users/>
            }
        ]
    }
])