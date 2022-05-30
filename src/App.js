import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";

// import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Home from "./components/Pages/Home";
import Contact from "./components/Pages/Contact";
import Projects from "./components/Pages/Projects";

function App() {
  const [displayMenu, setDisplayMenu] = useState(false);
  const dark = localStorage.getItem("dark");
  const [darkMode, setDarkMode] = useState(dark === "" || dark === "false" ? false : true);

  useEffect(() => {
    localStorage.setItem("dark", darkMode);
  }, [darkMode]);

  const switchTheme = () => {
    setDarkMode(!darkMode);
  };
  const styles = {
    headerIcons: {
      fill: darkMode ? "green" : "",
    },
  };

  const displayMenuFunc = () => {
    setDisplayMenu((prevState) => !prevState);
  };

  return (
    <BrowserRouter>
      <div id="container" className={`${darkMode ? "dark" : ""} `}>
        <header className={`${darkMode ? "dark-header" : ""} header`}>
          <div className="logo">
            <h1 className="logo__name">
              <Link to="/">David Kiama</Link>
            </h1>

            <svg className="icon--computer" style={styles.headerIcons}>
              <use xlinkHref="img/sprite.svg#computer-svgrepo-com"></use>
            </svg>
          </div>

          <nav className={`${displayMenu ? "display_menu" : ""}   nav`}>
            <NavLink
              to="/"
              className={`${darkMode ? "dark-3" : ""} nav__item`}
              onClick={() => setDisplayMenu(false)}
            >
              About
            </NavLink>

            <NavLink
              to="/projects"
              className={`${darkMode ? "dark-3" : ""} nav__item`}
              onClick={() => setDisplayMenu(false)}
            >
              Projects
            </NavLink>

            <NavLink
              to="/contact"
              className={`${darkMode ? "dark-3" : ""} nav__item`}
              onClick={() => setDisplayMenu(false)}
            >
              Contact
            </NavLink>

            <div className="icon icon-bg" onClick={switchTheme}>
              <svg className="icon--theme" style={styles.headerIcons}>
                <use xlinkHref="img/sprite.svg#moon-svgrepo-com"></use>
              </svg>
            </div>
          </nav>

          {displayMenu ? (
            <svg
              className={` ${displayMenu ? "icon--light" : ""} icon--hamburger `}
              onClick={displayMenuFunc}
            >
              <use xlinkHref="img/sprite.svg#cancel"></use>
            </svg>
          ) : (
            <svg
              className={` ${displayMenu ? "icon--light" : ""} icon--hamburger `}
              onClick={displayMenuFunc}
            >
              <use xlinkHref="img/sprite.svg#hamburger-menu"></use>
            </svg>
          )}
        </header>

        <Routes>
          <Route path="/" exact element={<Home darkMode={darkMode} />} />
          <Route path="/projects" element={<Projects darkMode={darkMode} />} />
          <Route path="/contact" element={<Contact darkMode={darkMode} />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
