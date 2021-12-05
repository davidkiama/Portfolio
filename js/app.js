const header = document.querySelector(".header");

header.innerHTML = `
  <div class="logo">
    <h1 class="logo__name">David Kiama</h1>
  </div>

  <nav class="nav">
    <a href="index.html" class="nav__item">About</a>
    <a href="work.html" class="nav__item">Work</a>
    <a href="gallery.html" class="nav__item">Gallery</a>
    <a href="contact.html" class="nav__item">Contact</a>
  </nav>
`;

const time = document.getElementById("time");

if (time) {
  const getTime = function () {
    const today = new Date();
    let hour = String(today.getHours()).padStart(2, "0");
    let min = String(today.getMinutes()).padStart(2, "0");

    time.textContent = `${hour} : ${min}`;

    setTimeout(getTime, 1000);
  };

  getTime();
}
