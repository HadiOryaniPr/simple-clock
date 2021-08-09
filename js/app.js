function myClock() {
  var myTime = new Date();
  var hour = myTime.getHours();
  var minuts = myTime.getMinutes();
  var second = myTime.getSeconds();

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

  var myclock = hour + " : " + minuts + " : " + second + " " + p; //Show clock

  var clock = (document.querySelector(".clock").textContent = myclock);

  var timeout = setTimeout(myClock, 1000);
}

myClock();
