import {Header} from "../components/Header.tsx";
import {Outlet} from "react-router-dom";
import {MainNavigation} from "../components/Menu.tsx";
import Footer from "../components/Footer.tsx";


export function RootLayout() {
    return (
        <div className='h-full'>
            <Header />
            <MainNavigation/>
                <div className="min-h-screen h-full">
            <Outlet />
                </div>
            <Footer />
        </div>
)}