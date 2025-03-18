let time_date = document.getElementById('time-date');
let time_time = document.getElementById('time-time');

let timer_time_hour = document.getElementById('timer-time-hour');
let timer_time_minute = document.getElementById('timer-time-minute');
let timer_time_second = document.getElementById('timer-time-second');
let timer_start_button = document.getElementById('timer-start-button');

let alarm_time_hour = document.getElementById('alarm-time-hour');
let alarm_time_minute = document.getElementById('alarm-time-minute');
let alarm_time_second = document.getElementById('alarm-time-second');
let alarm_start_button = document.getElementById('alarm-start-button');
let audio = new Audio('images/audio.mp3');

let stopwatch_time = document.getElementById('watch-time');

//                     clock codes
function time_runner(){
    let date = new Date();
    let month = date.toLocaleString('default', {month: 'long'});
    let year =  date.getFullYear();
    let weekday = date.toLocaleString('en-us', {weekday: 'long'});
    let day = date.getDate();
    let hour = date.getHours().toString().padStart(2, '0');
    let minute = date.getMinutes().toString().padStart(2, '0');
    let second = date.getSeconds().toString().padStart(2, '0');
    time_date.textContent = year+ ' ' + month + ' ' + day + ', ' + weekday; 
    time_time.textContent = hour + ':' + minute + ':' + second
}
setInterval(time_runner, 1000);



//                      Timer codes
let timer_hour = 0;
let timer_minute = 0;
let timer_second = 0;
let timer_interval;

let alarm_hour = 0;
let alarm_minute = 0;
let alarm_second = 0;
let alarm_interval;


function timer_hour_up(name){
    if(name == 'timer'){
        if(timer_hour < 23){
            timer_hour +=1;
            display_timer();
        }
    }
    else if(name == 'alarm'){
        if(alarm_hour < 23){
            alarm_hour +=1;
            display_alarm();
        }
    }

}
function timer_minute_up(name){
    if(name == 'timer'){ 
        if(timer_minute < 59){
        timer_minute +=1;
        display_timer();
        }
    }
    else if(name == 'alarm'){
        if(alarm_minute < 59){
            alarm_minute +=1;
            display_alarm();
        }
    }

}
function timer_second_up(name){
    if(name == 'timer'){
        if(timer_second < 59){
            timer_second+=1;
            display_timer();
        }
    }
    else if(name == 'alarm'){
        if(alarm_second < 59){
            alarm_second+=1;
            display_alarm();
        }
    }

}
function timer_hour_down(name){
    if(name == 'timer'){
        if(timer_hour > 0){
            timer_hour-=1;
            display_timer();
        }
    }
    else if(name == 'alarm'){
        if(alarm_hour > 0){
            alarm_hour-=1;
            display_alarm();
        }
    }

}
function timer_minute_down(name){
    if(name == 'timer'){
        if(timer_minute > 0){
            timer_minute-=1;
            display_timer();
        }
    }
    else{
        if(alarm_minute > 0){
            alarm_minute-=1;
            display_alarm();
        }
    }

}
function timer_second_down(name){
    if(name == 'timer'){
        if(timer_second > 0){
            timer_second-=1;
            display_timer();
        }
    }
    else{
        if(alarm_second > 0){
            alarm_second-=1;
            display_alarm();
        }
    }

}

function timer_down(){
    let seconds = (timer_hour * 60 * 60) + (timer_minute * 60) + timer_second;

    if(seconds > 0){
        seconds-=1;
        timer_hour = Math.floor(seconds / 3600);
        seconds = seconds - timer_hour * 3600;
        timer_minute = Math.floor(seconds / 60);
        seconds = seconds - timer_minute * 60; 
        timer_second = seconds; 
    } 
    display_timer();  
}

function display_timer(){
    if(timer_second < 10){
        timer_time_second.textContent = `0${timer_second}`;
    }
    else{
        timer_time_second.textContent = `${timer_second}`;
    }
    if(timer_minute < 10){
        timer_time_minute.textContent = `0${timer_minute}`;
    }
    else{
        timer_time_minute.textContent = `${timer_minute}`;
    }
    if(timer_hour < 10){
        timer_time_hour.textContent = `0${timer_hour}`;
    }
    else{
        timer_time_hour.textContent = `${timer_hour}`;
    }
    if(timer_hour == 0 && timer_minute == 0 && timer_second == 0){
        timer_start_button.disabled = false;
        clearInterval(timer_interval);
        audio.play();
    }
}
function display_alarm(){
    if(alarm_second < 10){
        alarm_time_second.textContent = `0${alarm_second}`;
    }
    else{
        alarm_time_second.textContent = `${alarm_second}`;
    }
    if(alarm_minute < 10){
        alarm_time_minute.textContent = `0${alarm_minute}`;
    }
    else{
        alarm_time_minute.textContent = `${alarm_minute}`;
    }
    if(alarm_hour < 10){
        alarm_time_hour.textContent = `0${alarm_hour}`;
    }
    else{
        alarm_time_hour.textContent = `${alarm_hour}`;
    }
    
}



function timer_start(){
    timer_interval = setInterval(timer_down, 1000);
    timer_start_button.disabled = true;
}
function timer_stop(){
    clearInterval(timer_interval);
    timer_start_button.disabled = false;
}

function timer_restart(){
    timer_hour = 0;
    timer_minute = 0;
    timer_second = 0;
    display_timer();
}




//                         Stopwatch codes

let watch_interval;
let start_time = 0;
let elapsed_time = 0;
let isRunning = false;

function watch_start(){

    if(!isRunning){
        start_time = Date.now() - elapsed_time;
        watch_interval = setInterval(update, 10);
        isRunning = true;
    }
    
}

function watch_stop(){
    if(isRunning){
        clearInterval(watch_interval);
        elapsed_time = Date.now() - start_time;
        isRunning = false;
    }
}
function watch_restart(){
    clearInterval(watch_interval);
    elapsed_time = 0;
    start_time = 0;
    isRunning = false;
    stopwatch_time.textContent = "00:00:00:00";

}
function update(){
    const currentTime = Date.now();
    elapsed_time = currentTime - start_time;
    let hours = Math.floor(elapsed_time / (1000 * 60 * 60));
    let minutes = Math.floor(elapsed_time / (1000 * 60) % 60);
    let seconds = Math.floor(elapsed_time / 1000 % 60);
    let milSeconds = Math.floor(elapsed_time % 1000 / 10);

    hours = hours.toString().padStart(2, 0);
    minutes = minutes.toString().padStart(2, 0);
    seconds = seconds.toString().padStart(2, 0);
    milSeconds = milSeconds.toString().padStart(2, 0);
    stopwatch_time.textContent = hours+":"+minutes+":"+seconds + ":"+milSeconds;
}


function alarm_start(){
    alarm_interval = setInterval(time_check, 1000);
    alarm_start_button.disabled = true;
}
function time_check(){
    let time = new Date();
    if(time.getHours() == alarm_hour && time.getMinutes() == alarm_minute && time.getSeconds() == alarm_second){
        clearInterval(alarm_interval);
        audio.play();
    }
}
function alarm_stop(){
    clearInterval(alarm_interval);
    alarm_start_button.disabled = false;
}
function alarm_restart(){
    alarm_hour = 0;
    alarm_minute = 0;
    alarm_second = 0;
    display_alarm();
    clearInterval(alarm_interval);
    alarm_start_button.disabled = false;
}

