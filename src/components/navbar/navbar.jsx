import { Link } from "react-router-dom";
import './navbar.css';
function Navbar(){
    return (
    <nav className="navbar navbar-expand-lg bg-color fixed-top">
      <div className="container">
        <Link className="navbar-brand text-white text-uppercase fs-4 fs ps-5" to={'/'}>Start Bootstrap</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link text-white fs-5 fs-nav" to={'/'}>Home</Link></li>            
            <li className="nav-item"><Link className="nav-link text-white fs-5 fs-nav ps-4" to={'/portfolio'}>Portfolio</Link></li>
            <li className="nav-item"><Link className="nav-link text-white fs-5 fs-nav ps-4" to={'/about'}>About</Link></li>
            <li className="nav-item"><Link className="nav-link text-white fs-5 fs-nav ps-4" to={'/contact'}>Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
    )
}

export default Navbar;
