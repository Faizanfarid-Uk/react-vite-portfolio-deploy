function Projects() {
  return (
    <section className="projects reveal" id="projects">
      <h2 className="stagger">Projects</h2>

      <div className="projects-grid">

        {/* ===== PROJECT 1 ===== */}
        <div className="project-card main-project stagger">
          <h3>Chatbot Pro</h3>
          <p>
          Chatbot Pro is an advanced Retrieval-Augmented Generation (RAG)
           platform that transforms static PDF documents into intelligent,
           conversational knowledge bases using AI technology.
          </p>

          <div className="tech-stack">
            <span>Python</span>
            <span>Machine Learning</span>
            <span>NLP</span>
            <span>Langchain</span>
            <span>Graph Modelling</span>
          </div>

          <a
            href="https://github.com/Faizanfarid-Uk/ChatPDF-Pro"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>

        {/* ===== PROJECT 2 ===== */}
        <div className="project-card main-project stagger">
          <h3>Traffic Analysis System</h3>
          <p>
            A web-based navigation system built as a Data Structures semester
            project. It focuses on efficient route navigation using
            structured data handling and logical path traversal.
          </p>

          <div className="tech-stack">
            <span>Python</span>
            <span>Flask</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>Data Structures</span>
            <span>Graph Logic</span>
          </div>

          <a
            href="https://github.com/Faizanfarid-Uk/Traffic-Analysis-System"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>

        {/* ===== PROJECT 3 ===== */}
        <div className="project-card main-project stagger">
          <h3>Tea & News – News Platform</h3>
          <p>
            A modern and responsive news platform that fetches real-time news
            from multiple APIs. Built with a focus on performance, scalability,
            and clean UI design.
          </p>

          <div className="tech-stack">
            <span>React</span>
            <span>JavaScript</span>
            <span>GNews API</span>
            <span>REST APIs</span>
            <span>Responsive UI</span>
          </div>

          <a href="#" target="_blank" rel="noopener noreferrer">
            Live Demo (Coming Soon)
          </a>
        </div>

        {/* ===== PROJECT 4 ===== */}
        <div className="project-card main-project stagger">
          <h3>Expense Tracker (Personal Use)</h3>
          <p>
            A personal expense tracking application that analyzes spending
            patterns and predicts future expenses using machine learning
            techniques.
          </p>

          <div className="tech-stack">
            <span>Python</span>
            <span>Flask</span>
            <span>Linear Regression</span>
            <span>Data Analysis</span>
            <span>REST APIs</span>
          </div>

        </div>

        {/* ===== PROJECT 7 ===== */}
        <div className="project-card stagger">
          <h3>Personal Portfolio</h3>
          <p>
            A fully responsive personal portfolio built with React and Vite to
            showcase projects, skills, and academic background with modern UI
            effects and animations.
          </p>

          <div className="tech-stack">
            <span>React</span>
            <span>Vite</span>
            <span>CSS Animations</span>
            <span>Responsive Design</span>
          </div>

          <a href="#" target="_blank" rel="noopener noreferrer">
            Live Demo (vercel site)
          </a>
        </div>

      </div>
    </section>
  );
}

export default Projects;
