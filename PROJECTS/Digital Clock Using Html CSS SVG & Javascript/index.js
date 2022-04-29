console.log("connected");
setInterval(() => {
  var hour = document.getElementById("hours");
  var minutes = document.getElementById("minutes");
  var seconds = document.getElementById("seconds");
  var ampm = document.getElementById("ampm");

  var dot_hr = document.querySelector(".dot_hr");
  var dot_min = document.querySelector(".dot_min");
  var dot_sec = document.querySelector(".dot_sec");

  var h = new Date().getHours();
  // console.log(h);
  var m = new Date().getMinutes();
  // console.log(m);
  var s = new Date().getSeconds();
  // console.log(s);
  var am = h >= 12 ? "PM" : "AM";

  var hh = document.getElementById("hh");
  var mm = document.getElementById("mm");
  var ss = document.getElementById("ss");

  if (h > 12) {
    h = h - 12;
  }

  // Add zero before single digit number
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hour.innerHTML = h + "<br><span>Hours</span>";
  minutes.innerHTML = m + "<br><span>Minutes</span>";
  seconds.innerHTML = s + "<br><span>Seconds</span>";
  ampm.innerHTML = am;

  // 12hrs clock
  hh.style.strokeDashoffset = 440 - (440 * h) / 12;
  //60 minutes
  mm.style.strokeDashoffset = 440 - (440 * m) / 60;
  //60 seconds
  ss.style.strokeDashoffset = 440 - (440 * s) / 60;

  // rotate dots 360 / 12 = 30
  dot_hr.style.transform = `rotate(${h * 30}deg)`;
  // rotate dots 360/60 = 6
  dot_min.style.transform = `rotate(${m * 6}deg)`;
  // rotate dots 360/60 = 6
  dot_sec.style.transform = `rotate(${s * 6}deg)`;
});
