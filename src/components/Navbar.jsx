import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="navbar">
      {/* Brand Logo */}
      <a href="#" className="brand">
  <img src="profile.jpeg" alt="Profile" className="brand-img" />
  <span className="brand-symbol">★</span>
   <span className="brand-text">Faizan Farid's Portfolio</span>
</a>

   
   
      


      {/* Hamburger */}
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
        {links.map((link) => (
          <li key={link.path}>
            <Link
              to={link.path}
              className={location.pathname === link.path ? "active" : ""}
              onClick={handleLinkClick}
            >
              {link.name}
            </Link>
          </li>
        ))}

        {/* Resume Button */}
        <li className="nav-resume">
          <a
            href="cv.pdf"
            download
            onClick={handleLinkClick}
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
