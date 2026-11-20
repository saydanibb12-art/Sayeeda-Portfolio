import { useEffect, useState } from "react";
import {
  ArrowUpRight, Download, Github, Linkedin, Mail, Menu, X,
  Code2, BrainCircuit, Leaf, Plane, Hotel, GraduationCap, MapPin,
  Sparkles, ExternalLink
} from "lucide-react";

const skills = [
  ["HTML5", "Web structure"], ["CSS3", "Styling & layouts"],
  ["JavaScript", "Web interactivity"], ["Python", "Programming"],
  ["React.js", "Frontend development"], ["Bootstrap", "Responsive UI"],
  ["Flask", "Backend development"], ["MongoDB", "Database"],
  ["SQL", "Database queries"], ["Git & GitHub", "Version control"]
];

const projects = [
  {
    number: "01", title: "DayWise AI 2.0",
    description: "A student productivity platform concept for organizing tasks, study materials, quizzes and everyday activities.",
    tags: ["Python", "Flask", "MongoDB"], icon: BrainCircuit,
    url: "https://github.com/saydanibb12-art"
  },
  {
    number: "02", title: "PlantGuard AI",
    description: "An AI-based plant disease detection project concept that explores identifying plant health issues from leaf images.",
    tags: ["Python", "AI / ML", "HTML & CSS"], icon: Leaf,
    url: "https://github.com/saydanibb12-art"
  },
  {
    number: "03", title: "Rice Leaf Disease Detection",
    description: "A machine-learning project focused on classifying rice leaf images to support early disease identification.",
    tags: ["Python", "Machine Learning", "AI"], icon: Sparkles,
    url: "https://github.com/saydanibb12-art"
  },
  {
    number: "04", title: "Destiny Travels API",
    description: "A REST API project for managing travel-related information with backend routes and database integration.",
    tags: ["Node.js", "Express", "MongoDB"], icon: Plane,
    url: "https://github.com/saydanibb12-art"
  },
  {
    number: "05", title: "Grand Palace Hotel",
    description: "A hotel website project with a responsive layout, menu section and informational pages.",
    tags: ["HTML", "CSS", "JavaScript"], icon: Hotel,
    url: "https://github.com/saydanibb12-art"
  }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("visible"));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="site-header">
        <nav className="nav wrap">
          <a className="brand" href="#home" onClick={closeMenu}>S<span>N.</span></a>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
            {menuOpen ? <X /> : <Menu />}
          </button>
          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            {["Home", "About", "Skills", "Projects", "Education", "Contact"].map(item =>
              <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>
            )}
            <a className="nav-contact" href="#contact" onClick={closeMenu}>Let's Connect <ArrowUpRight size={15} /></a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero wrap" id="home">
          <div className="hero-copy reveal">
            <div className="eyebrow"><span className="status-dot" /> HELLO, WORLD! I'M</div>
            <h1>Sayeeda<br /><span>Nibi.</span></h1>
            <h2>BCA Student &amp; Aspiring Software Developer</h2>
            <p className="hero-description">Curious mind, creative thinker, and technology enthusiast. I enjoy turning ideas into meaningful digital experiences and continuously learning something new.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore My Work <ArrowUpRight size={17} /></a>
              <a className="button button-light" href="/assets/resume.pdf" target="_blank" rel="noreferrer">Download Resume <Download size={17} /></a>
            </div>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/sayeeda-nibi-6272a2436/" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn <ArrowUpRight size={13} /></a>
              <a href="https://github.com/saydanibb12-art" target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ArrowUpRight size={13} /></a>
            </div>
          </div>
          <div className="hero-visual reveal">
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <div className="photo-frame">
              <img src="/assets/profile.jpg" alt="Sayeeda Nibi" onError={(e) => { e.currentTarget.style.display = "none"; }} />
              <div className="photo-fallback"><span>SN</span><small>Add your profile photo</small></div>
            </div>
            <div className="floating-note"><span>✦</span> Learning. Building. Growing.</div>
            <div className="visual-caption">DESIGN <i>•</i> DEVELOP <i>•</i> LEARN <i>•</i> REPEAT</div>
          </div>
        </section>

        <div className="ticker"><div>CURIOUS BY NATURE <b>✳</b> CREATIVE BY DESIGN <b>✳</b> ALWAYS LEARNING <b>✳</b> BUILDING WITH PURPOSE <b>✳</b> CURIOUS BY NATURE <b>✳</b></div></div>

        <section className="section wrap reveal" id="about">
          <SectionHeading label="01 / ABOUT ME" title="A little about my journey." subtitle="Building my future, one project at a time." />
          <div className="about-grid">
            <div className="about-card">
              <h3>Turning curiosity into creation.</h3>
              <p>I am a Bachelor of Computer Applications student with an interest in software development, web technologies, and Artificial Intelligence.</p>
              <p>I enjoy exploring technology, learning new tools, and transforming ideas into practical projects. For me, every project is an opportunity to improve my skills, creativity, and problem-solving ability.</p>
              <p>I believe that consistent learning, curiosity, and dedication are the foundation of professional growth.</p>
            </div>
            <div className="quote-card">
              <span className="quote-mark">“</span>
              <small>MY PHILOSOPHY</small>
              <h3>I don't just want to learn technologies. I want to understand how to use them to build something meaningful.</h3>
              <p>Curiosity keeps me learning. Consistency keeps me growing.</p>
            </div>
          </div>
        </section>

        <section className="section skills-section reveal" id="skills">
          <div className="wrap">
            <SectionHeading label="02 / SKILLS" title="Tools I use & explore." subtitle="Technologies and tools I have learned and used while working on projects." />
            <div className="skills-grid">
              {skills.map(([name, detail], index) => <article className="skill-card" key={name}>
                <span className="skill-number">{String(index + 1).padStart(2, "0")}</span>
                <div className="skill-icon"><Code2 size={21} /></div>
                <h3>{name}</h3><p>{detail}</p>
              </article>)}
            </div>
          </div>
        </section>

        <section className="section wrap reveal" id="projects">
          <SectionHeading label="03 / SELECTED PROJECTS" title="Things I've built." subtitle="A selection of academic and personal projects I've explored." />
          <div className="projects-grid">
            {projects.map(({ number, title, description, tags, icon: Icon, url }) => <article className="project-card" key={title}>
              <div className="project-top"><span>PROJECT {number}</span><div className="project-icon"><Icon size={22} /></div></div>
              <h3>{title}</h3><p>{description}</p>
              <div className="tags">{tags.map(tag => <span key={tag}>{tag}</span>)}</div>
              <a className="project-link" href={url} target="_blank" rel="noreferrer">View GitHub profile <ExternalLink size={15} /></a>
            </article>)}
          </div>
        </section>

        <section className="section education-section reveal" id="education">
          <div className="wrap">
            <SectionHeading label="04 / EDUCATION" title="My academic background." />
            <article className="education-card">
              <div className="education-icon"><GraduationCap size={27} /></div>
              <div><span className="current-label">CURRENTLY PURSUING</span><h3>Bachelor of Computer Applications (BCA)</h3><p>Aditya Institute of Management Studies and Research</p><p className="education-description">Building knowledge in computer science, software development, and emerging technologies.</p></div>
            </article>
          </div>
        </section>

        <section className="section wrap reveal" id="resume">
          <div className="resume-panel">
            <div className="resume-symbol"><Download size={27} /></div>
            <div><span className="section-kicker">05 / RESUME</span><h2>More about my experience.</h2><p>Education, skills, projects and professional profile.</p></div>
            <a className="button button-primary" href="/assets/resume.pdf" target="_blank" rel="noreferrer">View Resume <ArrowUpRight size={17} /></a>
          </div>
        </section>

        <section className="section contact-section reveal" id="contact">
          <div className="wrap contact-content">
            <SectionHeading label="06 / CONTACT" title={<>Let's create something<br />meaningful.</>} subtitle="I'm always interested in learning, connecting, and exploring new opportunities. Feel free to reach out." />
            <a className="email-link" href="mailto:sayeedanibb24@outlook.com"><Mail size={19} /> sayeedanibb24@outlook.com <ArrowUpRight size={17} /></a>
            <div className="contact-social">
              <a href="https://www.linkedin.com/in/sayeeda-nibi-6272a2436/" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a>
              <a href="https://github.com/saydanibb12-art" target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a>
              <span><MapPin size={17} /> Bengaluru, India</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer"><div className="wrap footer-inner"><a className="brand" href="#home">S<span>N.</span></a><p>Designed &amp; built by <strong>Sayeeda Nibi</strong><br />© {new Date().getFullYear()} All rights reserved.</p><a href="#home" className="back-top">Back to top ↑</a></div></footer>
    </>
  );
}

function SectionHeading({ label, title, subtitle }) {
  return <div className="section-heading"><span className="section-kicker">{label}</span><h2>{title}</h2>{subtitle && <p>{subtitle}</p>}</div>;
}

export default App;
