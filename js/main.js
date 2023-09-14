// initalize alarm clock
const display = document.getElementById('clock'); 

const audio = new Audio()
let alarmTime = null;
let alarmTimeout = null;

// defines a function called time
function time() {
  let d = new Date(); // // Create a new Date object to get the current date and time

  // // Get the current seconds, minutes, and hours
  let s = d.getSeconds(); 
  let m = d.getMinutes();
  let h = d.getHours();
  display.textContent = h + ":" + m + ":" + s; // Update the text content of the 'display' element with the current time
}

function setAlarmTime(value) {
  alarmTime = value;
}

function setAlarm() {
  if (alarmTime) {
    const current = new Date();
    const timeUntilAlarm = new Date(alarmTime);

    if (timeUntilAlarm > current) {
      const timeout = timeUntilAlarm.getTime() - current.getTime();
      alarmTimeout = setTimeout(() => audio.play(), timeout);
      alert('Set Alarm')
    }
  }
}

function clearAlarm() {
  audio.pause;
  if (alarmTimeout) {
    clearTimeout(alarmTimeout);
    alert('Alarm Cleared')
  }
}


setInterval(time, 1000); // Call the 'time' function every 1000 milliseconds (1 second)



/*/ ⬇ changes from a 12-hour and a 24-hour display on a button press ⬇ /*/