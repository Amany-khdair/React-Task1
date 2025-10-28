import "./footer.css";

function Footer() {
  return (
    <section className="footer py-5">
        <div className="container">
            <div className="row text-center">
            
            <div className="col-md-4 d-flex flex-column align-items-center">
                <h3 className="fw-semibold mb-4 fs-4">Location</h3>
                <span className="fs-6">2215 John Daniel Drive</span>
                <span className="fs-6">Clark, MO 65243</span>
            </div>
            
            <div className="col-md-4 d-flex flex-column align-items-center">
                <h3 className="fw-semibold mb-4 fs-4">Around the Web</h3>
                <div className="d-flex gap-3">
                <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-dribbble"></i></a>
                </div>
            </div>
            
            <div className="col-md-4 d-flex flex-column align-items-center">
                <h3 className="fw-semibold mb-4 fs-4">About Freelancer</h3>
                <p className="fs-6 mb-0">Freelance is a free to use, MIT licensed</p>
                <p className="fs-6">Bootstrap theme created by Start Bootstrap.</p>
            </div>
            
            </div>
        </div>

        <div className="copyright py-4 text-center text-white">
            <span className="fs-6">Copyright © Amany Khdair 2025</span>
        </div>
    </section>
  );
}

export default Footer;
