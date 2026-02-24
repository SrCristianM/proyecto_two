import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
            <div className="container">
                <div className="navbar-nav">
                    <Link to="/" className="nav-link">Inicio</Link>
                    <Link to="/caracteristicas" className="nav-link">Características</Link>
                    <Link to="/historia" className="nav-link">Historia</Link>

                </div>
            </div>
        </nav>
    )
};

export default Navbar;