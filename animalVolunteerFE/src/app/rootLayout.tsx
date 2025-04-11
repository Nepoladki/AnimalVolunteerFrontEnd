import {Header} from "../components/Header.tsx";
import {Outlet} from "react-router-dom";
import {MainNavigation} from "../components/Menu.tsx";


export function RootLayout() {
    return (<div>
        <Header/>
        <MainNavigation/>
        <Outlet/>
    </div>
)}