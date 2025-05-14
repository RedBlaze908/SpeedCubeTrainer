const cases = [
    //Free Pairs
    { name: 'f2l1', scramble: "F' R' F' R", selected: false, solution: "R' F R F'", img: "../../../../3x3/F2L/img/F2L 1.png"},
    { name: 'f2l2', scramble: "F' U' F U", selected: false, solution: "F R' F' R", img: "../../../../3x3/F2L/img/F2L 2.png"},
    { name: 'f2l3', scramble: "F' U F", selected: false, solution: "F' U' F", img: "../../../../3x3/F2L/img/F2L 3.png"},
    { name: 'f2l4', scramble: "R U' R'", selected: false, solution: "R U R'", img: "../../../../3x3/F2L/img/F2L 4.png"},
    //Disconnected Pairs
    { name: 'f2l5', scramble: "F2 U' L' U L F2", selected: false, solution: "U' R U R' U2 R U' R'", img: "../../../../3x3/F2L/img/F2L 5.png"},
    { name: 'f2l6', scramble: "F' U' F U2 F' U F U'", selected: false, solution: "(y') U R' U' R U2 R' U R", img: "../../../../3x3/F2L/img/F2L 6.png"},
    { name: 'f2l7', scramble: "F R' F' R U' R U2 R' U", selected: false, solution: "U' R U2 R' U2 R U R'", img: "../../../../3x3/F2L/img/F2L 7.png"},
    { name: 'f2l8', scramble: "R' U' R U2 R' U2 R U y", selected: false, solution: "y' U R' U2 R U2 R' U R", img: "../../../../3x3/F2L/img/F2L 8.png"},
    { name: 'f2l9', scramble: "R U R' F U R U' R' F'", selected: false, solution: "U' R U' R' U F' U' F", img: "../../../../3x3/F2L/img/F2L 9.png"},
    { name: 'f2l10', scramble: "R U' R' U R U R' U2", selected: false, solution: "U' R U R' U R U R'", img: "../../../../3x3/F2L/img/F2L 10.png"},
    { name: 'f2l19', scramble: "R U' R' U' R U R' U' R U R'", selected: false, solution: "U R U2 R' U R U' R'", img: "../../../../3x3/F2L/img/F2L 19.png"},
    { name: 'f2l20', scramble: "R U R' F R' F' R2 U R' U", selected: false, solution: "y' U' R' U2 R U' R' U R", img: "../../../../3x3/F2L/img/F2L 20.png"},
    { name: 'f2l21', scramble: "R B U2 B' R'", selected: false, solution: "U2 R U R' U R U' R'", img: "../../../../3x3/F2L/img/F2L 21.png"},
    { name: 'f2l22', scramble: "F' L' U2 L F", selected: false, solution: "y' U2 R' U' R U' R' U R", img: "../../../../3x3/F2L/img/F2L 22.png"},
    //Connected Pairs
    { name: 'f2l11', scramble: "F' U2 L' U2 L U' F", selected: false, solution: "U' R U2 R' U F' U' F", img: "../../../../3x3/F2L/img/F2L 11.png"},
    { name: 'f2l12', scramble: "R' U' R2 U' R2 U2 R", selected: false, solution: "R U' R' U R U' R' U2 R U' R'", img: "../../../../3x3/F2L/img/F2L 12.png"},
    { name: 'f2l13', scramble: "R U R' F R' F' R U' R U R'", selected: false, solution: "y' U R' U R U' R' U' R", img: "../../../../3x3/F2L/img/F2L 13.png"},
    { name: 'f2l14', scramble: "R2 U2 R' U' R U' R2 U2", selected: false, solution: "U' R U' R' U R U R'", img: "../../../../3x3/F2L/img/F2L 14.png"},
    { name: 'f2l15', scramble: "R U R' U' R' D' R U R' D R", selected: false, solution: "R U R' U2 R U' R' U R U' R'", img: "../../../../3x3/F2L/img/F2L 15.png"},
    { name: 'f2l16', scramble: "R U' R' U r U R' U' M U'", selected: false, solution: "R U' R' U2 F' U' F", img: "../../../../3x3/F2L/img/F2L 16.png"},
    { name: 'f2l17', scramble: "R U' R' U2 R U2 R' U R U' R'", selected: false, solution: "R U2 R' U' R U R'", img: "../../../../3x3/F2L/img/F2L 17.png"},
    { name: 'f2l18', scramble: "R U R' U' R U R' F R' F' R", selected: false, solution: "y' R' U2 R U R' U' R", img: "../../../../3x3/F2L/img/F2L 18.png"},
    { name: 'f2l23', scramble: "R' D' R U2 R' D R2 U R'", selected: false, solution: "U R U' R' U' R U' R' U R U' R'", img: "../../../../3x3/F2L/img/F2L 23.png"},
    { name: 'f2l24', scramble: "R U R' F R' F' R2 U' R' U", selected: false, solution: "U' R U R2 F R F' R U' R'", img: "../../../../3x3/F2L/img/F2L 24.png"},
    //Corner In Slot
    { name: 'f2l25', scramble: "R' F' R U R U' R' F U", selected: false, solution: "R' F' R U R U' R' F", img: "../../../../3x3/F2L/img/F2L 25.png"},
    { name: 'f2l26', scramble: "L' U L y' U R U' R' U'", selected: false, solution: "U R U' R' F R' F' R", img: "../../../../3x3/F2L/img/F2L 26.png"},
    { name: 'f2l27', scramble: "f R f' U' f R f' y", selected: false, solution: "R U' R' U R U' R'", img: "../../../../3x3/F2L/img/F2L 27.png"},
    { name: 'f2l28', scramble: "R' U' R U R' U' R y", selected: false, solution: "R U R' U' F R' F' R", img: "../../../../3x3/F2L/img/F2L 28.png"},
    { name: 'f2l29', scramble: "L' U L U' L' U L y", selected: false, solution: "R' F R F' U R U' R'", img: "../../../../3x3/F2L/img/F2L 29.png"},
    { name: 'f2l30', scramble: "R U' R' U2 R U2 R' U", selected: false, solution: "R U R' U' R U R'", img: "../../../../3x3/F2L/img/F2L 30.png"},
    //Edge In Slot
    { name: 'f2l31', scramble: "R U2 R' F' U' F", selected: false, solution: "U' R' F R F' R U' R'", img: "../../../../3x3/F2L/img/F2L 31.png"},
    { name: 'f2l32', scramble: "R2 U2 R2 U' R2 U' R2", selected: false, solution: "U R U' R' U R U' R' U R U' R'", img: "../../../../3x3/F2L/img/F2L 32.png"},
    { name: 'f2l33', scramble: "R U R' U' R U R' U R U' R'", selected: false, solution: "U' R U' R' U2 R U' R'", img: "../../../../3x3/F2L/img/F2L 33.png"},
    { name: 'f2l34', scramble: "R' D' R U R' D R U'", selected: false, solution: "U R U R' U2 R U R'", img: "../../../../3x3/F2L/img/F2L 34.png"},
    { name: 'f2l35', scramble: "R' F R F' R U' R' U2", selected: false, solution: "U' R U R' U F' U' F", img: "../../../../3x3/F2L/img/F2L 35.png"},
    { name: 'f2l36', scramble: "F' U F U R U' R' U' R U' R'", selected: false, solution: "U F' U' F U' R U R'", img: "../../../../3x3/F2L/img/F2L 36.png"},
    //Pieces In Slot
    { name: 'f2l37', scramble: "R' U R y U' R U2 R' U2 R U' R'", selected: false, solution: "R2 U2 F R2 F' U2 R' U R'", img: "../../../../3x3/F2L/img/F2L 37.png"},
    { name: 'f2l38', scramble: "R2 U2 R U R' U R U2 R", selected: false, solution: "R U' R' U' R U R' U2 R U' R'", img: "../../../../3x3/F2L/img/F2L 38.png"},
    { name: 'f2l39', scramble: "R' U' R U2 R' U R U' R' U' R", selected: false, solution: "R U' R' U R U2 R' U R U' R'", img: "../../../../3x3/F2L/img/F2L 39.png"},
    { name: 'f2l40', scramble: "R' U R U R' U R U' y R U R'", selected: false, solution: "r U' r' U2 r U r' R U R'", img: "../../../../3x3/F2L/img/F2L 40.png"},
    { name: 'f2l41', scramble: "R' U R F L U2 L' F'", selected: false, solution: "R U' R' r U' r' U2 r U r'", img: "../../../../3x3/F2L/img/F2L 41.png"}
]