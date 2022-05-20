import React from "react";

function Projects() {
  return (
    <main className="main">
      <section className="content content-work">
        <div className="card">
          <h4 className="heading-4 card__heading">Burger Palace</h4>

          <div className="card__content">
            <div className="con">
              <span className="con--circle"> </span>
            </div>

            <p className="card__text">
              Burger Palace is a fictional restaurant website, that sells Fingerlicking Good Burgers.
              <br />
              This is just a replica. The original design was done by
              <a href="https://github.com/james-muriithi" target="blank">
                Justin Murithi
              </a>
              <br />
              Languages and technologies used are: HTML & CSS
              <a href="https://davidkiama.github.io/Burger-Palace/" target="blank" className="live-link">
                Check it out !
              </a>
            </p>
          </div>
        </div>

        <div className="card">
          <h4 className="heading-4 card__heading">Cute-Pet</h4>

          <div className="card__content">
            <div className="con">
              <span className="con--circle"> </span>
            </div>
            <p className="card__text">
              Cute Pet Landing page of a fictional website. The idea behind cute pet was to take care of
              abandoned pets.
              <br />
              This was a joint project between
              <a href="https://github.com/Lyonsmasawa"> Lyons Masawa</a> and I.
              <br />
              Languages and technologies used include: HTML & CSS.
              <a href="https://davidkiama.github.io/Cute-Pet/" target="blank" className="live-link">
                Check it out !
              </a>
            </p>
          </div>
        </div>

        <div className="card">
          <h4 className="heading-4 card__heading">Letuce Eat</h4>

          <div className="card__content">
            <div className="con">
              <span className="con--circle"> </span>
            </div>
            <p className="card__text">
              Letuce Eat is a fictional website based on the idea of Moringa Restaurant.
              <br />
              Letuce Eat offers the best, healthy and affordalbe dishes.
              <br />
              Languages and technologies used include: HTML & CSS.
              <a href="https://davidkiama.github.io/Letuce-Eat/" target="blank" className="live-link">
                Check it out !
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Projects;
