import './about.css';
function About() {
  return (
    <section id="about" className="py-5">
      <div className="container text-center">
        <h2 className="text-uppercase text-white fs-1 fw-bold mb-5 py-5">About</h2>

        <div className="row justify-content-center align-items-stretch">
          <div className="col-md-4 d-flex align-items-center justify-content-center para">
            <p>
              Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes
              the complete source files including HTML, CSS, and JavaScript as well as optional SASS
              stylesheets for easy customization.
            </p>
          </div>

          <div className="col-md-4 d-flex align-items-center justify-content-center para">
            <p>
              You can create your own custom avatar for the masthead, change the icon in the dividers,
              and add your email address to the contact form to make it fully functional!
            </p>
          </div>
        </div>

        <button className="btn btn-outline-light btn-lg fw-semibold about-btn py-2 px-3 my-3">Free Download!</button>

      </div>
    </section>
  );
}

export default About;
