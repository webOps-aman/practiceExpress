import React, { useState, useEffect } from 'react';
import { useAuth } from '../store/auth';

const defaultContactFormData = {
    username: "",
    email: "",
    message: "",
}

const Contact = () => {
  const [contact, setContact] = useState(defaultContactFormData);

  const [userData, setUserData] = useState(true);
  const { user } = useAuth();

  // UseEffect to update contact state when user data is available
  useEffect(() => {
    if (userData && user) {
      setContact({
        username: user.username || "",
        email: user.email || "",
        message: "",
      });
      setUserData(false); // Prevent further updates
    }
  }, [user, userData]); // Dependencies to ensure this effect runs only when necessary

  const handleInput = (e) => {
    const { name, value } = e.target;

    setContact((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(contact);
  
    try {
      const response = await fetch("http://localhost:4022/api/form/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });
  
      if (response.ok) {
        setContact(defaultContactFormData);
        const data = await response.json();
        console.log(data);
        alert("Message sent successfully!");
      } else {
        console.log("Failed to send message.");
        alert("Failed to send message.");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <section className="section-contact">
      <div className="contact-content container">
        <h1 className="main-heading">Contact Us</h1>
      </div>
      {/* Contact page main */}
      <div className="container grid grid-two-cols">
        <div className="contact-img">
          <img src="/images/support.png" alt="We are always ready to help" />
        </div>

        {/* Contact form content */}
        <section className="section-form">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                autoComplete="off"
                value={contact.username}
                onChange={handleInput}
                required
              />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="off"
                value={contact.email}
                onChange={handleInput}
                required
              />
            </div>

            <div>
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                autoComplete="off"
                value={contact.message}
                onChange={handleInput}
                required
                cols="30"
                rows="6"
              ></textarea>
            </div>

            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </section>
      </div>
    </section>
  );
};

export default Contact;
