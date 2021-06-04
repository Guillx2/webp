import "../assets/css/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <nav className="navbar-content">
        <ul className="navbar-links-container">
          <li className="navbar-links-li">
            <a href="/" className="navbar-link">
              Inicio
            </a>
          </li>
          <li className="navbar-links-li">
            <a href="/" className="navbar-link">
              Información
            </a>
          </li>
          <li className="navbar-links-li">
            <a href="/" className="navbar-link">
              Figuras pequeñas
            </a>
          </li>
          <li className="navbar-links-li">
            <a href="/" className="navbar-link">
              Figuras Grandes
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
