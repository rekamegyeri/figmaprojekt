


import React from "react";
import "../css/Contact.css";

const Contact = () => {
     return (
          <div className="contact-container">
               <h1 className="contact-title">Contact</h1>
               <p className="contact-subtitle">Fill and submit the form below to contact</p>

               <form className="contact-form">
                    <label>Name:</label>
                    <input type="text" name="name" required />

                    <label>Email:</label>
                    <input type="email" name="email" required />

                    <label>Message:</label>
                    <textarea name="message" required></textarea>

                    <button type="submit">Submit</button>
               </form>
          </div>
     );
};

export default Contact;