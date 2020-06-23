console.log("I'm the captain now!")

class Tamagotchi {
    constructor(name, age) {
    this.name = name,
    this.age = age
    }
}

const embryo = [86, 87, 88, 89, 90, 101, 107, 116, 119, 121, 124, 132, 135, 137, 140, 148, 150, 154, 156, 164, 167, 168, 169, 172, 181, 187, 188, 190, 198, 199, 200, 201, 202, 205, 207]

function first() {
    for (let i = 0; i < embryo.length; i++) {
        document.querySelector(`.pixel:nth-child(${embryo[i]})`).setAttribute('style', 'background-color: black')       
    }
    document.getElementById('start').remove();
}

document.getElementById('start').addEventListener('click', first);