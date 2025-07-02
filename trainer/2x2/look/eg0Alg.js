const eg0A = [
    //Anti-Sune
    { scramble: "R' F2 R U R' F R", solution: "(U2) R U R' U R U2 R'", img: "../../../2x2/CLL/img/antisune1.png"},
    { scramble: "R' U F2 U F2 U' R U R' F' R",  solution: "R U2 R' F R' F' R U' R U' R'", img: "../../../2x2/CLL/img/antisune2.png"},
    { scramble: "F R' F' R U R U2 R' F R' F' R",  solution: "F' R U R' U2 R' F2 R", img: "../../../2x2/CLL/img/antisune3.png"},
    { scramble: "R2 U R' U' R' F R F' R'",  solution: "R' F R F' R U R'", img: "../../../2x2/CLL/img/antisune4.png"},
    { scramble: "R' F U2 R U R' U2 R' F' R",  solution: "(U) R U R2 F' R F R U' R2 F R", img: "../../../2x2/CLL/img/antisune5.png"},
    { scramble: "R U' R2 U R U F R' F' R U R'",  solution: "R U2 R' U2 R' F R F'", img: "../../../2x2/CLL/img/antisune6.png"},
    //Sune
    { scramble: "R' F' R U2 R' F' R U2 R' F R",  solution: "R U R' U R U2 R'", img: "../../../2x2/CLL/img/sune1.png"},
    { scramble: "R U2 R' F R' F' R U' R U' R'",  solution: "(U') R' F R2 F' U' R' U' R2 U R'", img: "../../../2x2/CLL/img/sune2.png"},
    { scramble: "R2 U R2 F' U F R2 U' R2",  solution: "F R' F' R U2 R U2 R'", img: "../../../2x2/CLL/img/sune3.png"},
    { scramble: "F' R U R' F U F'",  solution: "R U' R' F R' F' R", img: "../../../2x2/CLL/img/sune4.png"},
    { scramble: "R U2 R' U' R U' R' F R' F' R U R U' R'",  solution: "R U R' U' R' F R F' R U R' U R U2 R'", img: "../../../2x2/CLL/img/sune5.png"},
    { scramble: "R2 F R F' U' R U2 R' U2 R",  solution: "R' F2 R U2 R U' R' F", img: "../../../2x2/CLL/img/sune6.png"},
    //Pi
    { scramble: "R U R' U2 R U R' U' R U2 R'",  solution: "R U' R2 U R2 U R2 U' R", img: "../../../2x2/CLL/img/pi1.png"},
    { scramble: "R' F R U2 F' R U R' U2 R' F' R",  solution: "(U') R' U' R' F R F' R U' R' U2 R", img: "../../../2x2/CLL/img/pi2.png"},
    { scramble: "R' F' R U' R' F' R F' R U R'",  solution: "(U2) R' F R F' R U' R' U' R U' R'", img: "../../../2x2/CLL/img/pi3.png"},
    { scramble: "F R' F' R U' R U' R' U R' F R F'",  solution: "(U) F R2 U' R2 U R2 U R2 F'", img: "../../../2x2/CLL/img/pi4.png"},
    { scramble: "R' F2 R U R' F' R U2 R U' R' F",  solution: "R U2 R' U' R U R' U2 R' F R F'", img: "../../../2x2/CLL/img/pi5.png"},
    { scramble: "F' U R U R' U2 F R' F2 R",  solution: "(U) F R' F' R U2 R U' R' U R U2 R'", img: "../../../2x2/CLL/img/pi6.png"},
    //U
    { scramble: "R U F R' F' R'",  solution: "F R U R' U' F'", img: "../../../2x2/CLL/img/u1.png"},
    { scramble: "F' U R U' R U' R2 F2 R U2 R' F R' F'",  solution: "(U') R U R2' U' R U2 R' U2' R U' R", img: "../../../2x2/CLL/img/u2.png"},
    { scramble: "F' U F U R U R' U2 R' F R F'",  solution: "(U') F R U R' U2 F' R U' R' F", img: "../../../2x2/CLL/img/u3.png"},
    { scramble: "R' F' R F R U R2 F' R U R U' R'",  solution: "F R' F' R U' R U' R' U2 R U' R'", img: "../../../2x2/CLL/img/u4.png"},
    { scramble: "R' F R' F' U' R U' R' U2 R2",  solution: "(U) R U' R2 F R F' R U R' U' R U R'", img: "../../../2x2/CLL/img/u5.png"},
    { scramble: "R' F R F' R U R2 F' R U R U' R' F",  solution: "(U) R' U R' F R F' R U2 R' U R", img: "../../../2x2/CLL/img/u6.png"},
    //L
    { scramble: "F R F' R U R' U' R'",  solution: "(U) F R U R' U' R' F R", img: "../../../2x2/CLL/img/l1.png"},
    { scramble: "F' U R U' R' F R' F' R F",  solution: "F R' F' R U R U' R'", img: "../../../2x2/CLL/img/l2.png"},
    { scramble: "R2 F' R U R U' R' F R U' R' U R",  solution: "R U2 R2 F R F' R U2 R'", img: "../../../2x2/CLL/img/l3.png"},
    { scramble: "R U' R U' R U2 R' U R' U R'",  solution: "(U2) R2 U R' U2 R U2 R' U R2", img: "../../../2x2/CLL/img/l4.png"},
    { scramble: "R U R U' R2 U R U F R2 F'",  solution: "(U') R U' R' U R U' R' F R' F' R2 U R'", img: "../../../2x2/CLL/img/l5.png"},
    { scramble: "F R' F' R U2 F R' F' R U' R U' R'",  solution: "R U R2 F' R U R U' R2 F' R F", img: "../../../2x2/CLL/img/l6.png"},
    //T
    { scramble: "R U' R' U' F' U F",  solution: "R U R' U' R' F R F'", img: "../../../2x2/CLL/img/t1.png"},
    { scramble: "R U2 F R' F' U2 R'",  solution: "(U2) R' F' R U R U' R' F", img: "../../../2x2/CLL/img/t2.png"},
    { scramble: "R' U' R' U R' F R F' R U' R2",  solution: "(U') R U F R' F' R U2 R U2 R2", img: "../../../2x2/CLL/img/t3.png"},
    { scramble: "R2 F2 U' R' U F' R U' R",  solution: "(U') R' U R' U2 R U2 R' U R2 U' R'", img: "../../../2x2/CLL/img/t4.png"},
    { scramble: "F R' F' R U' R U2 R' U' R U2 R'",  solution: "(U2) R U R' U2 R U R' U R' F R F'", img: "../../../2x2/CLL/img/t5.png"},
    { scramble: "R U' R' U' F R' F' R2 U' R'",  solution: "(U) R' U R U2 R2 F R F' R", img: "../../../2x2/CLL/img/t6.png"},
    //H
    { scramble: "R2 U2 R' U2 RU",  solution: "R2 U2 R U2 R2", img: "../../../2x2/CLL/img/h1.png"},
    { scramble: "R2 F R2 F2 U2 F R2",  solution: "(U/U') (R U' R' F R' F' R)*2", img: "../../../2x2/CLL/img/h2.png"},
    { scramble: "R U2 R' U' R U' R2 F R F' R U R'",  solution: "R U R' U R U R' F R' F' R", img: "../../../2x2/CLL/img/h3.png"},
    { scramble: "F R' F' R U2 R U R' F R' F' R",  solution: "(U) F R2 U' R2 U' R2 U R2 F'", img: "../../../2x2/CLL/img/h4.png"},
];
