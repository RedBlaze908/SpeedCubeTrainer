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
            active: false,
            name: "2x2x2"
        },
        'cube3x3': {
            element: document.getElementById('cube3x3'),
            generateScramble: generateScramble3x3,
            active: false,
            name: "3x3x3"
        },
        'cube4x4': {
            element: document.getElementById('cube4x4'),
            generateScramble: generateScramble4x4,
            active: false,
            name: "4x4x4"
        },
        'cube5x5': {
            element: document.getElementById('cube5x5'),
            generateScramble: generateScramble5x5,
            active: false,
            name: "5x5x5"
        },
        'cube6x6': {
            element: document.getElementById('cube6x6'),
            generateScramble: generateScramble6x6,
            active: false,
            name: "6x6x6"
        },
        'cube7x7': {
            element: document.getElementById('cube7x7'),
            generateScramble: generateScramble7x7,
            active: false,
            name: "7x7x7"
        },
        'cubeclock': {
            element: document.getElementById('cubeclock'),
            generateScramble: generateScrambleclock,
            active: false,
            name: "Clock"
        },
        'cubemega': {
            element: document.getElementById('cubemega'),
            generateScramble: generateScramblemega,
            active: false,
            name: "Megaminx"
        },
        'cubepyra': {
            element: document.getElementById('cubepyra'),
            generateScramble: generateScramblepyra,
            active: false,
            name: "Pyraminx"
        },
        'cubeskewb': {
            element: document.getElementById('cubeskewb'),
            generateScramble: generateScrambleskewb,
            active: false,
            name: "Skewb"
        },
        'cubesq1': {
            element: document.getElementById('cubesq1'),
            generateScramble: generateScramblesq1,
            active: false,
            name: "Square-1"
        },
    };

    let timerInterval;
    let startTime;
    let elapsedTime = 0;
    let running = false;
    let cooldown = false;
    let times = [];
    let activeCube = null;
    let activeName = null;
    let scrambles = [];
    let pbs = ["99:99:99", "99:99:99"];
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
        if (lastMove === move || lastMove + "'" === move + modifier || lastMove + "2" === move + modifier) {
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
        if (!running || cooldown) return;
        clearInterval(timerInterval);
        elapsedTime += Date.now() - startTime;
        running = false;
        cooldown = true;
        const finalTime = timerElement.textContent;

        times.push(finalTime);
        timeRecordedElement.textContent = `Time: ${finalTime}`;
        addTimeToBox(finalTime);

        if (times.length % 5 === 0 && times.length > 0) {
            const avgTime = calculateAverage(times.slice(-5));
            addAverageToBox(avgTime);
        }
        
        setTimeout(() => {
            cooldown = false;
        }, 1000);

        scrambleElement.textContent = activeCube ? cubeButtons[activeCube].generateScramble() : '';
        resetTimer();
    }

    function resetTimer() {
        clearInterval(timerInterval);
        elapsedTime = 0;
        timerElement.textContent = "00:00:00";
        running = false;
    }

    function resetTimes() {
        first.textContent = null;
        second.textContent = null;
        third.textContent = null;
        fourth.textContent = null;
        fifth.textContent = null;
        avrage.textContent = null;

        scrambles.splice(0, scrambles.length);
        times.splice(0, times.length);
    }

    let first = document.getElementById('first');
    let second = document.getElementById('second');
    let third = document.getElementById('third');
    let fourth = document.getElementById('fourth');
    let fifth = document.getElementById('fifth');
    let avrage = document.getElementById('avrage');
    let event = document.getElementById('event');
    let bestSingle = document.getElementById('bSingle');
    let bestAvrage = document.getElementById('bAvrage');
    let world = document.getElementById('Wrl');

    function addTimeToBox(time) {
        console.log(time);
        if (first.textContent === "") first.textContent = `${time}`;
        else if (second.textContent === "") second.textContent = `${time}`;
        else if (third.textContent === "") third.textContent = `${time}`;
        else if (fourth.textContent === "") fourth.textContent = `${time}`;
        else if (fifth.textContent === "") fifth.textContent = `${time}`;
        else {
            resetTimes();
            times.push(time);
            addTimeToBox(time);
        }

        world.textContent = "";

        if (isTimeSmaller(time, pbs[0])) {
            pbs[0] = time;
            bestSingle.textContent = pbs[0];

            if (activeCube == "cube2x2" && isTimeSmaller(time, "00:00:43")) world.textContent = "World Record Single 2x2 Congratulations!";
            else if (activeCube == "cube3x3" && isTimeSmaller(time, "00:03:13")) world.textContent = "World Record Single 3x3 Congratulations!";
            else if (activeCube == "cube4x4" && isTimeSmaller(time, "00:15:71")) world.textContent = "World Record Single 4x4 Congratulations!";
            else if (activeCube == "cube5x5" && isTimeSmaller(time, "00:30:45")) world.textContent = "World Record Single 5x5 Congratulations!";
            else if (activeCube == "cube6x6" && isTimeSmaller(time, "00:58:03")) world.textContent = "World Record Single 6x6 Congratulations!";
            else if (activeCube == "cube7x7" && isTimeSmaller(time, "01:34:15")) world.textContent = "World Record Single 7x7 Congratulations!";
            else if (activeCube == "cubeclock" && isTimeSmaller(time, "00:01:97")) world.textContent = "World Record Single Clock Congratulations!";
            else if (activeCube == "cubemega" && isTimeSmaller(time, "00:23:18")) world.textContent = "World Record Single Megaminx Congratulations!";
            else if (activeCube == "cubepyra" && isTimeSmaller(time, "00:00:73")) world.textContent = "World Record Single Pyraminx Congratulations!";
            else if (activeCube == "cubeskewb" && isTimeSmaller(time, "00:00:75")) world.textContent = "World Record Single Skewb Congratulations!";
            else if (activeCube == "cubesq1" && isTimeSmaller(time, "00:03:41")) world.textContent = "World Record Single Square-1 Congratulations!";
        }
        
    }

    
    function parseTimeToMs(time) {
        const [minutes, seconds, milliseconds] = time.split(':').map(Number);
        return (minutes * 60 * 1000) + (seconds * 1000) + (milliseconds * 10);
    }
    
    function isTimeSmaller(time1, time2) {
        const time1Ms = parseTimeToMs(time1);
        const time2Ms = parseTimeToMs(time2);
        return time1Ms < time2Ms;
    }

    let Avrage = null;

    function addAverageToBox(avg) {
        avrage.textContent = `Ao5: ${avg}`;
        Avrage = avg;

        world.textContent = "";

        if (isTimeSmaller(avg, pbs[1])) {
            pbs[1] = avg;
            bestAvrage.textContent = pbs[1];

            if (activeCube == "cube2x2" && isTimeSmaller(avg, "00:00:88")) world.textContent = "World Record Avrage 2x2 Congratulations!";
            else if (activeCube == "cube3x3" && isTimeSmaller(avg, "00:04:05")) world.textContent = "World Record Avrage 3x3 Congratulations!";
            else if (activeCube == "cube4x4" && isTimeSmaller(avg, "00:19:38")) world.textContent = "World Record Avrage 4x4 Congratulations!";
            else if (activeCube == "cube5x5" && isTimeSmaller(avg, "00:34:76")) world.textContent = "World Record Avrage 5x5 Congratulations!";
            else if (activeCube == "cube6x6" && isTimeSmaller(avg, "01:05:66")) world.textContent = "World Record Avrage 6x6 Congratulations!";
            else if (activeCube == "cube7x7" && isTimeSmaller(avg, "01:39:68")) world.textContent = "World Record Avrage 7x7 Congratulations!";
            else if (activeCube == "cubeclock" && isTimeSmaller(avg, "00:02:39")) world.textContent = "World Record Avrage Clock Congratulations!";
            else if (activeCube == "cubemega" && isTimeSmaller(avg, "00:26:60")) world.textContent = "World Record Avrage Megaminx Congratulations!";
            else if (activeCube == "cubepyra" && isTimeSmaller(avg, "00:01:15")) world.textContent = "World Record Avrage Pyraminx Congratulations!";
            else if (activeCube == "cubeskewb" && isTimeSmaller(avg, "00:01:52")) world.textContent = "World Record Avrage Skewb Congratulations!";
            else if (activeCube == "cubesq1" && isTimeSmaller(avg, "00:04:81")) world.textContent = "World Record Avrage Square-1 Congratulations!";
        }

    }

    function calculateAverage(times) {
        // Controlla se ci sono DNF e calcola i valori numerici
        const parsedTimes = times.map(time => {
            if (time.startsWith("DNF(")) {
                const value = time.match(/\((.*?)\)/)[1]; // Estrae il valore dentro le parentesi
                const [minutes, seconds, milliseconds] = value.split(':').map(Number);
                return { isDNF: true, value: minutes * 60000 + seconds * 1000 + milliseconds * 10 };
            } else {
                const [minutes, seconds, milliseconds] = time.split(':').map(Number);
                return { isDNF: false, value: minutes * 60000 + seconds * 1000 + milliseconds * 10 };
            }
        });
    
        // Conta quanti DNF ci sono
        const dnfCount = parsedTimes.filter(t => t.isDNF).length;
    
        if (dnfCount > 1) {
            // Più di un DNF, restituisce direttamente "DNF"
            return "DNF";
        }
    
        // Estrai solo i valori
        const values = parsedTimes.map(t => t.value);
    
        // Ordina i valori (DNF sarà incluso con il valore più alto)
        values.sort((a, b) => a - b);
    
        // Escludi il valore più basso e il più alto
        const relevantTimes = values.slice(1, -1);
    
        if (relevantTimes.length < 3) {
            // Se ci sono meno di 3 valori, restituisci "DNF"
            return "DNF";
        }
    
        // Calcola la media dei valori rimasti
        const avgTime = relevantTimes.reduce((sum, value) => sum + value, 0) / relevantTimes.length;
    
        // Converti il tempo medio in formato mm:ss:ms
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
            activeName = cubeButtons[cube].name
            event.textContent = cubeButtons[cube].name;
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
                data += `\n\nAverage ${avgIndex + 1}: ${Avrage}\n\n--------------------`;
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

    const tools1 = document.getElementById('tools1');
    const tools2 = document.getElementById('tools2');
    const tools3 = document.getElementById('tools3');
    const tools4 = document.getElementById('tools4');
    const tools5 = document.getElementById('tools5');

    document.getElementById('first').addEventListener('click', () => {
        if (tools1.classList.contains('visible')) tools1.classList.remove('visible');
        else tools1.classList.add('visible');
    });
    document.getElementById('second').addEventListener('click', () => {
        if (tools2.classList.contains('visible')) tools2.classList.remove('visible');
        else tools2.classList.add('visible');
    });
    document.getElementById('third').addEventListener('click', () => {
        if (tools3.classList.contains('visible')) tools3.classList.remove('visible');
        else tools3.classList.add('visible');
    });
    document.getElementById('fourth').addEventListener('click', () => {
        if (tools4.classList.contains('visible')) tools4.classList.remove('visible');
        else tools4.classList.add('visible');
    });
    document.getElementById('fifth').addEventListener('click', () => {
        if (tools5.classList.contains('visible')) tools5.classList.remove('visible');
        else tools5.classList.add('visible');
    });

    function addTwo(val) {
        let timeString = val;

        const [minutes, seconds, milliseconds] = timeString.split(':').map(Number);
        let totalMilliseconds = (minutes * 60 * 1000) + (seconds * 1000) + milliseconds;

        totalMilliseconds += 2000;
        
        const newMinutes = String(Math.floor(totalMilliseconds / (60 * 1000))).padStart(2, '0');
        const newSeconds = String(Math.floor((totalMilliseconds % (60 * 1000)) / 1000)).padStart(2, '0');
        const newMilliseconds = String(totalMilliseconds % 1000).padStart(2, '0');

        const newTimeString = `+${newMinutes}:${newSeconds}:${newMilliseconds}`;

        val = newTimeString;
        return val;
    }

    function removeTwo(val) {
        let timeString = val;

        const [minutes, seconds, milliseconds] = timeString.split(':').map(Number);
        let totalMilliseconds = (minutes * 60 * 1000) + (seconds * 1000) + milliseconds;

        totalMilliseconds -= 2000;
        
        const newMinutes = String(Math.floor(totalMilliseconds / (60 * 1000))).padStart(2, '0');
        const newSeconds = String(Math.floor((totalMilliseconds % (60 * 1000)) / 1000)).padStart(2, '0');
        const newMilliseconds = String(totalMilliseconds % 1000).padStart(2, '0');

        const newTimeString = `${newMinutes}:${newSeconds}:${newMilliseconds}`;

        val = newTimeString;
        return val;
    }

    function dnfSolve(val) {
        let timeString = "DNF(";
        timeString += val;
        timeString += ")";

        return timeString;
    }

    function removeDNF(val) {
        return val.slice(4, -1);
    }

    const ok = ['okfirst', 'oksecond', "okthird", "okfourth", "okfifth"];
    const ids = ['2first', '2second', '2third', '2fourth', '2fifth'];
    const dnfs = ['dnfirst', 'dnfsecond', 'dnfthird', 'dnffourth', 'dnffifth'];
    const timeIds = ['first', 'second', 'third', 'fourth', 'fifth'];

    dnfs.forEach((DNF, index) => {
        document.getElementById(DNF).addEventListener('click', () => {
            const val = document.getElementById(timeIds[index]);
            if (val && val.textContent.trim() !== "" && val.textContent[0] !== 'D') {
                val.textContent = dnfSolve(times[index]);
                times[index] = val.textContent;

                if (times.length === 5) {
                    const avgTime = calculateAverage(times.slice(-5));
                    addAverageToBox(avgTime);
                }
            }
        });
    });

    ok.forEach((oks, index) => {
        document.getElementById(oks).addEventListener('click', () => {
            const val = document.getElementById(timeIds[index]);
            if (val && val.textContent.trim() !== "" && val.textContent[0] == '+' && val.textContent[0] != 'D') {
                val.textContent = removeTwo(times[index]);
                times[index] = val.textContent;

                if (times.length === 5) {
                    const avgTime = calculateAverage(times.slice(-5));
                    addAverageToBox(avgTime);
                }
            }
            else if (val && val.textContent.trim() !== "" && val.textContent[0] == 'D' && val.textContent[0] != '+') {
                val.textContent = removeDNF(times[index]);
                times[index] = val.textContent;

                if (times.length === 5) {
                    const avgTime = calculateAverage(times.slice(-5));
                    addAverageToBox(avgTime);
                }
            }
        });
    });
    
    ids.forEach((id, index) => {
        document.getElementById(id).addEventListener('click', () => {
            const val = document.getElementById(timeIds[index]);
            if (val && val.textContent.trim() !== "" && val.textContent[0] !== '+' && val.textContent[0] !== 'D') {
                val.textContent = addTwo(times[index]);
                times[index] = val.textContent;
            
                if (times.length === 5) {
                    const avgTime = calculateAverage(times.slice(-5));
                    addAverageToBox(avgTime);
                }
            }
        });
    });


    document.getElementById('DigitTime').addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            const input = event.target.value;
            const formattedTime = validateAndFormatTime(input);
    
            if (formattedTime) {
                addTimeToBox(formattedTime);
                times.push(formattedTime);
                event.target.value = '';
                scrambleElement.textContent = activeCube ? cubeButtons[activeCube].generateScramble() : '';
                if (times.length % 5 === 0 && times.length > 0) {
                    const avgTime = calculateAverage(times.slice(-5));
                    addAverageToBox(avgTime);
                }
            } else {
                console.log('Input non valido');
            }
        }
    });
    
    function validateAndFormatTime(input) {
        const regexFull = /^\d{2}:\d{2}\.\d{2}$/;
        if (regexFull.test(input)) {
            return input.replace('.', ':');
        }
    
        const regexCompact = /^\d{2,4}$/;
        if (regexCompact.test(input)) {
            let hours = '00';
            let minutes = '00';
            let seconds = '00';
    
            if (input.length === 4) {
                hours = input.slice(0, 2);
                minutes = input.slice(2, 4);
            } else if (input.length === 3) {
                minutes = input.slice(0, 1).padStart(2, '0');
                seconds = input.slice(1, 3);
            } else if (input.length === 2) {
                minutes = input;
            }
    
            return `${hours}:${minutes}:${seconds}`;
        }
    
        return null;
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
            resetTimes();
            avrage.textContent = "Ao5:"
            bestAvrage.textContent = null;
            bestSingle.textContent = null;
            pbs = ["99:99:99", "99:99:99"];
        });
    });

    const reset = document.getElementById('reset');

    reset.addEventListener('click', (event) => {
        resetTimes();
    });

    document.addEventListener('keydown', (event) => {
        if (event.code === 'Space') {
            event.preventDefault();
            if (!running && !cooldown) {
                timerElement.classList.add('green');
            }
        }
    });

    let isKeyProcessing = false;

document.addEventListener('keyup', (event) => {
    if (event.code === 'Space') {
        event.preventDefault();

        if (isKeyProcessing) return;
        isKeyProcessing = true;

        timerElement.classList.remove('green');

        if (!running && !cooldown) {
            startTimer();
        } else if (running) {
            stopTimer();
        }

        setTimeout(() => {
            isKeyProcessing = false;
        }, 10);
    }
});

});
