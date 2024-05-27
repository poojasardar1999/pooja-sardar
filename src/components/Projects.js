export default function Projects() {
  return (
    <section id="projects" className="projects__container">
      <div className="projects__title">
        <h2>Projects</h2>
      </div>
      <div className="projects__list">
        <ProjectCard
          img="/images/web-world.png"
          description="Built a single-page responsive website using <span class='skill-style'>HTML</span>, <span class='skill-style'>CSS</span> and <span class='skill-style'>JavaScript</span> and integrated CSS animations. Created sections - hero banner, testimonials and newsletter form."
        />
        <ProjectCard
          img="/images/qr-code-generator.png"
          description="Using <span class='skill-style'>JavaScript</span>'s built-in methods, built a QR code generator for any text or URL."
        />
        <ProjectCard
          img="/images/to-do-list.png"
          description="Solving problems to note and track to-dos for anyone. Built a To-Do list app with <span class='skill-style'>JavaScript</span>."
        />
        {/* <ProjectCard /> */}
      </div>
    </section>
  );
}

function ProjectCard({ img, description }) {
  return (
    <div className="projects__card">
      <div className="projects__image">
        <img src={img} />
      </div>
      <div className="projects__description">
        <p dangerouslySetInnerHTML={{ __html: description }}></p>
      </div>
    </div>
  );
}
