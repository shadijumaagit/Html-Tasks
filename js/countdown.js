// The End Of The Year Date To Countdown To
// 1000 milliseconds = 1 Second

let countDownDate = new Date("Dec 31, 2021 23:59:59").getTime();
// console.log(countDownDate);

let counter = setInterval(() => {
  // Get Date Now
  let dateNow = new Date().getTime();

  // Find The Date Difference Between Now And Countdown Date
  let dateDiff = countDownDate - dateNow;

  // Get Time Units
  // let days = Math.floor(dateDiff / 1000 / 60 / 60 / 24);
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML = days < 10 ? `${days}` : days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `${hours}` : hours;
  document.querySelector(".minutes").innerHTML =
    minutes < 10 ? `${minutes}` : minutes;
  document.querySelector(".seconds").innerHTML =
    seconds < 10 ? `${seconds}` : seconds;

  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);
