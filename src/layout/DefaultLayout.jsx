import { Outlet } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import NavBar from "../components/NavBar.jsx";

export default function DefaultLayout() {

    return (

        <div>
            <Header />

            <Outlet />

            <Footer />
        </div>

    )


}