//Build A digital Stop watch that has (Start, Stop and Reset buttons)
//--------------------------------------------------------
//My Algorithm:
//(a.) create varriabls to hold tye values of hour, minutes, and seconds respectively.
//(b.) create varriables to hold the start, stop and reset buttons respectively.
//(c.) set the value of the hour, minutes, and seconds to Zero
//(d.) attach an eventListener to the start button(it should listen to a click event)
//(e.) assign a setInterval to a start varriable (the interval should run after 1000 miliseconds)
//(f.) add 1 to seconds after 1 milisecond to get the seconds of the stop watch,
//(g.) if seconds is == 60, set seconds to zero, and add 1 to minutes after.
//(h.) if miuntes is = 60, set miuntes to zero, and add 1 to hours.
//(i.) add a click event listener to the stop/clearInterval(start) the setInterval()
//(j.) add a click event listener to the reset button and set the seconds, minutes and hours to zero
//--------------------------------------------------------------------------------------------------
//mySolution:

//varriables for time
let hr = document.querySelector("#hr");
let min = document.querySelector("#min");
let sec = document.querySelector("#sec");

// variables for buttons
const startBtn = document.querySelector("#start-btn");
const stopBtn = document.querySelector("#stop-btn");
const ResetBtn = document.querySelector("#reset-btn");

hr.innerHTML = 0;
min.innerHTML = 0;
sec.innerHTML = 0;

// start Button Event Listener
startBtn.addEventListener("click", () => {
  let start = setInterval(() => {
    sec.innerHTML++;
    if (sec.innerHTML == 60) {
      sec.innerHTML = 0;
      min.innerHTML++;
    }
    if (min.innerHTML == 60) {
      hr.innerHTML++;
      min.innerHTML = 0;
    }
  }, 1000);

  //stop/Pause button
  stopBtn.addEventListener("click", () => {
    clearInterval(start);
  });

  // reset button
  ResetBtn.addEventListener("click", () => {
    hr.innerHTML = 0;
    min.innerHTML = 0;
    sec.innerHTML = 0;
  });
});
 
