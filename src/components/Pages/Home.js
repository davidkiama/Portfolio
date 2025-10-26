import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home({ darkMode }) {
  const [time, setTime] = useState("");

  const getTime = function () {
    const today = new Date();
    let hour = String(today.getHours()).padStart(2, "0");
    let min = String(today.getMinutes()).padStart(2, "0");

    setTime(`${hour} : ${min}`);
    setTimeout(getTime, 1000);
  };

  useEffect(() => {
    getTime();
  }, [time]);

  return (
    <main className={`${darkMode ? "dark-2" : ""} main`}>
      <section className="content content-home">
        <div className="card" draggable="true">
          <h3 className="heading-3 card__heading">About me</h3>

          <div className="card__content">
            <div className="con">
              <span className="con--circle"> </span>
            </div>
            <p className="card__text">
              I'm David Kiama, a Frontend Developer with 3+ years of experience in Ember.js, React,
              Next.js, Automated testing and building human-centered web products.
              <br />
              I’m all about growth, and I am currently looking into automation with Python in the
              finance space. Have a look at my work &nbsp;
              <Link to="/projects">Here</Link> .
              <br />
              Impossible is Nothing .
              <br />
              Let's connect!
            </p>
          </div>
        </div>

        <div className="clock">
          <p id="time">{time} </p>
        </div>

        <div className="social-icons">
          <a target="blank" href="https://github.com/davidkiama">
            <svg className={`${darkMode ? "dark-3" : ""} social-icon`}>
              <use xlinkHref="img/sprite.svg#github-svgrepo-com"></use>
            </svg>
          </a>

          <a target="blank" href="https://wa.me/254799760500?text=Hello David">
            <svg className={`${darkMode ? "dark-3" : ""} social-icon`}>
              <use xlinkHref="img/sprite.svg#whatsapp-svgrepo-com"></use>
            </svg>
          </a>

          <a target="blank" href="https://twitter.com/certifiedkiama">
            <svg className={`${darkMode ? "dark-3" : ""} social-icon`}>
              <use xlinkHref="img/sprite.svg#twitter-svgrepo-com"></use>
            </svg>
          </a>

          <a target="blank" href="https://www.linkedin.com/in/david-kiama/">
            <svg className={`${darkMode ? "dark-3" : ""} social-icon`}>
              <use xlinkHref="img/sprite.svg#linkedin-svgrepo-com"></use>
            </svg>
          </a>
        </div>

        <div className="card">
          <h4 className="heading-4 card__heading">Skills and Technologies</h4>

          <div className="card__content">
            <div className="con">
              <span className="con--circle"> </span>
            </div>
            <div className="card__text">
              <p>
                I have a strong background in web development and I am very experienced in the
                following technologies:
              </p>

              <ul>
                <li>Front-end: HTML, CSS, JavaScript, React, Angular Ember</li>
                <li>Back-end: Django, Flask, Node.js, Express</li>
                <li>Databases: PostgreSQL, MongoDB </li>
                <li>Other: API development, Automated testing, Algorithmic Trading.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
