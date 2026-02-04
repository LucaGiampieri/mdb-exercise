//import segnaposto da react-router-dom
import { Outlet } from "react-router-dom";

import NavBar from "../component/NavBar";
import MainFooter from "../component/MainFooter";

export default function DefaultLayout() {

    return (
        <>
            <header>
                <NavBar />
            </header>
            <Outlet />
            <footer>
                <MainFooter />
            </footer>
        </>
    );
}