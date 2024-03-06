function display() {
  {
    let time = new Date();

    day = time.getDate()
    week_day = time.getDay();
    month_number = time.getMonth();
    year = time.getFullYear();

    weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    hours = time.getHours();
    minutes = time.getMinutes();
    seconds = time.getSeconds();

    if (day == 0) {
      suffix = "st"
    }
    else if (day == 1) {
      suffix = "nd"
    }
    else if (day == 2) {
      suffix = "rd"
    }
    else {
      suffix = "th"
    }

    if (hours < 12) {
      meridian = "AM"
    }
    else {
      meridian = "PM"
    }

    current_date = weekDays[week_day] + ", " + day + suffix + " " + monthNames[month_number] + " " + year;
    current_time = hours + ":" + (minutes < 10 ? "0" : "") + minutes + ":" + (seconds < 10 ? "0" : "") + seconds + " " + meridian;

    document.getElementById("time").innerHTML =
      "<br>" + current_date + "   " + current_time;

    mybutton.addEventListener("click", function () {
      window.open("https://www.timeanddate.com/worldclock/", "_blank");
    });
  }
}

display();
setInterval(() => display(), 1000);
