document.addEventListener('DOMContentLoaded', () => {
    const scrambleElement = document.getElementById('scramble');
    const timerElement = document.getElementById('timer');
    const timeRecordedElement = document.getElementById('timeRecorded');
    const generateScrambleButton = document.getElementById('generateScramble');
    const downloadButton = document.getElementById('downloadButton');
    const timesBox = document.getElementById('timesBox');

    const cubeButtons = {
        'cube2x2': {
            element: document.getElementById('cube2x2'),
            generateScramble: generateScramble2x2,
            active: false
        },
        'cube3x3': {
            element: document.getElementById('cube3x3'),
            generateScramble: generateScramble3x3,
            active: false
        },
        'cube4x4': {
            element: document.getElementById('cube4x4'),
            generateScramble: generateScramble4x4,
            active: false
        },
        'cube5x5': {
            element: document.getElementById('cube5x5'),
            generateScramble: generateScramble5x5,
            active: false
        },
        'cube6x6': {
            element: document.getElementById('cube6x6'),
            generateScramble: generateScramble6x6,
            active: false
        },
        'cube7x7': {
            element: document.getElementById('cube7x7'),
            generateScramble: generateScramble7x7,
            active: false
        },
        'cubeclock': {
            element: document.getElementById('cubeclock'),
            generateScramble: generateScrambleclock,
            active: false
        },
        'cubemega': {
            element: document.getElementById('cubemega'),
            generateScramble: generateScramblemega,
            active: false
        },
        'cubepyra': {
            element: document.getElementById('cubepyra'),
            generateScramble: generateScramblepyra,
            active: false
        },
        'cubeskewb': {
            element: document.getElementById('cubeskewb'),
            generateScramble: generateScrambleskewb,
            active: false
        },
        'cubesq1': {
            element: document.getElementById('cubesq1'),
            generateScramble: generateScramblesq1,
            active: false
        },
    };

    let timerInterval;
    let startTime;
    let elapsedTime = 0;
    let running = false;
    let cooldown = false;
    let times = [];
    let activeCube = null;
    let scrambles = [];
    let averages = [];

    function generateScramble3x3() {
        const moves = ["U", "D", "L", "R", "F", "B"];
        const modifiers = ["", "'", "2"];
        let scramble = [];
        let lastMove = "";

        for (let i = 0; i < 20; i++) {
            let move, modifier, fullMove;

            do {
                move = moves[Math.floor(Math.random() * moves.length)];
                modifier = modifiers[Math.floor(Math.random() * modifiers.length)];
                fullMove = move + modifier;
            } while (isInvalidMove(lastMove, move, modifier));

            scramble.push(fullMove);
            lastMove = move;
        }
        scrambles.push(scramble);
        return scramble.join(" ");
    }

    function generateScramble2x2() {
        const moves = ["R", "U", "F"];
        const modifiers = ["", "'", "2"];
        let scramble = [];
        let lastMove = "";

        for (let i = 0; i < 9; i++) {
            let move, modifier, fullMove;

            do {
                move = moves[Math.floor(Math.random() * moves.length)];
                modifier = modifiers[Math.floor(Math.random() * modifiers.length)];
                fullMove = move + modifier;
            } while (isInvalidMove(lastMove, move, modifier));

            scramble.push(fullMove);
            lastMove = move;
        }
        scrambles.push(scramble);
        return scramble.join(" ");
    }

    function generateScramble4x4() {
        const moves = ["U", "D", "L", "R", "F", "B", "Rw", "Lw", "Uw", "Fw"];
        const modifiers = ["", "'", "2"];
        let scramble = [];
        let lastMove = "";

        for (let i = 0; i < 47; i++) {
            let move, modifier, fullMove;

            do {
                move = moves[Math.floor(Math.random() * moves.length)];
                modifier = modifiers[Math.floor(Math.random() * modifiers.length)];
                fullMove = move + modifier;
            } while (isInvalidMove(lastMove, move, modifier));

            scramble.push(fullMove);
            lastMove = move;
        }
        scrambles.push(scramble);
        return scramble.join(" ");
    }

    function generateScramble5x5() {
        const moves = ["U", "D", "L", "R", "F", "B", "Rw", "Lw", "Uw", "Fw", "Bw"];
        const modifiers = ["", "'", "2"];
        let scramble = [];
        let lastMove = "";

        for (let i = 0; i < 60; i++) {
            let move, modifier, fullMove;

            do {
                move = moves[Math.floor(Math.random() * moves.length)];
                modifier = modifiers[Math.floor(Math.random() * modifiers.length)];
                fullMove = move + modifier;
            } while (isInvalidMove(lastMove, move, modifier));

            scramble.push(fullMove);
            lastMove = move;
        }
        scrambles.push(scramble);
        return scramble.join(" ");
    }

    function generateScramble6x6() {
        const moves = ["U", "D", "L", "R", "F", "B", "Rw", "Lw", "Uw", "Fw", "Bw", "3Rw", "3Lw", "3Uw", "3Fw"];
        const modifiers = ["", "'", "2"];
        let scramble = [];
        let lastMove = "";

        for (let i = 0; i < 85; i++) {
            let move, modifier, fullMove;

            do {
                move = moves[Math.floor(Math.random() * moves.length)];
                modifier = modifiers[Math.floor(Math.random() * modifiers.length)];
                fullMove = move + modifier;
            } while (isInvalidMove(lastMove, move, modifier));

            scramble.push(fullMove);
            lastMove = move;
        }
        scrambles.push(scramble);
        return scramble.join(" ");
    }

    function generateScramble7x7() {
        const moves = ["U", "D", "L", "R", "F", "B", "Rw", "Lw", "Uw", "Fw", "Bw", "3Rw", "3Lw", "3Uw", "3Fw", "3Bw"];
        const modifiers = ["", "'", "2"];
        let scramble = [];
        let lastMove = "";

        for (let i = 0; i < 111; i++) {
            let move, modifier, fullMove;

            do {
                move = moves[Math.floor(Math.random() * moves.length)];
                modifier = modifiers[Math.floor(Math.random() * modifiers.length)];
                fullMove = move + modifier;
            } while (isInvalidMove(lastMove, move, modifier));

            scramble.push(fullMove);
            lastMove = move;
        }
        scrambles.push(scramble);
        return scramble.join(" ");
    }

    function generateScrambleclock() {
        const moves = ["UR", "DR", "DL", "UL", "U", "R", "D", "L", "ALL", "y2", "U", "R", "D", "L", "ALL"];
        const modifiers = ["0", "1", "2", "3", "4", "5", "6"];
        const extras = ["-", "+"];
        let scramble = [];
        let lastMove = "";

        for (let i = 0; i < moves.length; i++) {
            if (i == 9) scramble.push(moves[9]);
            else {
                let move, modifier, extra, fullMove;
                do {
                    move = moves[i];
                    modifier = modifiers[Math.floor(Math.random() * modifiers.length)];
                    extra = extras[Math.floor(Math.random() * extras.length)]
                    fullMove = move + modifier + extra;
                } while (isInvalidMove(lastMove, move, modifier));  
                scramble.push(fullMove);
                lastMove = move;
            }
        }
        scrambles.push(scramble);
        return scramble.join(" ");
    }

    function generateScramblemega() {
        const moves = ["R", "D"];
        const modifiers = ["++", "--"];
        const last = ["U\n", "U'\n"];
        let scramble = [];
        let lastMove = "";
        let counter = 0;
    
        for (let i = 0; i < 77; i++) {
            if ((i + 1) % 11 == 0) {
                scramble.push(last[Math.floor(Math.random() * last.length)]);
            } else {
                let move, modifier, fullMove;
                do {
                    move = moves[counter++ % moves.length];
                    modifier = modifiers[Math.floor(Math.random() * modifiers.length)];
                    fullMove = move + modifier;
                } while (fullMove === lastMove);
                scramble.push(fullMove);
                lastMove = fullMove;
            }
        }
        scrambles.push(scramble);
        return scramble.join(" ");
    }

    function generateScramblepyra() {
        const moves = ["L", "U", "R", "B"];
        const lasts = ["l", "b", "u", "r"];
        const modifiers = ["", "'", "2"];
        let scramble = [];
        let lastMove = "";

        for (let i = 0; i < 8; i++) {
            let move, modifier, fullMove;

            do {
                move = moves[Math.floor(Math.random() * moves.length)];
                modifier = modifiers[Math.floor(Math.random() * modifiers.length)];
                fullMove = move + modifier;
            } while (isInvalidMove(lastMove, move, modifier));

            scramble.push(fullMove);
            lastMove = move;
        }
        for(let i = 0; i < Math.floor(Math.random() * 4); ++i) {
            let last, modifier;
            do {
                last = lasts[Math.floor(Math.random() * lasts.length)];
                modifier = modifiers[Math.floor(Math.random() * 2)];
                fullMove = last + modifier;
            } while (isInvalidMove(lastMove, last, modifier));
            scramble.push(fullMove);
            lastMove = last;
        }
        scrambles.push(scramble);
        return scramble.join(" ");
    }

    function generateScrambleskewb() {
        const moves = ["L", "U", "B", "R"];
        const modifiers = ["", "'"];
        let scramble = [];
        let lastMove = "";

        for (let i = 0; i < 8; i++) {
            let move, modifier, fullMove;

            do {
                move = moves[Math.floor(Math.random() * moves.length)];
                modifier = modifiers[Math.floor(Math.random() * modifiers.length)];
                fullMove = move + modifier;
            } while (isInvalidMove(lastMove, move, modifier));

            scramble.push(fullMove);
            lastMove = move;
        }
        scrambles.push(scramble);
        return scramble.join(" ");
    }
    
    function generateScramblesq1() {
        const moves = ["0", "1", "2", "3", "4", "5", "6"];
        const modifiers = ["", "-"];
        let scramble = [];
        let lastMove = "";

        for (let i = 0; i < 9; i++) {
            let move, move2, modifier, modifier2, fullMove;

            do {

                modifier = modifiers[Math.floor(Math.random() * modifiers.length)];
                move = moves[Math.floor(Math.random() * moves.length)];
                modifier2 = modifiers[Math.floor(Math.random() * modifiers.length)];
                move2 = moves[Math.floor(Math.random() * moves.length)];
                fullMove = "(" + modifier + move + "," + modifier2 + move2 + ")/ ";
            } while (isInvalidMove(lastMove, move, modifier));

            scramble.push(fullMove);
            lastMove = move;
        }
        let move, move2, modifier, modifier2, fullMove, extra = ["", "/"];
        modifier = modifiers[Math.floor(Math.random() * modifiers.length)];
        move = moves[Math.floor(Math.random() * moves.length)];
        modifier2 = modifiers[Math.floor(Math.random() * modifiers.length)];
        move2 = moves[Math.floor(Math.random() * moves.length)];
        fullMove = "(" + modifier + move + "," + modifier2 + move2 + ")" + extra[Math.floor(Math.random() * extra.length)];
        scramble.push(fullMove);
        scrambles.push(scramble);
        return scramble.join(" ");
    }
    

    function isInvalidMove(lastMove, move, modifier) {
        if (lastMove === move) {
            return true;
        }
        if (lastMove + "'" === move + modifier || lastMove + "2" === move + modifier) {
            return true;
        }
        return false;
    }

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
        const finalTime = timerElement.textContent;
        times.push(finalTime);
        timeRecordedElement.textContent = `Time: ${finalTime}`;
        addTimeToBox(finalTime);
        if (times.length % 5 === 0) {
            const avgTime = calculateAverage(times.slice(-5));
            addAverageToBox(avgTime);
        }
        setTimeout(() => {
            cooldown = false;
        }, 3000);
        resetTimer();
        scrambleElement.textContent = activeCube ? cubeButtons[activeCube].generateScramble() : '';
    }

    function resetTimer() {
        clearInterval(timerInterval);
        elapsedTime = 0;
        timerElement.textContent = "00:00:00";
        running = false;
    }

    function resetTimes() {
        times = [];
        timesBox.innerHTML = '';
        timeRecordedElement.textContent = '';
    }

    function addTimeToBox(time) {
        const timeElement = document.createElement('div');
        const index = times.length;
        timeElement.textContent = `${index}. ${time}`;
        timesBox.appendChild(timeElement);
    }

    function addAverageToBox(avg) {
        const avgElement = document.createElement('div');
        avgElement.textContent = `Avg: ${avg}`;
        avgElement.style.color = 'red';
        averages.push(avg);
        timesBox.appendChild(avgElement);
    }

    function calculateAverage(times) {
        const timeValues = times.map(time => {
            const [minutes, seconds, milliseconds] = time.split(':').map(Number);
            return minutes * 60000 + seconds * 1000 + milliseconds * 10;
        });

        timeValues.sort((a, b) => a - b);
        const relevantTimes = timeValues.slice(1, 4);
        const avgTime = relevantTimes.reduce((a, b) => a + b, 0) / relevantTimes.length;

        const avgMinutes = String(Math.floor(avgTime / 60000)).padStart(2, '0');
        const avgSeconds = String(Math.floor((avgTime % 60000) / 1000)).padStart(2, '0');
        const avgMilliseconds = String(Math.floor((avgTime % 1000) / 10)).padStart(2, '0');

        return `${avgMinutes}:${avgSeconds}:${avgMilliseconds}`;
    }

    function setActiveCube(cube) {
        if (activeCube === cube) {
            cubeButtons[cube].active = false;
            cubeButtons[cube].element.style.backgroundColor = '';
            activeCube = null;
        } else {
            if (activeCube) {
                cubeButtons[activeCube].active = false;
                cubeButtons[activeCube].element.style.backgroundColor = '';
            }
            cubeButtons[cube].active = true;
            cubeButtons[cube].element.style.backgroundColor = 'lightgray';
            activeCube = cube;
            resetTimes();
        }
    }

    function downloadScramblesAndTimes() {
        let data = 'Generated by SpeedCubeTrainer - Date ';
        let date = new Date().toJSON();
        data += date;
        for (let i = 0; i < times.length; i++) {
            data += `\n\nScramble ${i + 1}: ${scrambles[i]}\nTime ${i + 1}: ${times[i]}`;
            if ((i + 1) % 5 === 0) {
                const avgIndex = Math.floor(i / 5);
                data += `\n\nAverage ${avgIndex + 1}: ${averages[avgIndex]}\n\n--------------------`;
            }
        }
        const blob = new Blob([data], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'scrambles_and_times.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }

    generateScrambleButton.addEventListener('click', () => {
        scrambleElement.textContent = generateScramble();
    });

    downloadButton.addEventListener('click', downloadScramblesAndTimes);

    generateScrambleButton.addEventListener('click', () => {
        scrambleElement.textContent = activeCube ? cubeButtons[activeCube].generateScramble() : '';
    });

    Object.keys(cubeButtons).forEach(cube => {
        cubeButtons[cube].element.addEventListener('click', () => {
            setActiveCube(cube);
        });
    });

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
