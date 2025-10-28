import './navbar.css';
function Navbar(){
    return <>
    <nav className="navbar navbar-expand-lg bg-color fixed-top">
      <div className="container">
        <a className="navbar-brand text-white text-uppercase fs ps-5" href="#hero">Start Bootstrap</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link text-white fs-nav" href="#portfolio">Portfolio</a></li>
            <li className="nav-item"><a className="nav-link text-white fs-nav ps-4" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link text-white fs-nav ps-4" href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
    </>
}

export default Navbar;
