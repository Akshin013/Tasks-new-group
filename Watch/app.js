let mainDiv = document.getElementById("main-div")

const WatchMode =      document.getElementById("Watch-mode")
const SecundomerMode = document.getElementById("Secundomer-mode")
const body = document.getElementById("body")
WatchMode.addEventListener("click", () => {
    
    mainDiv.innerHTML = `
 
<div id="main">
        <p id="watch">
        </p>
    </div>
    `
    const main = document.getElementById("main");
let watchBox = document.getElementById("watch")
let time = new Date();
let hours = time.getHours();
let minutes = time.getMinutes();
let seconds = time.getSeconds();
if (seconds < 10 ) {
    seconds = "0" + seconds;
    
}
watchBox.innerText =`${hours}:${minutes}:${seconds}`;
// let time = new Date();

setInterval(()=>{
    const main = document.getElementById("main");
    let watchBox = document.getElementById("watch")


  
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    if (seconds < 10 ) {
        seconds = "0" + seconds;
        
    }


    watchBox.innerText =`${hours}:${minutes}:${seconds}`;

    
},1000)
console.log("sdf");

})

SecundomerMode.addEventListener("click", () => {
    mainDiv.innerHTML = `

    <div id="stopwatch">
        <p id="stopwatch-display">00:00:00</p>
        <div id="stopwatch-controls">
            <button id="start-stopwatch">Start</button>
            <button id="stop-stopwatch">Stop</button>
            <button id="reset-stopwatch">Reset</button>
    </div>
    </div> 
    `

    const start = document.getElementById("start-stopwatch")
    const stop =  document.getElementById("stop-stopwatch")
    const reset = document.getElementById("reset-stopwatch")
    let timeBox = document.getElementById("stopwatch-display")
    
    let hour = "00";
    let min =  "00";
    let sec =  "00";
    
    start.addEventListener("click", () => {
    
        let sec = "01";
    
        let interval = 
        setInterval(() => {
            console.log(sec);  
            // timeBox.innerText = sec;
            sec++;             
            if (sec<10) {
                sec = "0" + sec;
                
            }
            timeBox.innerText = `${hour}:${min}:${sec}`;
            if (sec > 59) {
                sec = 0;
                console.log(sec);  
                // timeBox.innerText = sec;
                sec++;
                min++;
                console.log(min);
                if (min<10) {
                    min = "0" + min;
                    
                }
                // clearInterval(interval); 
                timeBox.innerText = `${hour}:${min}:${sec}`;
            }if(min > 59){
                if (hour<10) {
                    hour = "0" + hour;
                    
                }
                min = 0;
                hour++;
                timeBox.innerText = `${hour}:${min}:${sec}`;
            }
    
        }, 1000);
        
        const stop =  document.getElementById("stop-stopwatch")
        stop.addEventListener("click", () => {
            clearInterval(interval); 
        })
    
        reset.addEventListener("click", () => {
            clearInterval(interval); 
            hour = "00";
            min =  "00";
            sec =  "00";
            timeBox.innerText = `${hour}:${min}:${sec}`;
        })
    
        timeBox.innerText = `${hour}:${min}:${sec}`;
    })
})


































