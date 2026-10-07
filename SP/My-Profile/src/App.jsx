import React, { useEffect, useState } from "react";
import "./App.css";

// ======================================================
// PROFILE HEADER
// Demonstrates SIMPLE PROPS
// ======================================================

function ProfileHeader({ name, role, location }) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(128);

  const handleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  return (
    <div className="profile-header">

      <div className="avatar-container">
        <div className="avatar">
          MB
        </div>

        <div className="online-dot"></div>
      </div>

      <div className="profile-info">

        <div className="name-row">
          <h1>{name}</h1>
          <span className="verified">✓</span>
        </div>

        <p className="role">
          {role}
        </p>

        <p className="location">
          📍 {location}
        </p>

        <button
          className={`like-button ${liked ? "liked" : ""}`}
          onClick={handleLike}
        >
          {liked ? "❤️ Liked" : "🤍 Like"}
          <span>{likes}</span>
        </button>

      </div>

    </div>
  );
}


// ======================================================
// ABOUT
// Demonstrates OBJECT AS PROP
// ======================================================

function About({ profile }) {
  return (
    <section className="card reveal" id="about">

      <div className="section-title">
        <span className="section-icon">👨‍💻</span>
        <div>
          <h2>About Me</h2>
          <p>Get to know me</p>
        </div>
      </div>

      <p className="about-text">
        I am <strong>{profile.name}</strong>, an Information Technology
        student and developer passionate about building intelligent
        software, modern web applications and innovative technology
        solutions.
      </p>

      <div className="info-grid">

        <div className="info-box">
          <span>🎓 College</span>
          <strong>{profile.college}</strong>
        </div>

        <div className="info-box">
          <span>💻 Department</span>
          <strong>{profile.department}</strong>
        </div>

        <div className="info-box">
          <span>🎯 Focus</span>
          <strong>{profile.focus}</strong>
        </div>

        <div className="info-box">
          <span>📍 Location</span>
          <strong>{profile.location}</strong>
        </div>

      </div>

    </section>
  );
}


// ======================================================
// SKILLS
// Demonstrates ARRAY OF OBJECTS + map()
// ======================================================

function Skills({ skills }) {

  return (
    <section className="card reveal" id="skills">

      <div className="section-title">
        <span className="section-icon">🛠️</span>

        <div>
          <h2>Technical Skills</h2>
          <p>Technologies I work with</p>
        </div>
      </div>

      <div className="skills">

        {skills.map((skill) => (

          <div
            className="skill"
            key={skill.name}
          >

            <div className="skill-icon">
              {skill.icon}
            </div>

            <div className="skill-details">

              <strong>{skill.name}</strong>

              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{
                    width: `${skill.level}%`
                  }}
                ></div>
              </div>

            </div>

            <span className="skill-level">
              {skill.level}%
            </span>

          </div>

        ))}

      </div>

    </section>
  );
}


// ======================================================
// PROJECTS
// Demonstrates OBJECTS + map()
// AND NESTED map()
// ======================================================

function Projects({ projects }) {

  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="card reveal" id="projects">

      <div className="section-title">

        <span className="section-icon">🚀</span>

        <div>
          <h2>Featured Projects</h2>
          <p>Things I have built</p>
        </div>

      </div>

      <div className="projects">

        {projects.map((project) => (

          <div
            className="project-card"
            key={project.id}
            onClick={() => setSelectedProject(project)}
          >

            <div className="project-top">

              <div className="project-icon">
                {project.icon}
              </div>

              <span className="project-number">
                0{project.id}
              </span>

            </div>

            <h3>
              {project.title}
            </h3>

            <p>
              {project.description}
            </p>

            <div className="tags">

              {project.technologies.map((tech) => (

                <span key={tech}>
                  {tech}
                </span>

              ))}

            </div>

            <div className="project-link">
              View details →
            </div>

          </div>

        ))}

      </div>


      {/* PROJECT POPUP */}

      {selectedProject && (

        <div
          className="modal-overlay"
          onClick={() => setSelectedProject(null)}
        >

          <div
            className="project-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="close-button"
              onClick={() => setSelectedProject(null)}
            >
              ✕
            </button>

            <div className="modal-icon">
              {selectedProject.icon}
            </div>

            <h2>
              {selectedProject.title}
            </h2>

            <p>
              {selectedProject.description}
            </p>

            <h4>Technologies</h4>

            <div className="tags">

              {selectedProject.technologies.map((tech) => (
                <span key={tech}>
                  {tech}
                </span>
              ))}

            </div>

          </div>

        </div>

      )}

    </section>
  );
}


// ======================================================
// EDUCATION
// Demonstrates ARRAY OF OBJECTS + map()
// ======================================================

function Education({ education }) {

  return (
    <section className="card reveal" id="education">

      <div className="section-title">

        <span className="section-icon">🎓</span>

        <div>
          <h2>Education</h2>
          <p>My academic journey</p>
        </div>

      </div>

      <div className="timeline">

        {education.map((item, index) => (

          <div
            className="timeline-item"
            key={index}
          >

            <div className="timeline-dot"></div>

            <div className="timeline-content">

              <span className="timeline-year">
                {item.year}
              </span>

              <h3>
                {item.degree}
              </h3>

              <p>
                {item.institution}
              </p>

              <span className="timeline-department">
                {item.department}
              </span>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}


// ======================================================
// CONTACT
// OBJECT AS PROP
// ======================================================

function Contact({ contact }) {

  return (
    <section className="card reveal" id="contact">

      <div className="section-title">

        <span className="section-icon">📬</span>

        <div>
          <h2>Let's Connect</h2>
          <p>Have an idea? Let's build something.</p>
        </div>

      </div>

      <div className="contact-grid">

        <div className="contact-box">
          <div className="contact-icon">
            📧
          </div>

          <span>Email</span>

          <strong>
            {contact.email}
          </strong>
        </div>


        <div className="contact-box">
          <div className="contact-icon">
            💻
          </div>

          <span>GitHub</span>

          <strong>
            {contact.github}
          </strong>
        </div>


        <div className="contact-box">
          <div className="contact-icon">
            🔗
          </div>

          <span>LinkedIn</span>

          <strong>
            {contact.linkedin}
          </strong>
        </div>

      </div>

    </section>
  );
}


// ======================================================
// MAIN APP
// ======================================================

function App() {

  const [darkMode, setDarkMode] = useState(false);

  const [showContact, setShowContact] = useState(false);


  // ====================================================
  // PROFILE OBJECT
  // ====================================================

  const profile = {

    name: "Murasoli Balaji",

    role: "Information Technology Student & Developer",

    location: "Tamil Nadu, India",

    college: "Kongu Engineering College",

    department: "Information Technology",

    focus: "AI • Web Development • Software Engineering"

  };


  // ====================================================
  // SKILLS ARRAY OF OBJECTS
  // ====================================================

  const skills = [

    {
      name: "React",
      icon: "⚛️",
      level: 90
    },

    {
      name: "JavaScript",
      icon: "🟨",
      level: 88
    },

    {
      name: "Python",
      icon: "🐍",
      level: 85
    },

    {
      name: "Flutter",
      icon: "📱",
      level: 78
    },

    {
      name: "Node.js",
      icon: "🟢",
      level: 80
    },

    {
      name: "MongoDB",
      icon: "🍃",
      level: 76
    },

    {
      name: "Git & GitHub",
      icon: "🔧",
      level: 82
    },

    {
      name: "Artificial Intelligence",
      icon: "🤖",
      level: 85
    }

  ];


  // ====================================================
  // PROJECTS ARRAY OF OBJECTS
  // ====================================================

  const projects = [

    {
      id: 1,

      title: "ULTRON Personal AI Assistant",

      icon: "🤖",

      description:
        "A personal AI assistant designed for voice interaction, computer automation and intelligent task execution.",

      technologies: [
        "Python",
        "AI",
        "Voice Assistant",
        "Automation"
      ]
    },


    {
      id: 2,

      title: "Dam-Break & Flood Simulation",

      icon: "🌊",

      description:
        "A flood simulation system for predicting water flow, inundation depth and affected areas using terrain and geographic data.",

      technologies: [
        "Python",
        "GIS",
        "DEM",
        "Hydrodynamics"
      ]
    },


    {
      id: 3,

      title: "React Web Applications",

      icon: "⚛️",

      description:
        "Modern responsive web applications using React, JavaScript, reusable components, props and dynamic data rendering.",

      technologies: [
        "React",
        "JavaScript",
        "CSS",
        "Vite"
      ]
    },


    {
      id: 4,

      title: "MongoDB Backup System",

      icon: "💾",

      description:
        "An automated Node.js system that creates scheduled MongoDB database backups.",

      technologies: [
        "Node.js",
        "MongoDB",
        "Cron"
      ]
    }

  ];


  // ====================================================
  // EDUCATION ARRAY
  // ====================================================

  const education = [

    {
      degree: "Information Technology",

      institution:
        "Kongu Engineering College",

      department:
        "Engineering Student",

      year: "Present"
    }

  ];


  // ====================================================
  // CONTACT OBJECT
  // ====================================================

  const contact = {

    email: "Your Email",

    github: "Your GitHub",

    linkedin: "Your LinkedIn"

  };


  // ====================================================
  // SCROLL REVEAL ANIMATION
  // ====================================================

  useEffect(() => {

    const observer = new IntersectionObserver(

      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            entry.target.classList.add("visible");

          }

        });

      },

      {
        threshold: 0.15
      }

    );


    const elements =
      document.querySelectorAll(".reveal");


    elements.forEach((element) => {

      observer.observe(element);

    });


    return () => {

      elements.forEach((element) => {

        observer.unobserve(element);

      });

    };

  }, []);


  // ====================================================
  // SCROLL FUNCTION
  // ====================================================

  const scrollToSection = (id) => {

    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth"
      });

  };


  return (

    <div
      className={`app ${darkMode ? "dark" : ""}`}
    >

      {/* =================================================
          NAVIGATION
      ================================================= */}

      <nav className="navbar">

        <div className="nav-logo">
          MB<span>.</span>
        </div>


        <div className="nav-links">

          <button
            onClick={() =>
              scrollToSection("about")
            }
          >
            About
          </button>

          <button
            onClick={() =>
              scrollToSection("skills")
            }
          >
            Skills
          </button>

          <button
            onClick={() =>
              scrollToSection("projects")
            }
          >
            Projects
          </button>

          <button
            onClick={() =>
              scrollToSection("education")
            }
          >
            Education
          </button>

        </div>


        <button
          className="theme-button"
          onClick={() =>
            setDarkMode(!darkMode)
          }
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

      </nav>


      {/* =================================================
          HERO
      ================================================= */}

      <header className="hero">

        <div className="hero-background">

          <div className="glow glow-one"></div>
          <div className="glow glow-two"></div>

        </div>


        <div className="hero-content">

          <div className="hero-badge">
            <span></span>
            Available for opportunities
          </div>


          <ProfileHeader
            name={profile.name}
            role={profile.role}
            location={profile.location}
          />


          <p className="intro">

            Building intelligent software,
            modern web applications and
            innovative technology solutions.

          </p>


          <div className="hero-buttons">

            <button
              className="primary-button"
              onClick={() =>
                scrollToSection("projects")
              }
            >
              🚀 View Projects
            </button>


            <button
              className="outline-button"
              onClick={() =>
                setShowContact(true)
              }
            >
              📩 Contact Me
            </button>

          </div>


          <div className="stats">

            <div className="stat">
              <strong>4+</strong>
              <span>Projects</span>
            </div>

            <div className="stat">
              <strong>8+</strong>
              <span>Technologies</span>
            </div>

            <div className="stat">
              <strong>∞</strong>
              <span>Ideas</span>
            </div>

          </div>

        </div>

      </header>


      {/* =================================================
          MAIN
      ================================================= */}

      <main className="container">

        <About
          profile={profile}
        />

        <Skills
          skills={skills}
        />

        <Projects
          projects={projects}
        />

        <Education
          education={education}
        />

        <Contact
          contact={contact}
        />

      </main>


      {/* =================================================
          CONTACT POPUP
      ================================================= */}

      {showContact && (

        <div
          className="modal-overlay"
          onClick={() =>
            setShowContact(false)
          }
        >

          <div
            className="contact-modal"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            <button
              className="close-button"
              onClick={() =>
                setShowContact(false)
              }
            >
              ✕
            </button>

            <div className="modal-icon">
              📩
            </div>

            <h2>
              Let's Connect!
            </h2>

            <p>
              Thanks for visiting my profile.
              You can connect with me through
              my professional channels.
            </p>

            <div className="modal-contact">

              <div>
                📧 {contact.email}
              </div>

              <div>
                💻 {contact.github}
              </div>

              <div>
                🔗 {contact.linkedin}
              </div>

            </div>

          </div>

        </div>

      )}


      {/* =================================================
          FOOTER
      ================================================= */}

      <footer>

        <div className="footer-logo">
          MB<span>.</span>
        </div>

        <p>
          Designed & Built with ❤️ using React
        </p>

        <p className="copyright">
          © 2026 {profile.name}
        </p>

      </footer>

    </div>

  );
}


export default App;