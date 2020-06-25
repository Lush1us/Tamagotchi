console.log("I'm the captain now!")

class Tamagotchi {
    constructor(name, age) {
    this.name = name,
    this.age = age
    }
}
let hungerTimer = 100;
function hunger() {
    const hungerBar = document.getElementById('Hunger')
    for (let i = 1; i <= 100; i++) {
        const barPixel = document.createElement('div')
        barPixel.setAttribute('class', 'barPixel')
        barPixel.setAttribute('id', `hun${i}`)
        hungerBar.appendChild(barPixel)
    }
    
    setInterval(function timer(){
        const pix = document.getElementById(`hun${hungerTimer}`)
        pix.setAttribute('style', 'background-color: green')
        hungerTimer--
    }, 1000)
}

document.getElementById('feed').addEventListener('click', function () {
    for (let i = 1; i < 20; i++)
        if (hungerTimer < 100) {
            document.getElementById(`hun${hungerTimer}`).setAttribute('style', 'background-color: transparent');
            hungerTimer += 1;
    }else document.getElementById(`hun${hungerTimer}`).setAttribute('style', 'background-color: transparent');
})
const embryo = [107,108,109,110,111,112,126,133,145,148,151,154,165,168,171,174,185,194,205,207,212,214,225,228,229,230,231,234,246,253,255,257,267,268,269,270,271,272,276,278]

document.getElementById('start').addEventListener('click', first);

function first() {
    for (let i = 1; i <= 400; i++) {
        const pixel = document.createElement('div')
        pixel.setAttribute('class', 'pixel')
        pixel.setAttribute('id', `${i}`)
        pixel.setAttribute('style', 'background-color: transparent')
        pixel.addEventListener('click', first)
        const canvas = document.querySelector('.canvas')
        canvas.appendChild(pixel)
    }
    document.getElementById('start').remove();
    for (let i = 0; i < embryo.length; i++) {
        document.getElementById(`${embryo[i]}`).setAttribute('style', 'background-color: black')
    }
    hunger();
    
}
    

// function hunger () {console.log('yo')}
//     setInterval(hunger, 2000);








// setTimeout(myFunction, 2000)