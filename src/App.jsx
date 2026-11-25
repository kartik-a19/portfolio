
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Mail,
  ArrowUpRight,
  Menu,
  X,
  Sparkles,
} from "lucide-react";
function GithubIcon({ size = 20 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.59 1.21 3.22.93.1-.72.39-1.21.7-1.49-2.47-.28-5.07-1.24-5.07-5.5 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.27-2.6 5.21-5.08 5.49.4.35.75 1.02.75 2.06v3.08c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
    </svg>
  );
}

function LinkedinIcon({ size = 20 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.53v16.94c0 .85.69 1.53 1.55 1.53h16.9c.86 0 1.55-.68 1.55-1.53V3.53c0-.85-.69-1.53-1.55-1.53ZM7.93 18.74H4.97V9.2h2.96v9.54ZM6.45 7.9a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm12.3 10.84h-2.95V14.1c0-1.1-.02-2.51-1.53-2.51-1.53 0-1.77 1.2-1.77 2.43v4.72H9.55V9.2h2.83v1.3h.04c.39-.75 1.36-1.53 2.8-1.53 2.99 0 3.54 1.97 3.54 4.53v5.24Z" />
    </svg>
  );
}
import "./App.css";

const roles = [
  "Computer Science Student",
  "Frontend Developer",
  "Machine Learning Enthusiast",
  "Problem Solver",
];

function App() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((current) => (current + 1) % roles.length);
    }, 2400);

    return () => clearInterval(interval);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* NAVIGATION */}
      <nav className="navbar">
        <div className="nav-container">
          <a href="#home" className="logo" onClick={closeMenu}>
            KA<span>.</span>
          </a>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>

          <div className={`nav-links ${menuOpen ? "active" : ""}`}>
            {[
              "Home",
              "About",
              "Skills",
              "Projects",
              "Achievements",
              "Contact",
            ].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={closeMenu}
              >
                {item}
              </a>
            ))}
          </div>

          <a href="#contact" className="nav-contact">
            Let's Talk <ArrowUpRight size={16} />
          </a>
        </div>
      </nav>

      <main>
        {/* HERO SECTION */}
        <section className="hero" id="home">
          <div className="hero-grid container">
            <motion.div
              className="hero-content"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="availability">
                <span className="status-dot"></span>
                OPEN TO LEARNING & OPPORTUNITIES
              </div>

              <p className="hero-greeting">Hello, I'm</p>

              <h1>
                Kartik
                <br />
                <span>Arora.</span>
              </h1>

              <div className="role-line">
                <Code2 size={19} />
                <span key={roleIndex} className="animated-role">
                  {roles[roleIndex]}
                </span>
              </div>

              <p className="hero-description">
                I'm a Computer Science student at Manav Rachna University,
                passionate about technology, programming and building
                meaningful digital experiences. Always curious, always
                learning, and always ready to create something new.
              </p>

              <div className="hero-buttons">
                <a href="#projects" className="btn-primary">
                  Explore My Work <ArrowUpRight size={18} />
                </a>

                <a href="#contact" className="btn-secondary">
                  Get In Touch <Mail size={17} />
                </a>
              </div>

              {/* SOCIAL LINKS */}
              <div className="social-links">
                <span>FIND ME ON</span>

                <a
                  href="https://github.com/kartik-a19"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  title="GitHub"
                >
                  <GithubIcon size={20} />
                </a>

                <a
                  href="https://www.linkedin.com/in/kartik-arora-683952375/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                >
                  <LinkedinIcon size={20} />
                </a>

                <a
                  href="mailto:arorakartik913@gmail.com"
                  aria-label="Email"
                  title="Email"
                >
                  <Mail size={20} />
                </a>
              </div>

              {/* CODE CARD */}
              <div className="visual-card">
                <div className="visual-card-top">
                  <span></span>
                  <span></span>
                  <span></span>
                  <p>developer.js</p>
                </div>

                <div className="code-content">
                  <p>
                    <span className="code-purple">const</span> developer = {"{"}
                  </p>

                  <p className="code-indent">
                    name: <span className="code-green">'Kartik Arora'</span>,
                  </p>

                  <p className="code-indent">
                    education: <span className="code-green">'B.Tech CSE'</span>,
                  </p>

                  <p className="code-indent">
                    university: <span className="code-green">'MRU'</span>,
                  </p>

                  <p className="code-indent">
                    passion: <span className="code-green">'Technology'</span>,
                  </p>

                  <p className="code-indent">
                    learning: <span className="code-orange">true</span>,
                  </p>

                  <p className="code-indent">
                    building: <span className="code-orange">true</span>
                  </p>

                  <p>{"};"}</p>

                  <br />

                  <p>
                    <span className="code-purple">console</span>.
                    <span className="code-blue">log</span>(
                  </p>

                  <p className="code-indent code-green">
                    "Turning ideas into reality."
                  </p>

                  <p>);</p>
                </div>

                <div className="code-footer">
                  <span>
                    <Sparkles size={14} /> Always learning
                  </span>
                  <span>JS</span>
                </div>
              </div>

              {/* FLOATING TAGS */}
              <div className="floating-tag tag-one">
                <Code2 size={17} /> Building Projects
              </div>

              <div className="floating-tag tag-two">
                <Sparkles size={17} /> Creative Mindset
              </div>

              <div className="visual-caption">
                <span className="caption-line"></span>
                <span>CODE. LEARN. CREATE. REPEAT.</span>
              </div>
            </motion.div>
          </div>

          {/* BOTTOM SCROLL INDICATOR */}
          <div className="hero-bottom container">
            <span>SCROLL TO EXPLORE</span>
            <div className="scroll-line"></div>
            <span>01 / 06</span>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="about-section section">
          <div className="container">
            <motion.div
              className="about-heading"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="section-label">01 — ABOUT ME</p>

              <h2 className="section-title">
                More than just <span className="accent-text">code.</span>
              </h2>

              <p className="section-description">
                A curious mind, a passion for technology, and a journey
                driven by continuous learning.
              </p>
            </motion.div>

            <div className="about-grid">
              <motion.div
                className="about-main-card"
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <span className="about-card-number">01 / MY STORY</span>

                <h3>Hey, I'm Kartik!</h3>

                <p>
                  I'm currently pursuing B.Tech in Computer Science
                  and Engineering at Manav Rachna University.
                  My interest in technology comes from the excitement
                  of understanding how things work and creating
                  something useful with code.
                </p>

                <p>
                  I'm exploring different areas of computer science,
                  including frontend development, programming and
                  machine learning. I enjoy working on projects that
                  help me turn concepts into practical solutions.
                </p>

                <p>
                  I believe growth comes from staying curious,
                  learning consistently, experimenting with new ideas
                  and improving with every project.
                </p>
              </motion.div>

              <motion.div
                className="about-side-cards"
                initial={{ opacity: 0, x: 35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 }}
              >
                <div className="about-info-card">
                  <div className="about-icon">
                    <Code2 size={22} />
                  </div>
                  <div>
                    <span>WHAT I EXPLORE</span>
                    <h3>Technology & Development</h3>
                    <p>
                      Programming, frontend development and machine learning.
                    </p>
                  </div>
                </div>

                <div className="about-info-card">
                  <div className="about-icon">
                    <Sparkles size={22} />
                  </div>
                  <div>
                    <span>WHAT DRIVES ME</span>
                    <h3>Learning by Building</h3>
                    <p>
                      Turning theoretical knowledge into practical projects.
                    </p>
                  </div>
                </div>

                <div className="about-info-card">
                  <div className="about-icon">
                    <Mail size={22} />
                  </div>
                  <div>
                    <span>MY APPROACH</span>
                    <h3>Curiosity & Consistency</h3>
                    <p>
                      Exploring new ideas and improving one step at a time.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="skills-section section">
          <div className="container">
            <motion.div
              className="skills-heading"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="section-label">02 — MY SKILLS</p>

              <h2 className="section-title">
                Tools I use to <span className="accent-text">create.</span>
              </h2>

              <p className="section-description">
                Technologies and concepts I'm learning and working with
                as I grow as a computer science student.
              </p>
            </motion.div>

            <div className="skills-grid">
              {[
                {
                  number: "01",
                  title: "Programming Languages",
                  icon: "⌨",
                  skills: ["C", "Python", "JavaScript"],
                  description:
                    "Building programming fundamentals and logical thinking.",
                },
                {
                  number: "02",
                  title: "Frontend Development",
                  icon: "✦",
                  skills: ["HTML", "CSS", "JavaScript", "React"],
                  description:
                    "Creating responsive and interactive web experiences.",
                },
                {
                  number: "03",
                  title: "Machine Learning",
                  icon: "◈",
                  skills: ["Python", "NumPy", "Pandas", "Scikit-learn"],
                  description:
                    "Exploring data analysis and machine learning concepts.",
                },
                {
                  number: "04",
                  title: "Tools & Platforms",
                  icon: "⚙",
                  skills: ["VS Code", "Git", "GitHub", "Google Colab"],
                  description:
                    "Using development tools to build and manage projects.",
                },
              ].map((category, index) => (
                <motion.div
                  className="skill-card"
                  key={category.number}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.12 }}
                >
                  <div className="skill-card-top">
                    <span className="skill-icon">{category.icon}</span>
                    <span className="skill-number">{category.number}</span>
                  </div>

                  <h3>{category.title}</h3>

                  <p className="skill-description">
                    {category.description}
                  </p>

                  <div className="skill-tags">
                    {category.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="projects-section section">
          <div className="container">
            <motion.div
              className="projects-heading"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="section-label">03 — MY WORK</p>

              <h2 className="section-title">
                Turning ideas into <span className="accent-text">projects.</span>
              </h2>

              <p className="section-description">
                A look at what I've been building, exploring and learning
                through practical implementation.
              </p>
            </motion.div>

            <motion.div
              className="project-featured-card"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              {/* PROJECT VISUAL */}
              <div className="project-visual">
                <div className="project-visual-glow"></div>

                <div className="project-window">
                  <div className="project-window-top">
                    <span></span>
                    <span></span>
                    <span></span>
                    <p>customer_churn.ipynb</p>
                  </div>

                  <div className="project-chart">
                    <div className="chart-heading">
                      <span>Customer Churn Analysis</span>
                      <span>DATA OVERVIEW</span>
                    </div>

                    <div className="chart-bars">
                      <div className="chart-bar-item">
                        <div className="chart-bar bar-one"></div>
                        <span>No Churn</span>
                        <strong>73.46%</strong>
                      </div>

                      <div className="chart-bar-item">
                        <div className="chart-bar bar-two"></div>
                        <span>Churn</span>
                        <strong>26.54%</strong>
                      </div>
                    </div>

                    <div className="chart-footer">
                      <span>7,043 customer records</span>
                      <span>Telco Dataset</span>
                    </div>
                  </div>
                </div>

                <div className="project-floating-label">
                  <Sparkles size={16} /> Machine Learning
                </div>
              </div>

              {/* PROJECT CONTENT */}
              <div className="project-content">
                <div className="project-meta">
                  <span>FEATURED PROJECT</span>
                  <span>01 / 01</span>
                </div>

                <h3>Customer Churn Prediction</h3>

                <p className="project-summary">
                  Can we predict which customers are likely to leave a
                  telecom service? This project explores customer data,
                  identifies patterns and compares machine learning
                  classification models to understand churn behaviour.
                </p>

                <div className="project-highlights">
                  <div>
                    <strong>7,043</strong>
                    <span>Customer Records</span>
                  </div>

                  <div>
                    <strong>21</strong>
                    <span>Original Features</span>
                  </div>

                  <div>
                    <strong>3</strong>
                    <span>Models Compared</span>
                  </div>
                </div>

                <div className="project-tech">
                  {[
                    "Python",
                    "Pandas",
                    "NumPy",
                    "Scikit-learn",
                    "Matplotlib",
                  ].map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <div className="project-actions">
                  <a
                    href={`${import.meta.env.BASE_URL}customer-churn.html`}
                    className="btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Project <ArrowUpRight size={18} />
                  </a>

                  <a
                    href="https://colab.research.google.com/drive/1kstNuHZXFUsjrSEr729gnlzuDcRMRlH7?usp=sharing"
                    className="btn-secondary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Notebook <ArrowUpRight size={18} />
                  </a>
                </div>
              </div>

              {/* PROJECT IMAGE GALLERY */}
              <div className="project-gallery">
                <div className="project-gallery-item">
                  <p className="gallery-label">PROJECT POSTER</p>

                  <a
                    href={`${import.meta.env.BASE_URL}images/customer-churn-poster.png`}
                    target="_blank"
                    rel="noreferrer"
                    className="gallery-image-link"
                  >
                    <img
                      src={`${import.meta.env.BASE_URL}images/customer-churn-poster.png`}
                      alt="Customer Churn Prediction project poster"
                    />

                    <span className="gallery-view-button">
                      View Full Poster <ArrowUpRight size={16} />
                    </span>
                  </a>
                </div>

                <div className="project-gallery-item">
                  <p className="gallery-label">HYPERPARAMETER TUNING</p>

                  <a
                    href={`${import.meta.env.BASE_URL}images/Churn_GridSearch_Simulator.jpg`}
                    target="_blank"
                    rel="noreferrer"
                    className="gallery-image-link"
                  >
                    <img
                      src={`${import.meta.env.BASE_URL}images/Churn_GridSearch_Simulator.jpg`}
                      alt="Customer Churn hyperparameter tuning results"
                    />

                    <span className="gallery-view-button">
                      View Full Results <ArrowUpRight size={16} />
                    </span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ACHIEVEMENTS SECTION */}
        <section id="achievements" className="achievements-section section">
          <div className="container">
            <motion.div
              className="achievements-heading"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="section-label">04 — MILESTONES</p>

              <h2 className="section-title">
                Learning, growing & <span className="accent-text">achieving.</span>
              </h2>

              <p className="section-description">
                A few milestones and learning experiences that reflect my
                academic journey and continuous effort to improve.
              </p>
            </motion.div>

            <div className="achievements-grid">
              <motion.div
                className="achievement-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="achievement-icon">🏆</span>
                <span className="achievement-type">ACADEMIC RECOGNITION</span>
                <h3>Dean's List</h3>
                <p>
                  Recognised on the Dean's List for academic performance,
                  achieving this distinction in two consecutive recognitions.
                </p>
              </motion.div>

              <motion.div
                className="achievement-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.12 }}
              >
                <span className="achievement-icon">📘</span>
                <span className="achievement-type">CERTIFICATION</span>
                <h3>Infosys Springboard</h3>
                <p>
                  Completed Computer Fundamentals and Python Fundamentals
                  courses to strengthen core technical knowledge.
                </p>
              </motion.div>

              <motion.div
                className="achievement-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.24 }}
              >
                <span className="achievement-icon">💡</span>
                <span className="achievement-type">CONTINUOUS LEARNING</span>
                <h3>Machine Learning Courses</h3>
                <p>
                  Explored Decision Trees, Ensemble Learning, AI Foundations,
                  Value Estimation and Feature Engineering through LinkedIn Learning.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="contact-section section">
          <div className="container">
            <motion.div
              className="contact-heading"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="section-label">05 — GET IN TOUCH</p>

              <h2 className="section-title">
                Let's build something <span className="accent-text">together.</span>
              </h2>

              <p className="section-description">
                Have an idea, an opportunity, or just want to connect?
                I'd be happy to hear from you.
              </p>
            </motion.div>

            <div className="contact-grid">
              <motion.div
                className="contact-info"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <h3>Let's start a conversation.</h3>

                <p>
                  I'm always interested in learning, collaborating on projects
                  and connecting with people who share an interest in technology.
                </p>

                {/* EMAIL */}
                <a
                  href="mailto:arorakartik913@gmail.com"
                  className="contact-detail"
                >
                  <span className="contact-detail-icon">
                    <Mail size={20} />
                  </span>
                  <span>
                    <small>EMAIL ME</small>
                    <strong>arorakartik913@gmail.com</strong>
                  </span>
                  <ArrowUpRight size={18} />
                </a>

                {/* GITHUB */}
                <a
                  href="https://github.com/kartik-a19"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-detail"
                >
                  <span className="contact-detail-icon">
                    <GithubIcon size={20} />
                  </span>
                  <span>
                    <small>GITHUB</small>
                    <strong>kartik-a19</strong>
                  </span>
                  <ArrowUpRight size={18} />
                </a>

                {/* LINKEDIN */}
                <a
                  href="https://www.linkedin.com/in/kartik-arora-683952375/"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-detail"
                >
                  <span className="contact-detail-icon">
                    <LinkedinIcon size={20} />
                  </span>
                  <span>
                    <small>LINKEDIN</small>
                    <strong>Connect with me</strong>
                  </span>
                  <ArrowUpRight size={18} />
                </a>
              </motion.div>

              {/* CONTACT FORM */}
              <motion.div
                className="contact-form-card"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <h3>Send me a message</h3>
                <p>
                  Fill in the details and your email app will open with the message.
                </p>

                <form
                  onSubmit={(event) => {
                    event.preventDefault();

                    const formData = new FormData(event.currentTarget);
                    const name = formData.get("name");
                    const email = formData.get("email");
                    const subject = formData.get("subject");
                    const message = formData.get("message");

                    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;

                    const mailto = `mailto:arorakartik913@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

                    window.location.href = mailto;
                  }}
                >
                  <label htmlFor="contact-name">Your Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    required
                  />

                  <label htmlFor="contact-email">Your Email</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                  />

                  <label htmlFor="contact-subject">Subject</label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    placeholder="What is this about?"
                    required
                  />

                  <label htmlFor="contact-message">Your Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows="5"
                    placeholder="Write your message here..."
                    required
                  ></textarea>

                  <button type="submit" className="btn-primary contact-submit">
                    Send Message <ArrowUpRight size={18} />
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-content">
          <a href="#home" className="footer-logo">
            KA<span>.</span>
          </a>

          <p>
            Designed & built with curiosity by <strong>Kartik Arora</strong>.
          </p>

          {/* FOOTER SOCIAL ICONS */}
          <div className="footer-links">
            <a
              href="https://github.com/kartik-a19"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              title="GitHub"
            >
              <Github size={22} />
            </a>

            <a
              href="https://www.linkedin.com/in/kartik-arora-683952375/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <Linkedin size={22} />
            </a>

            <a
              href="mailto:arorakartik913@gmail.com"
              aria-label="Email"
              title="Email"
            >
              <Mail size={22} />
            </a>
          </div>

          <span className="footer-copyright">
            © {new Date().getFullYear()} Kartik Arora. All rights reserved.
          </span>
        </div>
      </footer>
    </>
  );
}

export default App;
