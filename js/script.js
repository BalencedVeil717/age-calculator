var targetDate = new Date("2021-01-01 01:00:00").getTime();

var countdownInterval = setInterval(function () {
  var now = new Date().getTime();
  var distance = targetDate - now;

  var years = Math.floor(distance / (1000 * 60 * 24 * 365));
  var months = Math.floor(
    (distance % (1000 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)
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

  var countdownFinished = distance <= 0;

  if (countdownFinished) {
    clearInterval(countdownInterval);

    countdownInterval = setInterval(function () {
      var now = new Date().getTime();
      var elapsedSeconds = Math.floor((now - targetDate) / 1000);

      var elapsedYears = Math.floor(elapsedSeconds / (60 * 60 * 24 * 365));
      var elapsedMonths = Math.floor(
        (elapsedSeconds % (60 * 60 * 24 * 365)) / (60 * 60 * 24 * 30)
      );
      var elapsedDays = Math.floor(
        (elapsedSeconds % (60 * 60 * 24 * 30)) / (60 * 60 * 24)
      );
      var elapsedHours = Math.floor(
        (elapsedSeconds % (60 * 60 * 24)) / (60 * 60)
      );
      var elapsedMinutes = Math.floor((elapsedSeconds % (60 * 60)) / 60);
      var elapsedSecondsRemaining = elapsedSeconds % 60;

      document.getElementById("years").innerHTML = elapsedYears + "y ";
      document.getElementById("months").innerHTML = elapsedMonths + "mo ";
      document.getElementById("days").innerHTML = elapsedDays + "d ";
      document.getElementById("hours").innerHTML = elapsedHours + "h ";
      document.getElementById("minutes").innerHTML = elapsedMinutes + "m ";
      document.getElementById("seconds").innerHTML =
        elapsedSecondsRemaining + "s ";
    }, 1000);
  }
}, 1000);

function setDateTime() {
  const dateControl = document.querySelector('input[type="date"]');
  const timeControl = document.querySelector('input[type="time"]');

  const dateValue = document.getElementById("date").value;
  const timeValue = document.getElementById("time").value;

  const dateTimeString = dateValue + "T" + timeValue;

  targetDate = new Date(dateTimeString).getTime();

  console.log(targetDate);
}

setTimeout(function () {
  document.getElementById("loader").style.visibility = "hidden";
  document.getElementById("container").style.display = "flex";
}, 3000);
