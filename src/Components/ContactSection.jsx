import React, { useState } from "react";
import axios from "axios";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";
import { NavLink } from "react-router-dom";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("sending");

    try {
      // Replace with your deployed Google Apps Script URL
      const scriptURL = 'https://script.google.com/macros/s/AKfycbyXIwe0yKvuy8dAWn9dHAu33imDxb8HrTTk6W_r2hUOEKJ7VIJ5b5tDSJbOS-8TDc2_ow/exec';

      const response = await fetch(scriptURL, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json'
        },
        mode: 'no-cors' // Important for cross-origin requests
      });

      // Due to 'no-cors' mode, we can't read the response
      // So we'll just assume success after a delay
      setTimeout(() => {
        setFormStatus("success");
        // Reset form
        setFormData({
          name: "",
          email: "",
          message: ""
        });
      }, 1000);

    } catch (error) {
      console.error('Error!', error);
      setFormStatus("error");
    }
  };

  return (
    <div id="contact" className="relative w-full py-16 px-4 text-white overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 -left-20 w-64 h-64 rounded-full bg-primary opacity-10 blur-3xl"></div>
      <div className="absolute bottom-0 -right-20 w-64 h-64 rounded-full bg-secondary opacity-10 blur-3xl"></div>
      <div className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full bg-blue-500 opacity-5 blur-3xl"></div>
      <div className="absolute bottom-1/3 left-1/3 w-72 h-72 rounded-full bg-purple-500 opacity-5 blur-3xl"></div>

      <div className="relative max-w-5xl mx-auto px-4 z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-neutral/80 max-w-2xl mx-auto text-lg">
            Have a project in mind or just want to say hello? Feel free to reach out!
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10 shadow-lg backdrop-blur-sm">
              <h3 className="text-2xl font-semibold mb-6 text-white">Contact Information</h3>
              <div className="space-y-6">
                <ContactItem icon={<Mail className="w-6 h-6 text-primary break-all" />} label="Email" value="bavishiprince90@gmail.com" href="mailto:bavishiprince90@gmail.com" />
                <ContactItem icon={<Phone className="w-6 h-6 text-primary break-all" />} label="Phone" value="+91 90160 91157" href="tel:+919016091157" />
                <ContactItem icon={<MapPin className="w-6 h-6 text-primary break-all" />} label="Location" value="Amreli, Gujarat, India" />
              </div>
              <div className="mt-10">
                <h4 className="text-lg font-medium mb-4 text-white">Connect with me</h4>
                <div className="flex gap-4">
                  <SocialIcon link="https://github.com/Prince-Project-ai" Icon={Github} />
                  <SocialIcon link="https://www.linkedin.com/in/prince-bavishi-58638b250/" Icon={Linkedin} />
                  <SocialIcon link="https://x.com/PrinceBavishi10" Icon={Twitter} />
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10 shadow-lg backdrop-blur-sm">
              <h3 className="text-2xl font-semibold mb-6 text-white">Send Me a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InputField label="Your Name" name="name" type="text" value={formData.name} onChange={handleChange} />
                  <InputField label="Your Email" name="email" type="email" value={formData.email} onChange={handleChange} />
                </div>

                <div>
                  <label htmlFor="message" className="block text-neutral/80 mb-2">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={formStatus === "sending"}
                    className={`flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-secondary text-white py-3 px-6 rounded-lg transition w-full md:w-auto 
                    ${formStatus === "sending" ? "opacity-70 cursor-not-allowed" : "hover:opacity-90"}`}
                    aria-busy={formStatus === "sending"}
                  >
                    {formStatus === "sending" ? (
                      <>Sending...</>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>

                  {formStatus === "success" && (
                    <Alert type="success" message="Your message has been sent successfully!" />
                  )}
                  {formStatus === "error" && (
                    <Alert type="error" message="Something went wrong. Please try again!" />
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable Input Component
const InputField = ({ label, name, type, value, onChange }) => (
  <div>
    <label htmlFor={name} className="block text-neutral/80 mb-2">{label}</label>
    <input
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      required
      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
    />
  </div>
);

// Reusable Contact Info Block
const ContactItem = ({ icon, label, value, href }) => (
  <div className="flex items-center gap-4">
    <div className="bg-primary/20 p-3 rounded-full">{icon}</div>
    <div>
      <p className="text-neutral/60 text-sm">{label}</p>
      {href ? (
        <a href={href} className="text-white hover:text-primary break-all transition-colors">{value}</a>
      ) : (
        <p className="text-white">{value}</p>
      )}
    </div>
  </div>
);

// Social Media Icon Button
const SocialIcon = ({ link, Icon }) => (
  <NavLink
    to={link}
    target="_blank"
    rel="noopener noreferrer"
    className="group p-2 rounded-full bg-white/5 border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-110"
  >
    <Icon className="w-5 h-5 text-white group-hover:text-primary" />
  </NavLink>
);

// Alert component for success/error
const Alert = ({ type, message }) => {
  const styles = {
    success: "bg-green-500/20 text-green-400",
    error: "bg-red-500/20 text-red-400",
  };

  return (
    <div className={`mt-4 p-3 rounded-lg flex items-center gap-2 ${styles[type]} transition-all`}>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path
          fillRule="evenodd"
          d={type === "success"
            ? "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            : "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"}
          clipRule="evenodd"
        />
      </svg>
      <span>{message}</span>
    </div>
  );
};

export default React.memo(ContactSection);