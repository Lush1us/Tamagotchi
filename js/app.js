
//------TIMERS

let hungerTimer = 100;
let sleepinessTimer = 100;
let boredomTimer = 100;
let gameTimer = 0;
let frequency = 100;

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
const level2 = [88,89,90,91,92,93,107,114,126,135,146,149,152,155,166,169,172,175,186,195,206,208,213,215,226,229,230,231,232,235,246,255,267,274,287,294,307,310,311,314,326,330,331,335,346,347,348,349,352,353,354,355]
const level3 = [48,49,50,51,52,53,66,67,74,75,85,87,88,93,94,96,104,109,112,117,124,137,143,147,148,149,152,153,154,158,163,178,183,184,197,198,205,208,209,210,211,212,213,216,226,235,246,255,266,275,286,290,291,295,306,310,311,315,324,325,330,331,336,337,343,349,352,358,363,364,365,366,367,368,369,372,373,374,375,376,377,378]
let age = 1;

//------FUNCTIONS

// Initial function that loads the pixel canvas 
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

// The first function that is activated when hitting start.
function first() {
    // Saves the name from the input
    document.getElementById('name').innerHTML = document.getElementById('naming').value
    // Removes the intro screen
    document.getElementById('intro').remove();
    // The loop that creates the design
    for (let i = 0; i < embryo.length; i++) {
        document.getElementById(`${embryo[i]}`).setAttribute('style', 'background-color: black')
    }
    // This sets the game timer
    setInterval(gameTime, 1000)
        function gameTime() {
            if (gameTimer === 60 || hungerTimer === 0 || sleepinessTimer === 0 || boredomTimer === 0) {
                alert('Thank you for your service, agent. This Tamagotchi will be a great asset!')
                clearInterval(gameTime(), 1000)
            }
        gameTimer++
        //these handle the design changes based on age
        if (gameTimer % 20 === 0) {
            age++
            document.getElementById('gametime').innerText = `Game time: ${gameTimer} Age: ${age}`
            if (age === 2) {
                for (let i = 0; i < embryo.length; i++) {
                    document.getElementById(`${embryo[i]}`).setAttribute('style', 'background-color: transparent')
                }
                for (let i = 0; i < level2.length; i++) {
                    document.getElementById(`${level2[i]}`).setAttribute('style', 'background-color: black')
                }
            } else if (age === 3) {
                for (let i = 0; i < level2.length; i++) {
                    document.getElementById(`${level2[i]}`).setAttribute('style', 'background-color: transparent')
                }
                for (let i = 0; i < level3.length; i++) {
                    document.getElementById(`${level3[i]}`).setAttribute('style', 'background-color: black')
                }
            }
        } else {
          
            document.getElementById('gametime').innerText = `Game time: ${gameTimer} Age: ${age}`
        }
    }
    //calling on all functions :)
    hunger();
    sleepiness();
    boredom();
}
// these three functions handle everything related to the stats
function hunger() {
    //this creates the status bars
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
    // This handles the bar timers and animation
    const hunTime = setInterval(timer, frequency)
    function timer() {
        if (sleepinessTimer === 0 || boredomTimer === 0 || gameTimer === 60) {
            clearInterval(hunTime)
        } else if (hungerTimer > 0) {
            const pix = document.getElementById(`hun${hungerTimer}`)
            pix.setAttribute('style', 'background-color: green')
            hungerTimer--
        } else {
            clearInterval(hunTime)
            alert("What do you mean it's dead? You might have just doomed us all!")
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
    function timer() {
        if (hungerTimer === 0 || boredomTimer === 0 || gameTimer === 60) {
            clearInterval(sleTime)
        } else if (sleepinessTimer > 0) {
            const pix = document.getElementById(`sleep${sleepinessTimer}`)
            pix.setAttribute('style', 'background-color: green')
            sleepinessTimer--
        } else {
            clearInterval(sleTime)
            alert("What do you mean it's dead? You might have just doomed us all!")
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

    const borTime = setInterval(timer, frequency)

    function timer() {
        if (hungerTimer === 0 || sleepinessTimer === 0 || gameTimer === 60) {
            clearInterval(borTime)
        } else if (boredomTimer > 0) {
            const pix = document.getElementById(`bore${boredomTimer}`)
            pix.setAttribute('style', 'background-color: green')
            boredomTimer--
        } else {
            clearInterval(borTime)
            alert("What do you mean it's dead? You might have just doomed us all!")
        }    
    }
}
