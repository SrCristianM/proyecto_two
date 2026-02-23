import Encabezado from "../Encabezado.jsx"
import Navbar from "../Navbar.jsx"
import Pie from "../Pie.jsx"
import ScrollTop from "../ScrollTop.jsx"

import { Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <>
            <Encabezado />
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Pie />
            <ScrollTop />
        </>
    )
}

export default Layout;