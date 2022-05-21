import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="con">
        <span className="con--circle"> </span>
      </div>

      <div className="copyright">
        <div className="footer__icons">
          <a href="https://github.com/davidkiama" target="blank">
            <svg className="footer__icon">
              <use xlinkHref="img/sprite.svg#github-svgrepo-com"></use>
            </svg>
          </a>

          <a href="https://www.linkedin.com/in/david-kiama-a8a8b817b/" target="blank">
            <svg className="footer__icon">
              <use xlinkHref="img/sprite.svg#linkedin-svgrepo-com"></use>
            </svg>
          </a>

          <a href="https://twitter.com/certifiedkiama" target="blank">
            <svg className="footer__icon">
              <use xlinkHref="img/sprite.svg#twitter-svgrepo-com"></use>
            </svg>
          </a>
        </div>
        <h3>Made with by ❤️ David Kiama.</h3>
      </div>

      <div className="con">
        <span className="con--circle"> </span>
      </div>
    </footer>
  );
}

export default Footer;
