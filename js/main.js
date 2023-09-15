// init alarm clock
const display = document.getElementById('clock'); 
// Create an audio element for the alarm sound
const audio = new Audio("audio/ringtone-126505.mp3"); 
audio.loop = true;
// Init var to store the alarm time and timeout
let alarmTime = null;
let alarmTimeout = null;
// Init var for 24-hour format
let is24Hour = true;

// Function to update the time on the clock display
function time() { 
  let d = new Date(); 
  let s = ('0' + d.getSeconds()).slice(-2); 
  let m = ('0' + d.getMinutes()).slice(-2);
  let h = ('0' + d.getHours()).slice(-2);

  // Check if the time format is 12-hour or 24-hour
  if (!is24Hour) {
    const ampm = h >= 12 ? '🔅' : '🌙';
    h = h % 12 || 12;
    display.textContent = `${h}:${m}:${s} ${ampm}`;
  } else {
    display.textContent = `${h}:${m}:${s}`;
  }
}

// Function to set the alarm time
function setAlarmTime(value) {
  alarmTime = value;
}

// Function to set the alarm based on the set time
function setAlarm() {
  if (alarmTime) { // Check if an alarm time is set
    const current = new Date();
    const timeUntilAlarm = new Date(alarmTime);
 // Calculate the time difference between alarm time and current time
    if (timeUntilAlarm > current) {
      const timeout = timeUntilAlarm.getTime() - current.getTime();
      // Set a timeout to trigger the alarm sound
      alarmTimeout = setTimeout(() => audio.play(), timeout);
      alert('Set Alarm')
    }
  }
}

// Function to clear the alarm
function clearAlarm() {
  audio.pause();
  if (alarmTimeout) {
    clearTimeout(alarmTimeout);
    alert('Alarm Cleared');
  }
}

// Function to toggle between 12-hour and 24-hour time formats
function toggleTimeFormat() {
  is24Hour = !is24Hour;
  time();
}

// Update the time every 100 milliseconds
setInterval(time, 100);
