// initalize alarm clock
const display = document.getElementById('clock'); 

// defines a function called time
function time() {
  let d = new Date(); // // Create a new Date object to get the current date and time

  // // Get the current seconds, minutes, and hours
  let s = d.getSeconds(); 
  let m = d.getMinutes();
  let h = d.getHours();
  display.textContent = h + ":" + m + ":" + s; // Update the text content of the 'display' element with the current time
}

setInterval(time, 1000); // Call the 'time' function every 1000 milliseconds (1 second)



/*/ ⬇ changes from a 12-hour and a 24-hour display on a button press ⬇ /*/