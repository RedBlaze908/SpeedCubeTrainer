const cases = [
    //Hammer TCLL+
    { name: 't1p', scramble: "R2 U R2 U' R2 U2 R U2 R' U'", selected: false, solution: "R' F R F' R' F R F'", img: "../../../2x2/TCLL/img/hammer1.png"},
    { name: 't2p', scramble: "R' U2 R' U R' U F R F' U'", selected: false, solution: "y' R' U2 R U' F R' F'", img: "../../../2x2/TCLL/img/hammer2.png"},
    { name: 't3p', scramble: "R U R' U' R U' F R' F' U2 R'", selected: false, solution: "F R' F' R2 U' R' U2 R U R'", img: "../../../2x2/TCLL/img/hammer3.png"},
    { name: 't4p', scramble: "R' F R F' U' R' F R F' R U' R'", selected: false, solution: "(U2) R' F' R U2 R U R' F2", img: "../../../2x2/TCLL/img/hammer4.png"},
    { name: 't5p', scramble: "F R2 F' R U' R' U2 R2 U R2 U'", selected: false, solution: "(U) R' U R U' R U' R2 F R2 F'", img: "../../../2x2/TCLL/img/hammer5.png"},
    { name: 't6p', scramble: "R' U R U' R2 F R F' U R U2", selected: false, solution: "(U) R U R' F R F' R U R' U R'", img: "../../../2x2/TCLL/img/hammer6.png"},

    //Spaceship TCLL+
    { name: 't7p', scramble: "R' U R2 U2 R U2 R'", selected: false, solution: "y' (U2) R' U' R U R' U' R", img: "../../../2x2/TCLL/img/spaceship1.png"},
    { name: 't8p', scramble: "F R U R' U' R' F' R F R' F' R", selected: false, solution: "(U) R' F R F' R' F R U R U' R' F'", img: "../../../2x2/TCLL/img/spaceship2.png"},
    { name: 't9p', scramble: "R U2 R F R' F' R U2 R'", selected: false, solution: "(U) R U' R' U R2 U' R' F R' F'", img: "../../../2x2/TCLL/img/spaceship3.png"},
    { name: 't10p', scramble: "F U' R U2 R2 F' R U R U' R'", selected: false, solution: "(U) R U' R2 F R U R U' R' F'", img: "../../../2x2/TCLL/img/spaceship4.png"},
    { name: 't11p', scramble: "R U R' F R' F' R U' R U2 R'", selected: false, solution: "(U) R U2' R' U R' F R F' R U' R'", img: "../../../2x2/TCLL/img/spaceship5.png"},
    { name: 't12p', scramble: "F2 R U' R2 F R U2 R' F R", selected: false, solution: "(U2) R' U' R U' R' F R F' R' F R' F'", img: "../../../2x2/TCLL/img/spaceship6.png"},

    //Stollery TCLL+
    { name: 't13p', scramble: "R2 U R' U R U2 R2 U' R U' R' U", selected: false, solution: "R U R' U F' R U' R' F2", img: "../../../2x2/TCLL/img/stollery1.png"},
    { name: 't14p', scramble: "R U R' U' R U F R F' U' R'", selected: false, solution: "(U2) R' F R U' F' R U2 R' F2", img: "../../../2x2/TCLL/img/stollery2.png"},
    { name: 't15p', scramble: "R U' R' U R U2 R2 F R F'", selected: false, solution: "(U) R U' R' U' R U' R' U R' F R F'", img: "../../../2x2/TCLL/img/stollery3.png"},
    { name: 't16p', scramble: "R U' R' U' R' F R F' R U' R'", selected: false, solution: "R U R' F R U R' U' R' F' R", img: "../../../2x2/TCLL/img/stollery4.png"},
    { name: 't17p', scramble: "R' F2 R F2 R' F2 R2 U R'", selected: false, solution: "(U') R2 F R F' U R U' R U' R2", img: "../../../2x2/TCLL/img/stollery5.png"},
    { name: 't18p', scramble: "R U' R2 U R2 U F' U' F", selected: false, solution: "R' U' F R F' U R2 U' R'", img: "../../../2x2/TCLL/img/stollery6.png"},

    //Pinwheel TCLL+
    { name: 't19p', scramble: "R' U' F2 U R U' R U R' U' F", selected: false, solution: "y' F' R U R U2 R2 F' U R F'", img: "../../../2x2/TCLL/img/pinwheel1.png"},
    { name: 't20p', scramble: "F R U' R' F' R U R' U' R U R2 F' R", selected: false, solution: "R' F' U' F R2 U' R U2 R", img: "../../../2x2/TCLL/img/pinwheel2.png"},
    { name: 't21p', scramble: "R2 F R U2 R U R' F2 R", selected: false, solution: "F R F' U2 R U' R2 F R2 F'", img: "../../../2x2/TCLL/img/pinwheel3.png"},

    //Two-face TCLL+
    { name: 't22p', scramble: "R2 U R2 U' R2 U R U' R'", selected: false, solution: "y' (U/U') R2 U' R2 U R' U R U' R'", img: "../../../2x2/TCLL/img/twoface1.png"},
    { name: 't23p', scramble: "F2 R U R' U R' F2 R", selected: false, solution: "y' (U) R' U2 R' F R F' R", img: "../../../2x2/TCLL/img/twoface2.png"},
    { name: 't24p', scramble: "R' U R U' R' F' U F R", selected: false, solution: "R U' R' U F' R' F' R F", img: "../../../2x2/TCLL/img/twoface3.png"},
    { name: 't25p', scramble: "R' F R' F' U R' U R' U' R", selected: false, solution: "(U) R U R' U2 R' F R F' U R U2 R'", img: "../../../2x2/TCLL/img/twoface4.png"},
    
    //Turtle TCLL+
    { name: 't26p', scramble: "R2 U' R U' R U2 R U' R", selected: false, solution: "R U' R' U R U' R'", img: "../../../2x2/TCLL/img/turtle1.png"},
    { name: 't27p', scramble: "F U F' R2 U R' U' R' F2 U2 R", selected: false, solution: "(U') R U R' F' R2 F' R2 F R2", img: "../../../2x2/TCLL/img/turtle2.png"},
    { name: 't28p', scramble: "R U R2 F' R2 U' R' F R U' R'", selected: false, solution: "(U) F R' F' R U' R' F R F' R U' R'", img: "../../../2x2/TCLL/img/turtle3.png"},
    { name: 't29p', scramble: "R U2 R' U2 R' U F' U' F R U' R", selected: false, solution: "(U2) y' R' U' R U' y R U2 R'", img: "../../../2x2/TCLL/img/turtle4.png"},
    { name: 't30p', scramble: "F R' U R' U' R' F'", selected: false, solution: "(U2) R' F R F' U2 R U2 R'", img: "../../../2x2/TCLL/img/turtle5.png"},
    { name: 't31p', scramble: "F R U' R' U R U R2 F' R2 U R'", selected: false, solution: "(U2) R U R2 F R F' U2 R U' R'", img: "../../../2x2/TCLL/img/turtle6.png"},
    
    //Pinwheel Poser TCLL+
    { name: 't32p', scramble: "F U R U' R' U F' R U' R' F' R U' R'", selected: false, solution: "(U') R2 F R2 F' R' U' F R F'", img: "../../../2x2/TCLL/img/poser1.png"},
    { name: 't33p', scramble: "R U' R2 U R U F R U' R' F R", selected: false, solution: "(U') R' F R2 F' R U R' U2 R'", img: "../../../2x2/TCLL/img/poser2.png"},
    { name: 't34p', scramble: "R' U R' F' R2 U2 R U' R' F", selected: false, solution: "R U R' U2 R' F R F' R U' R'", img: "../../../2x2/TCLL/img/poser3.png"},
    { name: 't35p', scramble: "F' U F2 R' F' R", selected: false, solution: "y (U2) F' R U R2 F' R", img: "../../../2x2/TCLL/img/poser4.png"},
    { name: 't36p', scramble: "F2 R' F' R U2 F'", selected: false, solution: "R U' R2 F R F'", img: "../../../2x2/TCLL/img/poser5.png"},
    { name: 't37p', scramble: "F R2 F' R' U2 R", selected: false, solution: "(U2) F' U R' F2 R F", img: "../../../2x2/TCLL/img/poser6.png"},
    
    //Gun TCLL+
    { name: 't38p', scramble: "R U' R U R2 U' R2", selected: false, solution: "R U' R' U2 R U2 R'", img: "../../../2x2/TCLL/img/gun1.png"},
    { name: 't39p', scramble: "R' F' R U2 F' R U2 R' U' F", selected: false, solution: "y (U') F' R' F2 R F' R' F R2 U' R'", img: "../../../2x2/TCLL/img/gun2.png"},
    { name: 't40p', scramble: "R U' R' F U' R' F R", selected: false, solution: "R' F R F' U R U' R'", img: "../../../2x2/TCLL/img/gun3.png"},
    { name: 't41p', scramble: "F R' F' R U R U' R2 F R2 U' R' F", selected: false, solution: "R U' R' U R U2 R' F R' F' R", img: "../../../2x2/TCLL/img/gun4.png"},
    { name: 't42p', scramble: "R' U' R U' R' F R' F' R2", selected: false, solution: "(U2) R U R' U R U R2 F R F'", img: "../../../2x2/TCLL/img/gun5.png"},
    { name: 't43p', scramble: "R U2 R' U R' F' R F2", selected: false, solution: "(U) R U2 R' F R F' R U R2", img: "../../../2x2/TCLL/img/gun6.png"},



    //Hammer TCLL-
    { name: 't1n', scramble: "x R' U R U' R' U R U' x'", selected: false, solution: "(U') x U R' U' R U R' U' R x'", img: "../../../2x2/TCLL/img2/hammer1.png"},
    { name: 't2n', scramble: "R' U' R U y R U2 R'", selected: false, solution: "y' (U') F R2 F' U R' U R", img: "../../../2x2/TCLL/img2/hammer2.png"},
    { name: 't3n', scramble: "R2 U' R2 y U F' R' F' R", selected: false, solution: "(U2) R U R' U2 F R' F' R2 U' R'", img: "../../../2x2/TCLL/img2/hammer3.png"},
    { name: 't4n', scramble: "R2 F' U F U2 F R' F'", selected: false, solution: "(U') R U R' F R' F' R U' R U2 R'", img: "../../../2x2/TCLL/img2/hammer4.png"},
    { name: 't5n', scramble: "R U' R2 F R U R U' R' F'", selected: false, solution: "R' U2 R' U2 R U' R' F R F'", img: "../../../2x2/TCLL/img2/hammer5.png"},
    { name: 't6n', scramble: "R U' R' U2 F R' F' R2 U2 R'", selected: false, solution: "R U' R U' R' F R' F' R U' R'", img: "../../../2x2/TCLL/img2/hammer6.png"},

    //Spaceship TCLL-
    { name: 't7n', scramble: "R U' R' U R U' R'", selected: false, solution: "R U R' U' R U R'", img: "../../../2x2/TCLL/img2/spaceship1.png"},
    { name: 't8n', scramble: "R U' R U' R' F R' F' U' R U R'", selected: false, solution: "(U2) R U R' U R' F R F' U2 R U R'", img: "../../../2x2/TCLL/img2/spaceship2.png"},
    { name: 't9n', scramble: "R' F R F' U R U R' U' R U' R'", selected: false, solution: "(U') R U R' F R' F' R U R' F R F'", img: "../../../2x2/TCLL/img2/spaceship3.png"},
    { name: 't10n', scramble: "F R2 F' U2 R2 U' R2 U R2", selected: false, solution: "(U') R' F R F' U R U2 R2 F R F'", img: "../../../2x2/TCLL/img2/spaceship4.png"},
    { name: 't11n', scramble: "F R U R' U R' F R F2", selected: false, solution: "y' (U) R' U R U R' F R' F' R U' R", img: "../../../2x2/TCLL/img2/spaceship5.png"},
    { name: 't12n', scramble: "R' U' U' F R F' U' R' F R F' R U", selected: false, solution: "y (U') R' F U' R' F R2 U' R' U2 R", img: "../../../2x2/TCLL/img2/spaceship6.png"},

    //Stollery TCLL-
    { name: 't13n', scramble: "R U R' U R2 U2 R' U' R U' R2", selected: false, solution: "(U) R2 U R2 U' R U2 R' U2 R", img: "../../../2x2/TCLL/img2/stollery1.png"},
    { name: 't14n', scramble: "L' U L U' F' R U2 R' F2", selected: false, solution: "y' R2 F R' F' U' R U R'", img: "../../../2x2/TCLL/img2/stollery2.png"},
    { name: 't15n', scramble: "R' U R2 U' R2 U' F R F'", selected: false, solution: "F R' F' U R2 U R2' U' R", img: "../../../2x2/TCLL/img2/stollery3.png"},
    { name: 't16n', scramble: "R U R' F R U R' U' R' F' R", selected: false, solution: "(U2) R U' R' U' R' F R F' R U' R'", img: "../../../2x2/TCLL/img2/stollery4.png"},
    { name: 't17n', scramble: "R U' R2 F2 R F2 R' F2 R", selected: false, solution: "y' R2 F' R U2 R U2 R' F R", img: "../../../2x2/TCLL/img2/stollery5.png"},
    { name: 't18n', scramble: "R' F R U' R U R2 F2 R F", selected: false, solution: "(U2) R U' R' U R U2 R2 F R F'", img: "../../../2x2/TCLL/img2/stollery6.png"},

    //Pinwheel TCLL-
    { name: 't19n', scramble: "F R' F R U' R' F2 R2 U2 R' F", selected: false, solution: "R2 U R' U R' U2 R U2 R' U2 R", img: "../../../2x2/TCLL/img2/pinwheel1.png"},
    { name: 't20n', scramble: "R' F' U' F R2 U' R U2 R", selected: false, solution: "R' U2 R' U2 R2 F R' F' R'", img: "../../../2x2/TCLL/img2/pinwheel2.png"},
    { name: 't21n', scramble: "R' U' R U' R' U2 R2 U' R2 F R F'", selected: false, solution: "y' R2 F' R U2 R U R' F2 R", img: "../../../2x2/TCLL/img2/pinwheel3.png"},

    //Two-face TCLL-
    { name: 't22n', scramble: "R U2 R U2 R' U' R U' R2", selected: false, solution: "R2 U R' U R U2 R' U2 R'", img: "../../../2x2/TCLL/img2/twoface1.png"},
    { name: 't23n', scramble: "R' U F' u F U' R2 U' R2", selected: false, solution: "(U2) R2 U' R' F R' F' R U2 R'", img: "../../../2x2/TCLL/img2/twoface2.png"},
    { name: 't24n', scramble: "F R U' R' F' U R' F' R U", selected: false, solution: "(U/U') F' R' F R F U' R U R'", img: "../../../2x2/TCLL/img2/twoface3.png"},
    { name: 't25n', scramble: "R2 U' R2 U R2 U R2 F' U F", selected: false, solution: "(U') R' F R F' R U2 R' U' R U R'", img: "../../../2x2/TCLL/img2/twoface4.png"},
    
    //Turtle TCLL-
    { name: 't26n', scramble: "R' U' R U R' U' R", selected: false, solution: "y (U') L' U L U' L' U L", img: "../../../2x2/TCLL/img2/turtle1.png"},
    { name: 't27n', scramble: "R' U2 R U R' F R' F' R2 U R' U' R", selected: false, solution: "R U2 R' U R' U' F R F' U R", img: "../../../2x2/TCLL/img2/turtle2.png"},
    { name: 't28n', scramble: "R U' R' U R2 U' R' F R' F'", selected: false, solution: "y' (U2) R' U' R U R' U R' F R F' R", img: "../../../2x2/TCLL/img2/turtle3.png"},
    { name: 't29n', scramble: "F R' F' R U R U2 R' U R U' R'", selected: false, solution: "(U) R U R' U y L' U2 L", img: "../../../2x2/TCLL/img2/turtle4.png"},
    { name: 't30n', scramble: "R' F R F' U2 R U2 R'", selected: false, solution: "(U') R U2 R' U2 F R' F' R", img: "../../../2x2/TCLL/img2/turtle5.png"},
    { name: 't31n', scramble: "R' U' R U' R2 F R F' R", selected: false, solution: "R U' R' U2 R U R2 F R F'", img: "../../../2x2/TCLL/img2/turtle6.png"},
    
    //Pinwheel Poser TCLL-
    { name: 't32n', scramble: "R2 U' R' F R' F2 U2 F", selected: false, solution: "y (U') R U' R' U F R U2 R' F2", img: "../../../2x2/TCLL/img2/poser1.png"},
    { name: 't33n', scramble: "R' F R F' R' F R2 U R' U' F'", selected: false, solution: "R U2 R U' R' F R2 F' R", img: "../../../2x2/TCLL/img2/poser2.png"},
    { name: 't34n', scramble: "F2 R U R' U2 F", selected: false, solution: "y' (U') R' U2' F R' F' R2", img: "../../../2x2/TCLL/img2/poser3.png"},
    { name: 't35n', scramble: "R U' R2 F R F'", selected: false, solution: "(U) F R' F' R2 U R'", img: "../../../2x2/TCLL/img2/poser4.png"},
    { name: 't36n', scramble: "R U R' U2 R' F R F' R U' R'", selected: false, solution: "(U) R U R' F R' F' R U2 R U' R'", img: "../../../2x2/TCLL/img2/poser5.png"},
    { name: 't37n', scramble: "F' U R' F2 R F", selected: false, solution: "F' R' F2 R U' F", img: "../../../2x2/TCLL/img2/poser6.png"},
    
    //Gun TCLL-
    { name: 't38n', scramble: "R U' R' U2 R U2 R'", selected: false, solution: "(U) R U2 R' U2 R U R'", img: "../../../2x2/TCLL/img2/gun1.png"},
    { name: 't39n', scramble: "R U R' F2 R F2 R' F2 R", selected: false, solution: "(U2) F R U2 R' F R U' R2 F R", img: "../../../2x2/TCLL/img2/gun2.png"},
    { name: 't40n', scramble: "R U' R U F R' F' R2", selected: false, solution: "(U) R U R' U' F R' F' R", img: "../../../2x2/TCLL/img2/gun3.png"},
    { name: 't41n', scramble: "R2 F R F' R U R' U R", selected: false, solution: "(U2) F R' F' R2 U' R' U' R U' R'", img: "../../../2x2/TCLL/img2/gun4.png"},
    { name: 't42n', scramble: "R' F2 R U' R U R' F2", selected: false, solution: "y' (U') R' F R' F' R U2 R", img: "../../../2x2/TCLL/img2/gun5.png"},
    { name: 't43n', scramble: "R2 U' R' F R' F' U2 R U R'", selected: false, solution: "R2 U R' F R F' R' U' R", img: "../../../2x2/TCLL/img2/gun6.png"},
];