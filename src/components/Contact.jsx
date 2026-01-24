function Contact() {
  return (
    <section className="contact reveal" id="contact">
      <h2>Contact Me</h2>

      <p className="contact-intro">
        Feel free to reach out for collaborations, projects, or opportunities.
      </p>

      <div className="contact-info stagger">
        {/* Contact Info */}
        <div className="contact-info">
          <h3>Get In Touch With Me</h3>

          <p>
            📧 Email:{" "}
            <a href="fareedmuneeb98@gmail.com">
              Faizan Farid's Email
            </a>
          </p>

          <p>
            💻 GitHub:{" "}
            <a
              href="https://github.com/Faizanfarid-Uk"
              target="_blank"
            >
              Faizan Farid's GitHub
            </a>
          </p>

          <p>
            🔗 LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/faizan-farid-92b9162b5/"
              target="_blank"
            >
              Faizan Farid's LinkedIn
            </a>
          </p>
        </div>

        {/* Contact Form */}
        <form className="contact-form stagger">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
