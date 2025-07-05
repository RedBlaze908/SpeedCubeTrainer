document.addEventListener('DOMContentLoaded', () => {
    let scrable_t = document.getElementById('scramble');
    const timerElement = document.getElementById('timer');

    let timerInterval;
    let startTime;
    let elapsedTime = 0;
    let running = false;
    let cooldown = false;

    let eg0 = false;
    let eg1 = false;
    let eg2 = false;

    const cases = [
        { name: '3m1', scramble: "R U' R'", selected: false},
        { name: '3m2', scramble: "R U R'", selected: false},
        { name: '3m3', scramble: "R U2 R'", selected: false},
        { name: '3m4', scramble: "R2 U R2", selected: false},
        { name: '3m5', scramble: "R2 U R2 U", selected: false},
        { name: '3m6', scramble: "R2 U R2 U'", selected: false},
        { name: '3m7', scramble: "R U' R' U R U' R'", selected: false},
        { name: '3m8', scramble: "R U' R' U ", selected: false},

        { name: '4m1', scramble: "R U R2", selected: false},
        { name: '4m2', scramble: "R U' R2", selected: false},
        { name: '4m3', scramble: "R U2 R2", selected: false},
        { name: '4m4', scramble: "R U R", selected: false},
        { name: '4m5', scramble: "R U' R", selected: false},
        { name: '4m6', scramble: "F' U' F R'", selected: false},
        { name: '4m7', scramble: "R U R' U' R", selected: false},
        { name: '4m8', scramble: "R U R' F2", selected: false},
        { name: '4m9', scramble: "R U R' F' R'", selected: false},
        { name: '4m10', scramble: "R U R' F' R' U", selected: false},
        { name: '4m11', scramble: "R2 U R", selected: false},
        { name: '4m12', scramble: "R2 U R2 F", selected: false},
        { name: '4m14', scramble: "R2 U R2 U' R'", selected: false},
        { name: '4m15', scramble: "R2 U R2 U R2", selected: false},
        { name: '4m16', scramble: "R U' R' U R'", selected: false},
        { name: '4m17', scramble: "R U' R' U R", selected: false},
        { name: '4m18', scramble: "R U' R' U R2", selected: false},
        { name: '4m19', scramble: "R U' R' U F", selected: false},
        { name: '4m20', scramble: "R U' R' U' R2 U", selected: false},
    ];

    document.getElementById('case-type').addEventListener('click', function(event) {
        const clickedImage = event.target;

        if (clickedImage.tagName === 'IMG') {
            const caseType = clickedImage.getAttribute('data-name');

            const images = document.querySelectorAll('#case-type img');
            images.forEach(img => img.style.border = 'none');

            if (caseType == "eg0") {eg0 = true; eg1 = false; eg2 = false;}
            else if (caseType == "eg1") {eg1 = true; eg0 = false; eg2 = false;}
            else if (caseType == "eg2") {eg2 = true; eg0 = false; eg1 = false;}

            if (eg0 || eg1 || eg2) {
                if (clickedImage.style.border === '2px solid lightgray') {
                    clickedImage.style.border = 'none';
                } else {
                    clickedImage.style.border = '2px solid lightgray';
                }
            }
        }
    });

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

    

    let lastIndex = -1;

    let imgHint = document.getElementById('hintImg');
    let scrambleCase = document.getElementById('hintSetup');
    let solutionMoves = document.getElementById('hintSol');

    function newAlg() {
        let selectedCases = null;

        if (eg0) {
            const rand = Math.floor(Math.random() * 40);
            selectedCases = eg0A[rand].scramble;
            imgHint.src = eg0A[rand].img;
            scrambleCase.textContent = eg0A[rand].scramble;
            solutionMoves.textContent = eg0A[rand].solution;
        }

        if (eg1) {
            const rand = Math.floor(Math.random() * 40);
            selectedCases = eg1A[rand].scramble;
            imgHint.src = eg1A[rand].img;
            scrambleCase.textContent = eg1A[rand].scramble;
            solutionMoves.textContent = eg1A[rand].solution;
        }
        
        if (eg2) {
            const rand = Math.floor(Math.random() * 40);
            selectedCases = eg2A[rand].scramble;
            imgHint.src = eg2A[rand].img;
            scrambleCase.textContent = eg2A[rand].scramble;
            solutionMoves.textContent = eg2A[rand].solution;
        }

        if (selectedCases === null) {
            scrable_t.textContent = 'No case selected';
            return;
        }

        const casesSel = cases.filter(c => c.selected);
        const randomIndex = Math.floor(Math.random() * casesSel.length);

        scrable_t.textContent = selectedCases + " " + casesSel[randomIndex].scramble;
    }

    document.getElementById('generateScramble').addEventListener('click', function(event) {
        newAlg();
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
