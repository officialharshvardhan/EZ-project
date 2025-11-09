import React, { useState } from "react";
import bodimg from "../images/bodimg.png";
import bodimg2 from "../images/bodimg2.png";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Validate email format
  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // --- Frontend validation ---
    if (!formData.name || !formData.email || !formData.message) {
      setStatusMessage("⚠️ Please fill in all required fields.");
      return;
    }

    if (!isValidEmail(formData.email)) {
      setStatusMessage("⚠️ Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);
    setStatusMessage("Submitting...");

    try {
      const response = await fetch("https://vernanbackend.ezlab.in/api/contact-us/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("✅ API Response:", data);

        setStatusMessage("✅ Form Submitted Successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatusMessage("❌ Failed to submit form. Try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatusMessage("❌ Something went wrong. Please try again.");
    }

    setIsSubmitting(false);
  };

  return (
    <div className="c-Container">
      {/* <img src={bodimg} alt="" className="bodimg1" /> */}
      <img src={bodimg2} alt="" className="bodimg2" />

      <div className="c-text">
        <p>
          Whether you have an idea, a question, or simply want to explore how we can work together,
          we’re just a message away. <br />
          Let’s catch up over coffee. Great stories always begin with a good conversation.
        </p>
      </div>

      <div className="form">
        <p className="head">Join the Story</p>
        <p className="para">Ready to bring your vision to life? Let’s talk.</p>

        <form onSubmit={handleSubmit} className="form-area">
          <input
            type="text"
            name="name"
            placeholder="Your name*"
            value={formData.name}
            onChange={handleChange}
            required
            className="name"
          />

          <input
            type="email"
            name="email"
            placeholder="Your email*"
            value={formData.email}
            onChange={handleChange}
            required
            className="name"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="name"
          />

          <textarea
            name="message"
            placeholder="Your message*"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
            className="text-area"
          />

          <button type="submit" className="btn" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>

          {statusMessage && <p className="status-message">{statusMessage}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
