const dino = document.querySelector('.dino')
let isJumping = false;
let position = 0;
const background = document.querySelector('.background')

function handleKeyUp(event) {
    if (event.keyCode === 32) {
        if (!isJumping) {
            jump();
        }
    }
}
function jump() {
    isJumping = true;

    let upInterval = setInterval(() => {
        if (position >= 150) {
            clearInterval(upInterval);

            //descendo
            let downIntervalo = setInterval(() => {
                if (position <= 0) {
                    clearInterval(downIntervalo);
                    isJumping = false;

                } else {
                    //subindo
                    position -= 20;
                    dino.style.bottom = position + 'px';
                }
            }, 20)
        } else {
            //subindo
            position += 20;
            dino.style.bottom = position + 'px';
        }
    }, 20)
}
function createCactus() {
    const cactus = document.createElement('div')
    let cactusPosition = 1000;
    let randonTime = Math.random() * 6000;



    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px'
    background.appendChild(cactus);

    let leftInterval = setInterval(() => {
        cactusPosition -= 10;
        cactus.style.left = cactusPosition + 'px'

        if (cactusPosition < - 60) {
            clearInterval(leftInterval);
            background.removeChild(cactus)
        } else if(cactusPosition > 0 && cactusPosition < 60 && position < 60){
            clearInterval(leftInterval)
            document.body.innerHTML = '<h1 class="game-over">Fim de jogo</h1>'
        } else {
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px'
        }
    }, 20)

    setTimeout(createCactus, randonTime)
}
createCactus();
document.addEventListener('keyup', handleKeyUp)