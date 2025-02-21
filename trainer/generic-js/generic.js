document.addEventListener('DOMContentLoaded', () => {
    let scrable_t = document.getElementById('scramble');
    const timerElement = document.getElementById('timer');

    let timerInterval;
    let startTime;
    let elapsedTime = 0;
    let running = false;
    let cooldown = false;

document.querySelectorAll('#case-selection, #case-selection2, #case-selection3, #case-selection4').forEach(element => {
    element.addEventListener('click', function(event) {
        const clickedImage = event.target;

        if (clickedImage.tagName === 'IMG') {
            const caseName = clickedImage.getAttribute('data-name');
            const caseIndex = cases.findIndex(c => c.name === caseName);
        
            if (clickedImage.style.border === '2px solid lightgray') {
                clickedImage.style.border = 'none';
                if (caseIndex > -1) cases[caseIndex].selected = false;
            } else {
                clickedImage.style.border = '2px solid lightgray';
                if (caseIndex > -1) cases[caseIndex].selected = true;
            }
        }
    });
});

function newAlg() {
    const selectedCases = cases.filter(c => c.selected);

    let imgHint = document.getElementById('hintImg');
    let setupHint = document.getElementById('hintSetup');
    let solutionHint = document.getElementById('hintSol');


    if (selectedCases.length === 0) {
        scrable_t.textContent = 'No case selected';
        return;
    }

    const randomIndex = Math.floor(Math.random() * selectedCases.length);
    scrable_t.textContent = selectedCases[randomIndex].scramble;

    imgHint.src = selectedCases[randomIndex].img;
    setupHint.innerHTML = "Setup: " + selectedCases[randomIndex].scramble;
    solutionHint.innerHTML = "Solution: " + selectedCases[randomIndex].solution;
}

document.getElementById('generateScramble').addEventListener('click', function(event) {
    newAlg();
    blur(false);
});

function blur(clicked) {
    let box = document.getElementById('boxBlur');
    
    if (box.classList.contains('blur') && clicked) {
        box.classList.remove('blur');
    }
    else box.classList.add('blur');
}

document.getElementById('hint').addEventListener('click', () => {
    blur(true);
});

function updateTimer() {
    const now = Date.now();
    const timeElapsed = new Date(now - startTime);

    const minutes = String(timeElapsed.getUTCMinutes()).padStart(2, '0');
    const seconds = String(timeElapsed.getUTCSeconds()).padStart(2, '0');
    const milliseconds = String(Math.floor(timeElapsed.getUTCMilliseconds() / 10)).padStart(2, '0');

    timerElement.textContent = `${minutes}:${seconds}:${milliseconds}`;
}

function startTimer() {
    startTime = Date.now();
    timerInterval = setInterval(updateTimer, 10);
    running = true;
}

function stopTimer() {
    clearInterval(timerInterval);
    elapsedTime += Date.now() - startTime;
    running = false;
    cooldown = true;
    setTimeout(() => {
        cooldown = false;
    }, 3000);
    newAlg();
}

document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        event.preventDefault();
        if (!running && !cooldown) {
            timerElement.classList.add('green');
        }
    }
});

document.addEventListener('keyup', (event) => {
    if (event.code === 'Space') {
        event.preventDefault();
        timerElement.classList.remove('green');
        if (!running && !cooldown) {
            startTimer();
        } else if (running) {
            stopTimer();
        }
    }
});
});