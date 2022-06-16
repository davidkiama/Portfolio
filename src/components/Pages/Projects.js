import React from "react";

function Projects({ darkMode }) {
  return (
    <main className={`${darkMode ? "dark-2" : ""} main`}>
      <section className="content content-work">
        <div className="card">
          <h4 className="heading-4 card__heading">Forkify</h4>

          <div className="card__content">
            <div className="con">
              <span className="con--circle"> </span>
            </div>
            <p className="card__text">
              Recipe web application.
              <br />
              Users can search for recipes, bookmark recipes they like and add new recipes.
              <br />
              Technologies used: Vanilla JS, Heroku, Surge.sh.
              <span className="live-links">
                <a href="https://github.com/davidkiama/Forkify" target="blank">
                  Source code
                </a>
                <a href="https://forkify-kiama.surge.sh/" target="blank">
                  Live demo
                </a>
              </span>
            </p>
          </div>
        </div>

        <div className="card">
          <h4 className="heading-4 card__heading">Bankist</h4>

          <div className="card__content">
            <div className="con">
              <span className="con--circle"> </span>
            </div>
            <p className="card__text">
              Bankist is a banking web application.
              <br />
              Users can deposit, withdraw, request for loans and transfer money to other users .
              <br />
              Technologies used: MongoDB, Express, React, NodeJs, Netlify.
              <span className="live-links">
                <a href="https://github.com/davidkiama/Bankist" target="blank">
                  Source code
                </a>
                <a href="https://bankist-kiama.netlify.app/" target="blank">
                  Live demo
                </a>
              </span>
            </p>
          </div>
        </div>

        <div className="card">
          <h4 className="heading-4 card__heading">Foto Moto</h4>

          <div className="card__content">
            <div className="con">
              <span className="con--circle"> </span>
            </div>
            <p className="card__text">
              Foto Moto is a Web image gallery.
              <br />
              Images are categorized with location and category. One can search and filter images according to
              category.
              <br />
              Technologies used: PostgreSQL, Django, Heroku.
              <span className="live-links">
                <a href="https://github.com/davidkiama/Foto-Moto-" target="blank">
                  Source code
                </a>
                <a href="https://foto-moto.herokuapp.com/" target="blank">
                  Live demo
                </a>
              </span>
            </p>
          </div>
        </div>

        <div className="card">
          <h4 className="heading-4 card__heading">Neighbourhood</h4>

          <div className="card__content">
            <div className="con">
              <span className="con--circle"> </span>
            </div>
            <p className="card__text">
              A web application that allows users to find and share posts in their neighbourhood.
              <br />
              Neighbours can also view the list of business in the neighbourhood.
              <br />
              Technologies used: PostgreSQL, Django, Heroku.
              <span className="live-links">
                <a href="https://github.com/davidkiama/NeighbourHood" target="blank">
                  Source code
                </a>
                <a href="https://neighbourhood-xxiv.herokuapp.com/" target="blank">
                  Live demo
                </a>
              </span>
            </p>
          </div>
        </div>

        <div className="card">
          <h4 className="heading-4 card__heading">Pitches</h4>

          <div className="card__content">
            <div className="con">
              <span className="con--circle"> </span>
            </div>
            <p className="card__text">
              Flask web app that displays pitches created on the platform by them and other users.
              <br />
              Users can create, upvote, downwnvote or comment on pitches.
              <br />
              Technologies used: PostgreSQL, Flask, Heroku.
              <span className="live-links">
                <a href="https://github.com/davidkiama/Flask-Pitches" target="blank">
                  Source code
                </a>
                <a href="https://flask-pitches.herokuapp.com/" target="blank">
                  Live demo
                </a>
              </span>
            </p>
          </div>
        </div>

        <div className="card">
          <h4 className="heading-4 card__heading">Pizzeria-45</h4>

          <div className="card__content">
            <div className="con">
              <span className="con--circle"> </span>
            </div>
            <p className="card__text">
              A web application for a fictional pizza restaurant.
              <br />
              Users can place their orders, edit the order and place the order upon which the user will be
              prompted to pay.
              <br />
              Technologies used: React, Vanilla JS, Context-Api, Netlify
              <span className="live-links">
                <a href="https://github.com/davidkiama/Pizzeria-45" target="blank">
                  Source code
                </a>
                <a href="https://pizzeria-45.netlify.app/" target="blank">
                  Live demo
                </a>
              </span>
            </p>
          </div>
        </div>

        <div className="card">
          <h4 className="heading-4 card__heading">Quotes</h4>

          <div className="card__content">
            <div className="con">
              <span className="con--circle"> </span>
            </div>
            <p className="card__text">
              Web application that showcases quotes created on the platform.
              <br />
              One can create a upvote, downwnvote or delete a quote.
              <br />
              Technologies used: Angular, TypeScript, CSS.
              <span className="live-links">
                <a href="https://github.com/davidkiama/Quotes" target="blank">
                  Source code
                </a>
                <a href="https://davidkiama.github.io/Quotes/" target="blank">
                  Live demo
                </a>
              </span>
            </p>
          </div>
        </div>

        <div className="card">
          <h4 className="heading-4 card__heading">Github Search</h4>

          <div className="card__content">
            <div className="con">
              <span className="con--circle"> </span>
            </div>
            <p className="card__text">
              Web application that displays a Github user and all his/her public repositories.
              <br />
              One can search for a users using usernames.
              <br />
              Technologies used: Angular, TypeScript, CSS, Github.
              <span className="live-links">
                <a href="https://github.com/davidkiama/Github-Search" target="blank">
                  Source code
                </a>
                <a href="https://davidkiama.github.io/Github-Search/" target="blank">
                  Live demo
                </a>
              </span>
            </p>
          </div>
        </div>

        <div className="card">
          <h4 className="heading-4 card__heading">Burger Palace</h4>

          <div className="card__content">
            <div className="con">
              <span className="con--circle"> </span>
            </div>

            <p className="card__text">
              Burger Palace is a fictional restaurant website, that sells Fingerlicking Good Burgers.
              <br />
              This is just a replica. The original design was done by &nbsp;
              <a href="https://github.com/james-muriithi" target="blank">
                Justin Murithi
              </a>
              <br />
              Technologies used : HTML & CSS
              <span className="live-links">
                <a href="https://github.com/davidkiama/Burger-Palace" target="blank">
                  Source code
                </a>
                <a href="https://davidkiama.github.io/Burger-Palace/" target="blank">
                  Live demo
                </a>
              </span>
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
              Technologies used: HTML & CSS.
              <span className="live-links">
                <a href="https://github.com/davidkiama/Cute-Pet" target="blank">
                  Source code
                </a>
                <a href="https://davidkiama.github.io/Cute-Pet/" target="blank">
                  Live demo
                </a>
              </span>
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
              Letuce Eat offers the best, healthy and affordable dishes.
              <br />
              Technologies used include: HTML & CSS.
              <span className="live-links">
                <a href="https://github.com/davidkiama/Letuce-Eat" target="blank">
                  Source code
                </a>
                <a href="https://davidkiama.github.io/Letuce-Eat/" target="blank">
                  Live demo
                </a>
              </span>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Projects;
