export default function HeroBanner() {
  return (
    <div className="hero-banner">
      <div className="social-links">
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/poojasardar/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/poojasardar1999"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
      <div className="profile">
        <div className="profile-image">
          <img src="/images/banner.jpg" />
        </div>
        <div className="bio">
          <p>
            Passionate front-end developer with expertise in creating intuitive,
            responsive web interfaces. Skilled in{" "}
            <span className="skill-style">HTML</span>,{" "}
            <span className="skill-style">CSS</span>,{" "}
            <span className="skill-style">JavaScript</span>, and modern
            frameworks like <span className="skill-style">React.js</span> and{" "}
            <span className="skill-style">Next.js</span>.
          </p>
        </div>
      </div>
    </div>
  );
}
