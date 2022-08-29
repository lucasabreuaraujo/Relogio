const handHours = document.querySelector(".hand.hours");
const handMinutes = document.querySelector(".hand.minutes");
const handSeconds = document.querySelector(".hand.seconds");

const setRotation = (element, rotation) => {
  element.style.setProperty("--rotation", rotation * 360);
};

const setClock = () => {
  const currentDate = new Date();

  const seconds = currentDate.getSeconds() / 60;
  const minutes = (seconds + currentDate.getMinutes()) / 60;
  const hours = (minutes + currentDate.getHours()) / 12;

  setRotation(handSeconds, seconds)
  setRotation(handMinutes, minutes)
  setRotation(handHours, hours)
};

setClock();
setInterval(setClock, 1000)
