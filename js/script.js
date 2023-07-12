const getCurrentTime = () => {
  // Create new Date objects for both time and date
  let time = new Date();
  let date = new Date();
  
  // Array of days of the week
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  
  // Get the day of the week
  const dayOfWeek = daysOfWeek[date.getDay()];

  // Get the current date, month, and year
  let currDate = date.getDate().toString().padStart(2, "0");
  let currMonth = (date.getMonth() + 1).toString().padStart(2, "0"); // Month is zero-based, so add 1
  let currYear = date.getFullYear().toString();

  // Get the current hours, minutes, and seconds
  let hh = time.getHours().toString().padStart(2, "0");
  let mm = time.getMinutes().toString().padStart(2, "0");
  let ss = time.getSeconds().toString().padStart(2, "0");

  // Determine the meridiem (AM or PM)
  let meridiem = "";
  if (hh >= 0 && hh < 12) {
    meridiem = "AM";
  } else {
    meridiem = "PM";
  }

  // Update the elements with the obtained values
  document.getElementById("day").innerHTML = dayOfWeek;
  document.getElementById("curr-date").innerHTML = currDate;
  document.getElementById("curr-month").innerHTML = currMonth;
  document.getElementById("curr-year").innerHTML = currYear;
  document.getElementById("hours").innerHTML = hh;
  document.getElementById("minutes").innerHTML = mm;
  document.getElementById("seconds").innerHTML = ss;
  document.getElementById("meridiem").innerHTML = meridiem;
};

// Call getCurrentTime every second (1000 milliseconds)
setInterval(getCurrentTime, 1000);
