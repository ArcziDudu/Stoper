const startBtn = document.querySelector('.start');
const pauseBtn = document.querySelector('.pause');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');
const historyBtn = document.querySelector('.history');
const stopwatch = document.querySelector('.wrapper__stopwatch');
const time = document.querySelector('.wrapper__time');
const timeList = document.querySelector('.wrapper__time-list');

const infoBTn = document.querySelector('.fa-question');
const brushBTn = document.querySelector('.fa-paintbrush');
const modalShadow = document.querySelector('.modal-shadow');
const closeModalBtn = document.querySelector('.close');

const colors = document.querySelector('.colors')
const redColor = document.querySelector('.red');
const greenColor = document.querySelector('.green');
const blueColor = document.querySelector('.blue');

let root = document.documentElement;
let countTime;
let minutes = 0;
let seconds = 0;
let timesArr = [];

const handleStart = () =>{
    clearInterval(countTime)
   countTime = setInterval(() =>{
       if(seconds < 9){
           seconds++;
           stopwatch.textContent = `${minutes}:0${seconds}`
       }else if(seconds >= 9 &&  seconds < 59){
           seconds++
           stopwatch.textContent = `${minutes}:${seconds}`
       }else {
           minutes++;
           seconds = 0;
           stopwatch.textContent = `${minutes}:00`
       }
   }, 1000)

}
const handleStop =() =>{
    time.innerHTML = `Ostatni wynik to: ${stopwatch.textContent}`
    if(stopwatch.textContent !== '0:00'){
        time.style.visibility = 'visible';
        timesArr.push(stopwatch.textContent)
    }
clearStuff();
}
const handlePause = () =>{
    clearInterval(countTime)
}
const handleReset = () =>{
    time.style.visibility = 'hidden';
    timesArr = [];
clearStuff();
}
const clearStuff = () =>{
    clearInterval(countTime);
    stopwatch.textContent = '0:00';
    timeList.textContent = '';
    seconds = 0;
    minutes = 0;
}
const showHistory = () =>{
    timeList.textContent = '';
    let num = 1;
    timesArr.forEach(time =>{
        const newTime = document.createElement('li');
        newTime.innerHTML = `Pomiar nr ${num}: <span> ${time}</span>`
        timeList.appendChild(newTime);
        num++;
    })
}
const showModal =  () =>{
    modalShadow.style.display = 'block';
    modalShadow.classList.toggle('modal-animation')
}
closeModal = () =>{
    modalShadow.style.display = 'none'
    modalShadow.classList.toggle('modal-animation')
}
const closeColors = () =>{
    colors.classList.toggle('visible-colors')
}
startBtn.addEventListener('click', handleStart);
pauseBtn.addEventListener('click', handlePause);
stopBtn.addEventListener('click', handleStop);
resetBtn.addEventListener('click', handleReset);
historyBtn.addEventListener('click', showHistory);
infoBTn.addEventListener('click', showModal);
closeModalBtn.addEventListener('click', closeModal);
window.addEventListener('click', e  => e.target === modalShadow ? closeModal() : false);
brushBTn.addEventListener('click', () =>{
    colors.classList.toggle('visible-colors');
})


redColor.addEventListener('click', () =>{
    root.style.setProperty('--first-color','rgb(250, 20, 6)');
    closeColors();
})
greenColor.addEventListener('click', () =>{
    root.style.setProperty('--first-color','rgb(111, 192, 111)');
    closeColors();
})
blueColor.addEventListener('click', () =>{
    root.style.setProperty('--first-color','rgb(102, 226, 231)');
    closeColors();
})