export default function Navigation() {
  return (
    <nav className="w-full bg-white shadow-md nav-container">
      <div className="brand-name">
        <a href="/">Pooja Sardar</a>
      </div>
      <ul className="nav">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/#projects">Projects</a>
        </li>
        <li>
          <a href="/#about">About</a>
        </li>
      </ul>
    </nav>
  );
}
