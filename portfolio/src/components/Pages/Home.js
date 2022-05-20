import React, { useState, useEffect } from "react";

function Home() {
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
    <main className="main">
      <section className="content content-home">
        <div className="card">
          <h3 className="heading-3 card__heading">About me</h3>

          <div className="card__content">
            <div className="con">
              <span className="con--circle"> </span>
            </div>
            <p className="card__text">
              Hi, I am David Kiama and I am a Software Developer. I am currently attending a bootcamp at
              Moringa School. The experience is awesome. Having to learn and work on projects together with
              like-minded individuals is nothing short of amazing.
              <br />
              <a href="work.html">Here</a> are some of my projects.
              <br />
              My interests include football, swimming, playing chess and hanging out with like-minded
              individuals.
              <br />
              <a href="gallery.html"> Here</a> is a gallery that highlight some of my interests.
            </p>
          </div>
        </div>

        <div className="clock">
          <p id="time">{time} </p>
        </div>

        <div className="social-icons">
          <a target="blank" href="https://github.com/davidkiama">
            <svg className="social-icon">
              <use xlinkHref="img/sprite.svg#github-svgrepo-com"></use>
            </svg>
          </a>

          <a target="blank" href="https://wa.me/254799760500?text=Dev">
            <svg className="social-icon">
              <use xlinkHref="img/sprite.svg#whatsapp-svgrepo-com"></use>
            </svg>
          </a>

          <a target="blank" href="https://twitter.com/certifiedkiama">
            <svg className="social-icon">
              <use xlinkHref="img/sprite.svg#twitter-svgrepo-com"></use>
            </svg>
          </a>

          <a target="blank" href="https://www.linkedin.com/in/david-kiama/">
            <svg className="social-icon">
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
                I have a strong background in web development and I am very experienced in the following
                technologies:
              </p>

              <ul>
                <li>Front-end: HTML, CSS, JavaScript, React, Angular</li>
                <li>Back-end: Django, Flask, Node.js, Express</li>
                <li>Databases: PostgreSQL, MongoDB </li>
                <li>Other: API development, Git, GitHub, Heroku, Netlify, Figma</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
