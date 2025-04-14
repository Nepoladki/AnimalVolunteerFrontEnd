import {createBrowserRouter} from "react-router-dom";
import {RootLayout} from "./rootLayout.tsx";
import Game from "../pages/tic-tac-toe/game.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        children: [
            {
                path: "login",
                element: <div>Login Page</div>
            },
            {
                path: "registration",
                element: <div>registration</div>
            },
            {
                path: "volunteers",
                element: <div>volunteers</div>
            },
            {
                path: "profile",
                element: <>
                    <div>profile</div>
                    <div>profile</div>
                    <div>profile</div>
                    <div>profile</div>
                </>
            },
            {
                path: "tic-tac",
                element: <Game/>
            }
        ]
    },
]);