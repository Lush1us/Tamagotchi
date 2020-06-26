console.log("I'm the captain now!")

class Tamagotchi {
    constructor(name, age) {
        this.name = name,
        this.age = age
    }
}
//------TIMERS

let hungerTimer = 100;
let sleepinessTimer = 100;
let boredomTimer = 100;
let gameTimer = 0;
let frequency = 200;

//------EVENTS

document.getElementById('start').addEventListener('click', first);

document.getElementById('feed').addEventListener('click', function () {
    for (let i = 1; i < 20; i++)
        if (hungerTimer < 100) {
            document.getElementById(`hun${hungerTimer}`).setAttribute('style', 'background-color: transparent');
            hungerTimer += 1;
    }else document.getElementById(`hun${hungerTimer}`).setAttribute('style', 'background-color: transparent');
})

document.getElementById('sleep').addEventListener('click', function () {
    for (let i = 1; i < 20; i++)
        if (sleepinessTimer < 100) {
            document.getElementById(`sleep${sleepinessTimer}`).setAttribute('style', 'background-color: transparent');
            sleepinessTimer += 1;
    }else document.getElementById(`sleep${sleepinessTimer}`).setAttribute('style', 'background-color: transparent');
})

document.getElementById('play').addEventListener('click', function () {
    for (let i = 1; i < 20; i++)
        if (boredomTimer < 100) {
            document.getElementById(`bore${boredomTimer}`).setAttribute('style', 'background-color: transparent');
            boredomTimer += 1;
    }else document.getElementById(`bore${boredomTimer}`).setAttribute('style', 'background-color: transparent');
})

//------GLOBAL VARIABLES

const embryo = [107, 108, 109, 110, 111, 112, 126, 133, 145, 148, 151, 154, 165, 168, 171, 174, 185, 194, 205, 207, 212, 214, 225, 228, 229, 230, 231, 234, 246, 253, 255, 257, 267, 268, 269, 270, 271, 272, 276, 278]


//------FUNCTIONS

function init() {
        for (let i = 1; i <= 400; i++) {
        const pixel = document.createElement('div')
        pixel.setAttribute('class', 'pixel')
        pixel.setAttribute('id', `${i}`)
        pixel.setAttribute('style', 'background-color: transparent')
        const canvas = document.querySelector('.canvas')
        canvas.appendChild(pixel)
    }
}
init();
function first() {
    document.getElementById('name').innerHTML = document.getElementById('naming').value
    document.getElementById('intro').remove();
    for (let i = 0; i < embryo.length; i++) {
        document.getElementById(`${embryo[i]}`).setAttribute('style', 'background-color: black')
    }
    setInterval(function gameTime() {
        gameTimer++
    }, 1000)
    hunger();
    sleepiness();
    boredom();
}
function hunger() {
    
    const hungerBar = document.createElement('div')
    hungerBar.setAttribute('class', 'statusBar')
    hungerBar.setAttribute('id', 'Hunger')
    document.getElementById('status').appendChild(hungerBar)
    for (let i = 1; i <= 100; i++) {
        const barPixel = document.createElement('div')
        barPixel.setAttribute('class', 'barPixel')
        barPixel.setAttribute('id', `hun${i}`)
        hungerBar.appendChild(barPixel)
    }

    const hunTime = setInterval(timer, frequency)
    function timer() {
        if (sleepinessTimer === 0 || boredomTimer === 0) {
            clearInterval(hunTime)
        } else if (hungerTimer > 0) {
            const pix = document.getElementById(`hun${hungerTimer}`)
            pix.setAttribute('style', 'background-color: green')
            hungerTimer--
        } else {
            clearInterval(hunTime)
            alert('game over')
        }
    }
}
function sleepiness() {
    
    const sleepinesBar = document.createElement('div')
    sleepinesBar.setAttribute('class', 'statusBar')
    sleepinesBar.setAttribute('id', 'Sleepiness')
    document.getElementById('status').appendChild(sleepinesBar)
    for (let i = 1; i <= 100; i++) {
        const barPixel = document.createElement('div')
        barPixel.setAttribute('class', 'barPixel')
        barPixel.setAttribute('id', `sleep${i}`)
        sleepinesBar.appendChild(barPixel)
    }

    const sleTime = setInterval(timer, frequency)
    // setInterval(freqInc, 10000)
    // function freqInc() {
    //     clearInterval();
    //     frequency -= 100
    //     setInterval(timer, frequency)
    // }
    function timer() {
        if (hungerTimer === 0 || boredomTimer === 0) {
            clearInterval(sleTime)
        } else if (sleepinessTimer > 0) {
            const pix = document.getElementById(`sleep${sleepinessTimer}`)
            pix.setAttribute('style', 'background-color: green')
            sleepinessTimer--
        } else {
            clearInterval(sleTime)
            alert('game over')
        }
    }
}
function boredom() {
    
    const boredomBar = document.createElement('div')
    boredomBar.setAttribute('class', 'statusBar')
    boredomBar.setAttribute('id', 'Boredom')
    document.getElementById('status').appendChild(boredomBar)
    for (let i = 1; i <= 100; i++) {
        const barPixel = document.createElement('div')
        barPixel.setAttribute('class', 'barPixel')
        barPixel.setAttribute('id', `bore${i}`)
        boredomBar.appendChild(barPixel)
    }

    
    // setInterval(freqInc, 10000)
    const borTime = setInterval(timer, frequency)
    // function freqInc() {
    //     clearInterval();
    //     frequency -= 100
    //     setInterval(timer, frequency)
    // }
    function timer() {
        if (hungerTimer === 0 || sleepinessTimer === 0) {
            clearInterval(borTime)
        } else if (boredomTimer > 0) {
            const pix = document.getElementById(`bore${boredomTimer}`)
            pix.setAttribute('style', 'background-color: green')
            boredomTimer--
        } else {
            clearInterval(borTime)
            alert('GAME OVER')
        }    
    }
}
