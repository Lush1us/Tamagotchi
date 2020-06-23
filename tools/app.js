console.log('insanity')
const divcontainer = document.getElementById('canvas')

for (let i = 1; i <= 400; i++) {
    const pixel = document.createElement('div')
    pixel.setAttribute('class', 'pixel')
    pixel.setAttribute('id', `${i}`)
    pixel.setAttribute('style', 'background-color: white')
    pixel.addEventListener('click', handleClick)
    divcontainer.appendChild(pixel)
}

function handleClick (event) {
    const pixel = event.target;
    if (pixel.getAttribute('style') === 'background-color: white') {
        pixel.setAttribute('style','background-color: black')
    } else {
        pixel.setAttribute('style', 'background-color: white')
    }
}


document.getElementById('genArr').addEventListener('click', design)

function design () {
    const design = []
    for (let i = 1; i <= 400; i++) {
        const target = document.getElementById(`${i}`)
        if (target.getAttribute('style') === 'background-color: black') {
            design.push(parseInt(`${i}`))
        }
    }
    document.getElementById('return').innerText = `[${design}]`
}




