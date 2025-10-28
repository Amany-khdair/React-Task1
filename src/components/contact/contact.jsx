import "./contact.css";
import { useState } from "react";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const id = e.target.id;
        const value = e.target.value;

        const newFormData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        };

        newFormData[id] = value;

        setFormData(newFormData);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let newErrors = {};

        if (!formData.name.trim()) newErrors.name = "A name is required.";
        if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
        newErrors.email = "Invalid email address.";
        if (!formData.phone.trim()) newErrors.phone = "A phone number is required.";
        if (!formData.message.trim())
        newErrors.message = "Message cannot be empty.";

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
        alert("Form submitted successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
        }
    };

  return (
    <section id="contact" className="py-5">
      <div className="container">
        <h2 className="text-center text-uppercase p-color fs-1 fw-bold mb-5"> Contact Me </h2>
        <div className="row justify-content-center">
            <div className="col-lg-8">
                <form onSubmit={handleSubmit}>
                    {["name", "email", "phone", "message"].map((field) => (
                        <div className="form-group mb-4 position-relative" key={field}>
                        {field === "message" ? (
                            <textarea id={field} className={`form-control form-control-lg border-0 border-bottom rounded-0 shadow-none ${ errors[field] ? "is-invalid" : ""}`}
                            value={formData[field]} onChange={handleChange} placeholder=" " rows={4}/>
                        ) : (
                            <input type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                            id={field} className={`form-control form-control-lg border-0 border-bottom rounded-0 shadow-none ${ errors[field] ? "is-invalid" : ""}`}
                            value={formData[field]} onChange={handleChange} placeholder=" "/>
                        )}
                        <label htmlFor={field} className={formData[field] ? "active" : ""}>
                            {field === "name" ? "Full name" : field === "email" ? "Email address" : field === "phone" ? "Phone number" : "Message"}
                        </label>
                        {errors[field] && (
                            <small className="text-danger">{errors[field]}</small>
                        )}
                        </div>
                    ))}

                    <div className="text-start">
                        <button type="submit" className="btn btn-success px-4 py-2">
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
