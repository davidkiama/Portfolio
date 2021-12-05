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
