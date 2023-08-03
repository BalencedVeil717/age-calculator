var targetDate = new Date("2021-01-01 01:00:00").getTime();
var countdownInterval;

function updateCountdown() {
  function setCountdownElements(
    elapsedYears,
    elapsedMonths,
    elapsedDays,
    elapsedHours,
    elapsedMinutes,
    elapsedSecondsRemaining
  ) {
    document.getElementById("years").innerHTML = elapsedYears + "y ";
    document.getElementById("months").innerHTML = elapsedMonths + "mo ";
    document.getElementById("days").innerHTML = elapsedDays + "d ";
    document.getElementById("hours").innerHTML = elapsedHours + "h ";
    document.getElementById("minutes").innerHTML = elapsedMinutes + "m ";
    document.getElementById("seconds").innerHTML =
      elapsedSecondsRemaining + "s ";
  }

  var nowValue = document.getElementById("now").value;
  var nowDate = new Date(nowValue + "T00:00:00"); // Consider only date without time
  var now = nowDate.getTime() + nowDate.getTimezoneOffset() * 60000; // Account for time zone offset

  var distance = Math.abs(targetDate - now); // Take the absolute value to ensure positive difference

  var years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365));
  var months = Math.floor(
    (distance % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)
  );
  var days = Math.floor(
    (Math.abs(distance) % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
  );
  var hours = Math.floor(
    (Math.abs(distance) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutes = Math.floor(
    (Math.abs(distance) % (1000 * 60 * 60)) / (1000 * 60)
  );
  var seconds = Math.floor((Math.abs(distance) % (1000 * 60)) / 1000);

  setCountdownElements(years, months, days, hours, minutes, seconds);
}

function setDateTime() {
  const dateValue = document.getElementById("date").value;
  const timeValue = document.getElementById("time").value;
  const nowValue = document.getElementById("now").value;

  const dateTimeString = dateValue + "T" + timeValue;
  targetDate = new Date(dateTimeString).getTime();

  clearInterval(countdownInterval);
  updateCountdown();
}

document.getElementById("click").addEventListener("click", function () {
  setDateTime();
});

// Show the container once the page is fully loaded
window.onload = function () {
  document.getElementById("loader").style.display = "none";
  document.getElementById("container").style.display = "flex";
};
