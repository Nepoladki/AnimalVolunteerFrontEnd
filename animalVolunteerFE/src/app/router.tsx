import {createBrowserRouter} from "react-router-dom";
import {RootLayout} from "./rootLayout.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        children: [
            {
                path: "/pets",
                element: <div>Pets</div>
            },
            {
                path: "/page2",
                element: <div>Page2</div>
            }
        ]
    },
]);