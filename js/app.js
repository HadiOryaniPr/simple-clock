function myClock() {
  let myTime = new Date();
  let hour = myTime.getHours();
  let minuts = myTime.getMinutes();
  let second = myTime.getSeconds();

  var p = "AM";

  if (hour > 12) {
    hour -= 12;
    p = "PM";
  }

  if (hour < 10) {
    hour = "0" + hour;
  }

  if (minuts < 10) {
    minuts = "0" + minuts;
  }

  if (second < 10) {
    second = "0" + second;
  }

  let myclock = hour + " : " + minuts + " : " + second + " " + p; //Show clock

  let clock = (document.querySelector(".clock").textContent = myclock);

  let timeout = setTimeout(myClock, 1000);
}

myClock();
