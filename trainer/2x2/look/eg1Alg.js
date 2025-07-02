const eg1A = [
    //Anti-Sune
    { scramble: "R U' R2 F' R F U R' F R",  solution: "(U2) U F R' U2 F2 R' F U'", img: "../../../2x2/CLL/img/antisune1.png"},
    { scramble: "R2 U R2 F' R2 U R2 U' F2 U' R",  solution: "U2 R U2 R2 F' R F2 U' F'", img: "../../../2x2/CLL/img/antisune2.png"},
    { scramble: "R' F R2 U' R' U R U' R' F",  solution: "F' R U R' U' R U R2 F' R", img: "../../../2x2/CLL/img/antisune3.png"},
    { scramble: "F U' R U2 R' F2 R' F R",  solution: "R U' R' F' U' R U R' U' F", img: "../../../2x2/CLL/img/antisune4.png"},
    { scramble: "R' F' R F U R' F' R U R' F' R",  solution: "(U') R U R' F' U' R U R' U' R U R'", img: "../../../2x2/CLL/img/antisune5.png"},
    { scramble: "R' F R U2 R U' R2 F2 R F'",  solution: "(U2) R U' R2 F R U' R' F R F'", img: "../../../2x2/CLL/img/antisune6.png"},
    //Sune
    { scramble: "R' F' R U' F' R' F R2 U R'",  solution: "(U2) R U R' U F R U' R2 F' R", img: "../../../2x2/CLL/img/sune1.png"},
    { scramble: "F R U' R' U R' F' R U F' R U R'",  solution: "R U R' F2 U F R U R'", img: "../../../2x2/CLL/img/sune2.png"},
    { scramble: "F' U2 F' U F2 R' F2 R U2",  solution: "(U2) F R' F' R U R' F' R2 U R'", img: "../../../2x2/CLL/img/sune3.png"},
    { scramble: "R U R' F R U' R' U2 R' F R",  solution: "F' U R U' R' U F R U R'", img: "../../../2x2/CLL/img/sune4.png"},
    { scramble: "R U F' R U R2 U' R U R'",  solution: "(U) R U' R' U R U' R' U F R U' R'", img: "../../../2x2/CLL/img/sune5.png"},
    { scramble: "F' R U R' U' R U R2 F' R",  solution: "R' F R2 U' R' U R U' R' F", img: "../../../2x2/CLL/img/sune6.png"},
    //Pi
    { scramble: "R2 U R' U2 R' U R U' R B2 R2",  solution: "(U2) F2 R U R' U2 R U R' U' F", img: "../../../2x2/CLL/img/pi1.png"},
    { scramble: "R' F R2 U' R2 F R",  solution: "(U') R U' R2 F R2 U' R'", img: "../../../2x2/CLL/img/pi1.png"},
    { scramble: "R' U' R' F2 U F' R F'",  solution: "(U') F R' F U' F2 R U R", img: "../../../2x2/CLL/img/pi1.png"},
    { scramble: "R' F R F' R' F R U' R' F R F",  solution: "(U') R U' R' U R U' R' F R U' R'", img: "../../../2x2/CLL/img/pi1.png"},
    { scramble: "F' U R' F2 R F R' F' R F",  solution: "(U') R' F R F' R' F R2 U R' U' R U' R'", img: "../../../2x2/CLL/img/pi1.png"},
    { scramble: "R' U' R' F2 U F2 U2 R' U2 R",  solution: "(U') L F' L' F L F' L2 U' L U L' U L", img: "../../../2x2/CLL/img/pi1.png"},
    //U
    { scramble: "R U' R2 F R2 U R' U' R U' R'",  solution: "R U R' U R U R2 F R2 U' R'", img: "../../../2x2/CLL/img/u1.png"},
    { scramble: "R' F R F' U R U' R' U' R' F' R F",  solution: "F R2 B R2' F U F2 R2", img: "../../../2x2/CLL/img/u2.png"},
    { scramble: "F' U2 R U2 R' U2 F",  solution: "F' U2 R U2 R' U2 F", img: "../../../2x2/CLL/img/u3.png"},
    { scramble: "R' F' R2 U R' F' R U R'",  solution: "(U2) R' F R F' R' F R2 U' R'", img: "../../../2x2/CLL/img/u4.png"},
    { scramble: "R U R' U' F R U' R' U R' F' R",  solution: "(U2) R' F R F' U R U' R' F R U' R'", img: "../../../2x2/CLL/img/u5.png"},
    { scramble: "F' U2 F' R U2 R' U' F",  solution: "(U') R' F R U' R' F R U' R U R' F'", img: "../../../2x2/CLL/img/u6.png"},
    //L
    { scramble: "R U' R' F R U' R' F R U R' F'",  solution: "R U' R' U R U' R2 F' R F", img: "../../../2x2/CLL/img/l1.png"},
    { scramble: "R' F R U2 R' F2 R F' R' F R",  solution: "(U) R' F R U' R' F R2 U R' F'", img: "../../../2x2/CLL/img/l2.png"},
    { scramble: "R U R2 F' U R2 U R2 U' R",  solution: "R' U R2 U' R2 U' F R2 U' R'", img: "../../../2x2/CLL/img/l3.png"},
    { scramble: "R' F2 R F' R' F R2 U R'",  solution: "R' F R2 U R' F' R U2 R'", img: "../../../2x2/CLL/img/l4.png"},
    { scramble: "R U' R' U R U' R' U' F R U' R'",  solution: "(U) R U R' F' R U R' U' F R' F' R", img: "../../../2x2/CLL/img/l5.png"},
    { scramble: "R' F R U' R' F R U F' R' F R",  solution: "(U') F R U' R' U R' F' R U R' F' R", img: "../../../2x2/CLL/img/l6.png"},
    //T
    { scramble: "R' F' R F R' F2 R U2 R' F' R",  solution: "(U) F R U' R2 F' R U R' F' R", img: "../../../2x2/CLL/img/t1.png"},
    { scramble: "R U' R' U R U' R' U2 F R U' R'",  solution: "(U) F' R' F R2 U R' U' R U R'", img: "../../../2x2/CLL/img/t2.png"},
    { scramble: "R U' R' F R U R' F' U' R U' R'",  solution: "R' F R2 U' R' U' R' F2 R", img: "../../../2x2/CLL/img/t3.png"},
    { scramble: "R U2 R U2 R U B2 R2",  solution: "R2 B2 U' R' U' R U' R' U R'", img: "../../../2x2/CLL/img/t4.png"},
    { scramble: "R' F R F' R' F R2 U' R'",  solution: "R' F' R2 U R' F' R U R'", img: "../../../2x2/CLL/img/t5.png"},
    { scramble: "R' U' R' F2 U F2 U' R' U R",  solution: "(U2) F2 R U R' U2 R U R' U' F", img: "../../../2x2/CLL/img/t6.png"},
    //H
    { scramble: "R' F R2 U' R' F R U R' F'",  solution: "R' F R2 U' R' F R U R' F'", img: "../../../2x2/CLL/img/h1.png"},
    { scramble: "R U' R' U' R' F2 R2 U R' U R U R'",  solution: "F' U R U' R2 F2 R U' F", img: "../../../2x2/CLL/img/h2.png"},
    { scramble: "F' R U2 R' F' U2 F R' F' R",  solution: "R' U' R' F2 U F' R F'", img: "../../../2x2/CLL/img/h3.png"},
    { scramble: "F R' F' R U R' F' R F R' F' R",  solution: "R U R' F' R U R' U' R U R'", img: "../../../2x2/CLL/img/h4.png"},
];
