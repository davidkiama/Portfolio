import React from "react";

import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1 className="logo__name">
          <Link to="/">David Kiama</Link>
        </h1>

        <svg className="icon--computer">
          <use xlinkHref="img/sprite.svg#computer-svgrepo-com"></use>
        </svg>
      </div>

      <nav className="nav">
        <Link to="/" className="nav__item">
          About
        </Link>

        <Link to="/projects" className="nav__item">
          Projects
        </Link>

        <Link to="/contact" className="nav__item">
          Contact
        </Link>

        <div className="icon">
          <svg className="icon--theme">
            <use xlinkHref="img/sprite.svg#moon-svgrepo-com"></use>
          </svg>
        </div>
      </nav>
      <svg className="icon--hamburger">
        <use xlinkHref="img/sprite.svg#hamburger-menu"></use>
      </svg>
    </header>
  );
}

export default Header;
