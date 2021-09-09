const width = 28
const grid = document.querySelector('.grid')
const scoreDisplay = document.querySelector('#score')
let squares = []
let score = 0

const layout = [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,3,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,4,4,4,4,4,4,4,4,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,2,2,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    4,4,4,4,4,4,0,0,0,4,1,2,2,2,2,2,2,1,4,0,0,0,4,4,4,4,4,4,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,3,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1 
]


function createBoard() {
     for (let i = 0; i < layout.length; i++) {
         const square = document.createElement('div')

        grid.appendChild(square)

        squares.push(square)

        if (layout[i] === 0) {
            squares[i].classList.add('pac-dot')
        } else if (layout[i] === 1) {
            squares[i].classList.add('wall')
        } else if (layout[i] === 2) {
            squares[i].classList.add('ghost-lair')
        } else if (layout[i] === 3) {
            squares[i].classList.add('power-pellet')
        } 


     }
}

createBoard() 


let PacManCurrentIndex = 490
squares[PacManCurrentIndex].classList.add('pacman')

function control(e) {
    squares[PacManCurrentIndex].classList.remove('pacman')
    switch(e.keyCode) {
        case 40:
        console.log('pressed down')
        if (
            !squares[PacManCurrentIndex + width].classList.contains('ghost-lair')
            &&
            !squares[PacManCurrentIndex + width].classList.contains('wall')
            &&
            PacManCurrentIndex + width < width * width
            ) {
                PacManCurrentIndex +=width
            }
            
        break
        case 38:
        console.log('pressed up')
        if (
            !squares[PacManCurrentIndex - width].classList.contains('ghost-lair')
            &&
            !squares[PacManCurrentIndex - width].classList.contains('wall')
            &&
            PacManCurrentIndex - width > 0
            ) {
                PacManCurrentIndex -=width
            }
            
        break
        case 37:
        console.log('pressed left')
        if (
            !squares[PacManCurrentIndex - 1].classList.contains('ghost-lair')
            &&
            !squares[PacManCurrentIndex - 1].classList.contains('wall')
            &&
            PacManCurrentIndex % width !== 0
            ) {
                PacManCurrentIndex -=1
            }
            
            if (PacManCurrentIndex === 364){
                PacManCurrentIndex = 391
            }
        break
        case 39:
        console.log('pressed right')
        if (
            !squares[PacManCurrentIndex + 1].classList.contains('ghost-lair')
            &&
            !squares[PacManCurrentIndex + 1].classList.contains('wall')
            &&
            PacManCurrentIndex % width < width - 1
            ) {
                PacManCurrentIndex +=1
            }
            
            if (PacManCurrentIndex === 391){
                PacManCurrentIndex = 364
            }
        break
    }
    squares[PacManCurrentIndex].classList.add('pacman')

    eatPacDot()

    eatPowerpellet()

    checkForWin()
}
document.addEventListener('keyup', control)

function eatPacDot() {
     if (
         squares[PacManCurrentIndex].classList.contains('pac-dot')
         ){
         score++
         scoreDisplay.innerHTML = score
         squares[PacManCurrentIndex].classList.remove('pac-dot')
     }
}

function eatPowerpellet() {
    if (
        squares[PacManCurrentIndex].classList.contains('power-pellet') 
        ){
            squares[PacManCurrentIndex].classList.remove('power-pellet')
            score = score + 10
            ghosts.forEach(Ghost => Ghost.isScared = true)
            setTimeout(unScareGhosts, 10000)
        }   
}

function unScareGhosts(){
    ghosts.forEach(Ghost => Ghost.isScared = false)
}

class Ghost {
    constructor (className, startIndex, speed) {
        this.className = className
        this.startIndex = startIndex
        this.speed = speed
        this.currentIndex = startIndex
        this.isScared = false
        this.timerId = NaN
    }
}

const ghosts = [
    new Ghost('yomi',351,300), 
    new Ghost('lanre',348,250),
    new Ghost('rinji',376,400),
    new Ghost('moyo',379,500),
    new Ghost('mex',350,530)
]

ghosts.forEach(Ghost => {
    squares[Ghost.currentIndex].classList.add(Ghost.className)
    squares[Ghost.currentIndex].classList.add('ghost')
});

ghosts.forEach(Ghost => moveGhost(Ghost))

function moveGhost(Ghost) {
    const directions = [-1, +1, -width, +width]
    let direction = directions[Math.floor(Math.random() * directions.length)]

    Ghost.timerId = setInterval(function() {
        if (
            !squares[Ghost.currentIndex + direction].classList.contains('wall')
            &&
            !squares[Ghost.currentIndex + direction].classList.contains('ghost')
            ){
                squares[Ghost.currentIndex].classList.remove(Ghost.className)
                squares[Ghost.currentIndex].classList.remove('ghost','scared-ghost')
                Ghost.currentIndex += direction
                squares[Ghost.currentIndex].classList.add(Ghost.className)
                squares[Ghost.currentIndex].classList.add('ghost')
            } else direction = directions[Math.floor(Math.random() * directions.length)]
        
        if (Ghost.isScared) {
            squares[Ghost.currentIndex].classList.add('scared-ghost')
        }

        if (
            Ghost.isScared
            &&
            squares[Ghost.currentIndex].classList.contains('pacman')
            ) {
                squares[Ghost.currentIndex].classList.remove(Ghost.className,'ghost','scared-ghost')
                Ghost.currentIndex = Ghost.startIndex
                score +=100
                squares[Ghost.currentIndex].classList.add(Ghost.className,'ghost')
            }
            
            gameOver()
            
    }, Ghost.speed)
}

function gameOver() {
    
    if (
        squares[PacManCurrentIndex].classList.contains('ghost')
        &&
        !squares[PacManCurrentIndex].classList.contains('scared-ghost')
        &&
        squares[PacManCurrentIndex].classList.contains('yomi')
        ) {
                ghosts.forEach(Ghost => clearInterval(Ghost.timerId))
                document.removeEventListener('keyup', control)
                scoreDisplay.innerHTML = 'You Lost. Yomi ate you.'
        } else if (
            squares[PacManCurrentIndex].classList.contains('ghost')
            &&
            !squares[PacManCurrentIndex].classList.contains('scared-ghost')
            &&
            squares[PacManCurrentIndex].classList.contains('rinji')
            ) {
                    ghosts.forEach(Ghost => clearInterval(Ghost.timerId))
                    document.removeEventListener('keyup', control)
                    scoreDisplay.innerHTML = 'You Lost. Rinji ate you.'
            }else if (
                squares[PacManCurrentIndex].classList.contains('ghost')
                &&
                !squares[PacManCurrentIndex].classList.contains('scared-ghost')
                &&
                squares[PacManCurrentIndex].classList.contains('lanre')
                ) {
                        ghosts.forEach(Ghost => clearInterval(Ghost.timerId))
                        document.removeEventListener('keyup', control)
                        scoreDisplay.innerHTML = 'You Lost. Lanre ate you.'
                }else if (
                    squares[PacManCurrentIndex].classList.contains('ghost')
                    &&
                    !squares[PacManCurrentIndex].classList.contains('scared-ghost')
                    &&
                    squares[PacManCurrentIndex].classList.contains('moyo')
                    ) {
                            ghosts.forEach(Ghost => clearInterval(Ghost.timerId))
                            document.removeEventListener('keyup', control)
                            scoreDisplay.innerHTML = 'You Lost. Moyo ate you.'
                    }else if (
                        squares[PacManCurrentIndex].classList.contains('ghost')
                        &&
                        !squares[PacManCurrentIndex].classList.contains('scared-ghost')
                        &&
                        squares[PacManCurrentIndex].classList.contains('mex')
                        ) {
                                ghosts.forEach(Ghost => clearInterval(Ghost.timerId))
                                document.removeEventListener('keyup', control)
                                scoreDisplay.innerHTML = 'You Lost. Mex ate you.'
                        }
                    }

function checkForWin() {
    if (score >= 274) {
        ghosts.forEach(Ghost => clearInterval(Ghost.timerId))
        document.removeEventListener('keyup', control)
        scoreDisplay.innerHTML = "You have Won"
    }
}
