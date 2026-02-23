import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
            <div className="container">
                <div className="navbar-nav">
                    <Link to="/" className="nav-link">Inicio</Link>
                    <Link to="/caracteristicas" className="nav-link">Características</Link>
                    <Link to="/historia" className="nav-link">Historia</Link>
                    <Link to="/cristian" className="nav-link">Cristian</Link>
                    <Link to="/cristian2" className="nav-link">Cristian2</Link>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;