import React from "react";

function Contact() {
  return (
    <main className="main">
      <div className="content contact">
        <h3 className="contact__heading heading-3">Contact Me</h3>

        <form>
          <label htmlFor="name">Name</label>
          <input type="text" required />

          <label htmlFor="email">Email</label>
          <input type="email" required />

          <label htmlFor="message">Message</label>
          <textarea cols="20" rows="5" required></textarea>

          <input type="submit" value="Send" className="btn" />
        </form>
      </div>
    </main>
  );
}

export default Contact;
