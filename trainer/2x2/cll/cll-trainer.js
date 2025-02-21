const cases = [
    //Anti-Sune
    { name: 'eg1', scramble: "R' F2 R U R' F R", selected: false, solution: "(U2) R U R' U R U2 R'", img: "../../../2x2/CLL/img/antisune1.png"},
    { name: 'eg2', scramble: "R' U F2 U F2 U' R U R' F' R", selected: false, solution: "R U2 R' F R' F' R U' R U' R'", img: "../../../2x2/CLL/img/antisune2.png"},
    { name: 'eg3', scramble: "F R' F' R U R U2 R' F R' F' R", selected: false, solution: "F' R U R' U2 R' F2 R", img: "../../../2x2/CLL/img/antisune3.png"},
    { name: 'eg4', scramble: "R2 U R' U' R' F R F' R'", selected: false, solution: "R' F R F' R U R'", img: "../../../2x2/CLL/img/antisune4.png"},
    { name: 'eg5', scramble: "R' F U2 R U R' U2 R' F' R", selected: false, solution: "(U) R U R2 F' R F R U' R2 F R", img: "../../../2x2/CLL/img/antisune5.png"},
    { name: 'eg6', scramble: "R U' R2 U R U F R' F' R U R'", selected: false, solution: "R U2 R' U2 R' F R F'", img: "../../../2x2/CLL/img/antisune6.png"},
    //Sune
    { name: 'eg7', scramble: "R' F' R U2 R' F' R U2 R' F R", selected: false, solution: "R U R' U R U2 R'", img: "../../../2x2/CLL/img/sune1.png"},
    { name: 'eg8', scramble: "R U2 R' F R' F' R U' R U' R'", selected: false, solution: "(U') R' F R2 F' U' R' U' R2 U R'", img: "../../../2x2/CLL/img/sune2.png"},
    { name: 'eg9', scramble: "R2 U R2 F' U F R2 U' R2", selected: false, solution: "F R' F' R U2 R U2 R'", img: "../../../2x2/CLL/img/sune3.png"},
    { name: 'eg10', scramble: "F' R U R' F U F'", selected: false, solution: "R U' R' F R' F' R", img: "../../../2x2/CLL/img/sune4.png"},
    { name: 'eg11', scramble: "R U2 R' U' R U' R' F R' F' R U R U' R'", selected: false, solution: "R U R' U' R' F R F' R U R' U R U2 R'", img: "../../../2x2/CLL/img/sune5.png"},
    { name: 'eg12', scramble: "R2 F R F' U' R U2 R' U2 R", selected: false, solution: "R' F2 R U2 R U' R' F", img: "../../../2x2/CLL/img/sune6.png"},
    //Pi
    { name: 'eg13', scramble: "R U R' U2 R U R' U' R U2 R'", selected: false, solution: "R U' R2 U R2 U R2 U' R", img: "../../../2x2/CLL/img/pi1.png"},
    { name: 'eg14', scramble: "R' F R U2 F' R U R' U2 R' F' R", selected: false, solution: "(U') R' U' R' F R F' R U' R' U2 R", img: "../../../2x2/CLL/img/pi2.png"},
    { name: 'eg15', scramble: "R' F' R U' R' F' R F' R U R'", selected: false, solution: "(U2) R' F R F' R U' R' U' R U' R'", img: "../../../2x2/CLL/img/pi3.png"},
    { name: 'eg16', scramble: "F R' F' R U' R U' R' U R' F R F'", selected: false, solution: "(U) F R2 U' R2 U R2 U R2 F'", img: "../../../2x2/CLL/img/pi4.png"},
    { name: 'eg17', scramble: "R' F2 R U R' F' R U2 R U' R' F", selected: false, solution: "R U2 R' U' R U R' U2 R' F R F'", img: "../../../2x2/CLL/img/pi5.png"},
    { name: 'eg18', scramble: "F' U R U R' U2 F R' F2 R", selected: false, solution: "(U) F R' F' R U2 R U' R' U R U2 R'", img: "../../../2x2/CLL/img/pi6.png"},
    //U
    { name: 'eg19', scramble: "R U F R' F' R'", selected: false, solution: "F R U R' U' F'", img: "../../../2x2/CLL/img/u1.png"},
    { name: 'eg20', scramble: "F' U R U' R U' R2 F2 R U2 R' F R' F'", selected: false, solution: "(U') R U R2' U' R U2 R' U2' R U' R", img: "../../../2x2/CLL/img/u2.png"},
    { name: 'eg21', scramble: "F' U F U R U R' U2 R' F R F'", selected: false, solution: "(U') F R U R' U2 F' R U' R' F", img: "../../../2x2/CLL/img/u3.png"},
    { name: 'eg22', scramble: "R' F' R F R U R2 F' R U R U' R'", selected: false, solution: "F R' F' R U' R U' R' U2 R U' R'", img: "../../../2x2/CLL/img/u4.png"},
    { name: 'eg23', scramble: "R' F R' F' U' R U' R' U2 R2", selected: false, solution: "(U) R U' R2 F R F' R U R' U' R U R'", img: "../../../2x2/CLL/img/u5.png"},
    { name: 'eg24', scramble: "R' F R F' R U R2 F' R U R U' R' F", selected: false, solution: "(U) R' U R' F R F' R U2 R' U R", img: "../../../2x2/CLL/img/u6.png"},
    //L
    { name: 'eg25', scramble: "F R F' R U R' U' R'", selected: false, solution: "(U) F R U R' U' R' F R", img: "../../../2x2/CLL/img/l1.png"},
    { name: 'eg26', scramble: "F' U R U' R' F R' F' R F", selected: false, solution: "F R' F' R U R U' R'", img: "../../../2x2/CLL/img/l2.png"},
    { name: 'eg27', scramble: "R2 F' R U R U' R' F R U' R' U R", selected: false, solution: "R U2 R2 F R F' R U2 R'", img: "../../../2x2/CLL/img/l3.png"},
    { name: 'eg28', scramble: "R U' R U' R U2 R' U R' U R'", selected: false, solution: "(U2) R2 U R' U2 R U2 R' U R2", img: "../../../2x2/CLL/img/l4.png"},
    { name: 'eg29', scramble: "R U R U' R2 U R U F R2 F'", selected: false, solution: "(U') R U' R' U R U' R' F R' F' R2 U R'", img: "../../../2x2/CLL/img/l5.png"},
    { name: 'eg30', scramble: "F R' F' R U2 F R' F' R U' R U' R'", selected: false, solution: "R U R2 F' R U R U' R2 F' R F", img: "../../../2x2/CLL/img/l6.png"},
    //T
    { name: 'eg31', scramble: "R U' R' U' F' U F", selected: false, solution: "R U R' U' R' F R F'", img: "../../../2x2/CLL/img/t1.png"},
    { name: 'eg32', scramble: "R U2 F R' F' U2 R'", selected: false, solution: "(U2) R' F' R U R U' R' F", img: "../../../2x2/CLL/img/t2.png"},
    { name: 'eg33', scramble: "R' U' R' U R' F R F' R U' R2", selected: false, solution: "(U') R U F R' F' R U2 R U2 R2", img: "../../../2x2/CLL/img/t3.png"},
    { name: 'eg34', scramble: "R2 F2 U' R' U F' R U' R", selected: false, solution: "(U') R' U R' U2 R U2 R' U R2 U' R'", img: "../../../2x2/CLL/img/t4.png"},
    { name: 'eg35', scramble: "F R' F' R U' R U2 R' U' R U2 R'", selected: false, solution: "(U2) R U R' U2 R U R' U R' F R F'", img: "../../../2x2/CLL/img/t5.png"},
    { name: 'eg36', scramble: "R U' R' U' F R' F' R2 U' R'", selected: false, solution: "(U) R' U R U2 R2 F R F' R", img: "../../../2x2/CLL/img/t6.png"},
    //H
    { name: 'eg37', scramble: "R2 U2 R' U2 RU", selected: false, solution: "R2 U2 R U2 R2", img: "../../../2x2/CLL/img/h1.png"},
    { name: 'eg38', scramble: "R2 F R2 F2 U2 F R2", selected: false, solution: "(U/U') (R U' R' F R' F' R)*2", img: "../../../2x2/CLL/img/h2.png"},
    { name: 'eg39', scramble: "R U2 R' U' R U' R2 F R F' R U R'", selected: false, solution: "R U R' U R U R' F R' F' R", img: "../../../2x2/CLL/img/h3.png"},
    { name: 'eg40', scramble: "F R' F' R U2 R U R' F R' F' R", selected: false, solution: "(U) F R2 U' R2 U' R2 U R2 F'", img: "../../../2x2/CLL/img/h4.png"},
];