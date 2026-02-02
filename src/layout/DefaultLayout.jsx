//import segnaposto da react-router-dom
import { Outlet } from "react-router-dom";

import NavBar from "../component/NavBar";

export default function DefaultLayout() {

    return (
        <>
            <header>
                <NavBar />
            </header>
            <Outlet />
        </>
    );
}