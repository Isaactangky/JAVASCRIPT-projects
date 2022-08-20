const time = document.getElementById("time");
const startBtn = document.getElementById("start-btn");
const resetBtn = document.getElementById("reset-btn");

let second = 0;
let minute = 0;
let hour = 0;

let leadingSec =0;
let leadingMin = 0;
let leadingHour = 0;

let interval = null;
let startStatus = false;
function count(){
  second++;
  if (second === 60){
    minute++;
    second = 0;
    if (minute === 60){
      hour++;
      minute = 0;
    }
  }
  if (second < 10) leadingSec = "0" + second;
  else leadingSec = second;
  if (minute < 10) leadingMin = "0" + minute;
  else leadingMin = minute;
  if (hour < 10) leadingHour = "0" + hour;
  else leadingHour = hour;
  let str = `${leadingHour}:${leadingMin}:${leadingSec}`
  time.innerText = str; 

}
startBtn.addEventListener("click", function(){
  if (!startStatus){
    startStatus = true;
    startBtn.innerHTML= `<i class="fa-solid fa-pause"></i>`
    interval = window.setInterval(count, 1000);
  }else{
    startStatus =false;
    startBtn.innerHTML= `<i class="fa-solid fa-play"></i>`
    window.clearInterval(interval);
  }
})
/*window.setInterval(count, 1000);*/

resetBtn.addEventListener("click", function(){
   second = 0;
   minute = 0;
   hour = 0;
   time.innerText = "00:00:00";
})