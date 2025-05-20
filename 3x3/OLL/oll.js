const setup = [
    {name: "o1", scramble: "r,u2,ri,ui,r,ui,ri", solution: "r,u,ri,u,r,u2,ri", remove: ""},
    {name: "o2", scramble: "li,u2,l,u,li,u,l", solution: "li,ui,l,ui,li,u2,l", remove: ""},
    {name: "o3", scramble: "u,ri,u,r,ui,ri,u,r,u2,ri", solution: "r,u2,ri,ui,r,u,ri,ui,r,ui", remove: ""},
    {name: "o4", scramble: "ri,u2,r2,u,r2,u,r2,u2,ri", solution: "r,u2,r2,ui,r2,ui,r2,u2,r", remove: ""},
    {name: "o5", scramble: "ri,fi,rw,u,r,ui,rwi,f", solution: "fi,rw,u,ri,ui,rwi,f,r", remove: ""},
    {name: "o6", scramble: "f,ri,fi,rw,u,r,ui,rwi", solution: "rw,u,ri,ui,rwi,f,r,fi", remove: ""},
    {name: "o7", scramble: "r,u2,r,d,ri,u2,r,di,rw", solution: "r2,d,ri,u2,r,di,ri,u2,ri", remove: ""},
    {name: "o8", scramble: "f,ri,fi,r,u,r,ui,ri", solution: "r,u,ri,ui,ri,f,r,fi", remove: ""},
    {name: "o9", scramble: "f,u,r,ui,ri,fi", solution: "f,r,u,ri,ui,fi", remove: ""},
    {name: "o10", scramble: "", solution: "", remove: ""},
    {name: "o11", scramble: "", solution: "", remove: ""},
    {name: "o12", scramble: "", solution: "", remove: ""},
    {name: "o13", scramble: "", solution: "", remove: ""},
    {name: "o14", scramble: "", solution: "", remove: ""},
    {name: "o15", scramble: "", solution: "", remove: ""},
    {name: "o16", scramble: "", solution: "", remove: ""},
    {name: "o17", scramble: "", solution: "", remove: ""},
    {name: "o18", scramble: "R,U,Ri,Ui,R,U,Ri,F,Ri,Fi,R", solution: "yi,Ri,U2,R,U,Ri,Ui,R", remove: "ULF,RF,DRF,UB,URB,ULB,UR,UL"},
    {name: "o19", scramble: "R,U,Ri,Ui,R,U2,Ri,Ui", solution: "U,R,U2,Ri,U,R,Ui,Ri", remove: "ULF,RF,DRF,UL,URB,ULB,UF,UR"},
    {name: "o20", scramble: "R,U,Ri,F,Ri,Fi,R2,U,Ri,U", solution: "yi,Ui,Ri,U2,R,Ui,Ri,U,R", remove: "ULF,RF,DRF,UB,URB,ULB,UF,UR"},
    {name: "o21", scramble: "R,Ui,Ri,U2,R,U,Ri", solution: "U2,R,U,Ri,U,R,Ui,Ri", remove: "ULF,RF,DRF,UB,URB,ULB,UF,UR"},
    {name: "o22", scramble: "Fi,Li,U2,L,F", solution: "r,Ui,ri,U2,r,U,ri", remove: "ULF,RF,DRF,UL,URB,ULB,UF,UR"},
    {name: "o23", scramble: "R,Ui,Ri,U,R,Ui,Ri,U2,R,Ui,Ri", solution: "U,R,Ui,Ri,Ui,R,Ui,Ri,U,R,Ui,Ri", remove: "ULF,RF,DRF,UL,URB,ULB,UB,UR"},
    {name: "o24", scramble: "R,U,Ri,F,R,U,Ri,Ui,Fi", solution: "Ui,R,U,R2,F,R,Fi,R,Ui,Ri", remove: "ULF,RF,DRF,UL,URB,ULB,UB,UF"},
    {name: "o25", scramble: "Fi,R,U,Ri,Ui,Ri,F,R", solution: "Ri,Fi,R,U,R,Ui,Ri,F", remove: "ULF,RF,URF,UL,URB,ULB,UB,UF"},
    {name: "o26", scramble: "Fi,Ui,F,U,R,U,Ri,Ui", solution: "U,R,Ui,Ri,F,Ri,Fi,R", remove: "ULF,RF,URF,UL,URB,ULB,UB,UR"},
    {name: "o27", scramble: "R,U,Ri,Ui,R,U,Ri", solution: "R,Ui,Ri,U,R,Ui,Ri", remove: "ULF,RF,URF,UL,URB,ULB,UB,UF"},
    {name: "o28", scramble: "Ri,F,R,Fi,U,R,Ui,Ri", solution: "R,U,Ri,Ui,F,Ri,Fi,R", remove: "ULF,RF,URF,UL,URB,ULB,UB,UR"},
    {name: "o29", scramble: "F,Ri,Fi,R,F,Ri,Fi,R", solution: "Ri,F,R,Fi,U,R,Ui,Ri", remove: "ULF,RF,URF,UL,URB,ULB,UB,UR"},
    {name: "o30", scramble: "R,Ui,Ri,U,R,Ui,Ri", solution: "R,U,Ri,Ui,R,U,Ri", remove: "ULF,RF,URF,UL,URB,ULB,UB,UF"},
    {name: "o31", scramble: "R,U,Ri,F,Ri,Fi,R,U", solution: "Ui,Ri,F,R,Fi,R,Ui,Ri", remove: "ULF,UL,URB,ULB,UB,UF,UR,DRF"},
    {name: "o32", scramble: "R,Ui,Ri,U,R,Ui,Ri,U,R,Ui,Ri", solution: "U,R,Ui,Ri,U,R,Ui,Ri,U,R,Ui,Ri", remove: "ULF,UL,URB,ULB,UB,UF,UR,DRF"},
    {name: "o33", scramble: "R,U,Ri,U2,R,U,Ri,U", solution: "Ui,R,Ui,Ri,U2,R,Ui,Ri", remove: "ULF,UL,URB,ULB,UB,UF,UR,DRF"},
    {name: "o34", scramble: "R,Ui,Ri,U2,R,Ui,Ri,Ui", solution: "U,R,U,Ri,U2,R,U,Ri", remove: "ULF,UL,URB,ULB,UB,UF,UR,DRF"},
    {name: "o35", scramble: "Fi,U,F,Ui,R,Ui,Ri,U", solution: "Ui,R,U,Ri,U,Fi,Ui,F", remove: "ULF,UL,URB,ULB,UB,UF,UR,DRF"},
    {name: "o36", scramble: "R,Ui,Ri,U2,F,Ri,Fi,R,U2", solution: "U,Fi,Ui,F,Ui,R,U,Ri", remove: "ULF,UL,URB,ULB,UB,UF,UR,DRF"},
    {name: "o37", scramble: "R,Ui,R,U2,F,R2,Fi,U2,R2", solution: "R2,U2,F,R2,Fi,U2,Ri,U,Ri", remove: "ULF,UL,URB,ULB,UB,UF,UR,URF"},
    {name: "o38", scramble: "R,Ui,Ri,U,R,U2,Ri,U,R,Ui,Ri", solution: "R,Ui,Ri,Ui,R,U,Ri,U2,R,Ui,Ri", remove: "ULF,UL,URB,ULB,UB,UF,UR,URF"},
    {name: "o39", scramble: "R,Ui,Ri,Ui,R,U,Ri,U2,R,Ui,Ri", solution: "R,Ui,Ri,U,R,U2,Ri,U,R,Ui,Ri", remove: "ULF,UL,URB,ULB,UB,UF,UR,URF"},
    {name: "o40", scramble: "R,U,Ri,F,U,R,Ui,Ri,Fi,R,U,Ri", solution: "r,Ui,ri,U2,r,U,ri,R,U,Ri", remove: "ULF,UL,URB,ULB,UB,UF,UR,URF"},
    {name: "o41", scramble: "R,F,U,R,Ui,Ri,Fi,Ui,Ri", solution: "R,Ui,Ri,r,Ui,ri,U2,r,U,ri", remove: "ULF,UL,URB,ULB,UB,UF,UR,URF"},
];

document.addEventListener('DOMContentLoaded', () => {
    const info = document.getElementById('category-info');
    const infoBtn = document.getElementById('infoBtn');
    const infoF2L = document.getElementById('infoF2L');

    infoBtn.addEventListener('click', () => {
        if (info.style.display === "none") {
            info.style.display = "block";
            let height = 80;
            const interval = setInterval(() => {
                if (height >= 300) {
                    clearInterval(interval);
                } else {
                    height += 20;
                    infoF2L.style.height = height + "px";
                }
            }, 25);
        } else {
            info.style.display = "none";
            let height = parseInt(window.getComputedStyle(infoF2L).height, 10);
            const interval = setInterval(() => {
                if (height <= 80) {
                    clearInterval(interval);
                } else {
                    height -= 20;
                    infoF2L.style.height = height + "px";
                }
            }, 25);
        }
    });

    const array = JSON.parse(localStorage.getItem("AlgsLearnedOLL")) || [];

    for (let i = 0; i < array.length; i++) {
        let temp = document.getElementById(array[i]);
        if (temp !== null && !temp.checked) temp.checked = true;
    }

    progressBar();

    document.querySelectorAll('#ollcase').forEach(element => {
        element.addEventListener('click', function(event) {
            const clickedImage = event.target;
    
            if (clickedImage.tagName === 'IMG') {
                const caseName = clickedImage.getAttribute('data-name');
                const caseIndex = setup.findIndex(c => c.name === caseName);
            
                document.getElementById('case-selection').innerHTML = '<div class="steps"><div class="step"><div class"responsive-iframe-wrapper"></div><iframe src="../3DCube/iframe.html?preseq=' 
                + setup[caseIndex].scramble + '&seq=' + setup[caseIndex].solution +
                '&stickerless=' + setup[caseIndex].remove +'" class="responsive-iframe" frameborder="0"></iframe></div></div>';

            }
        });
    });

});

function checkBtn(ID) {
    if (!localStorage.getItem("AlgsLearnedOLL")) localStorage.setItem("AlgsLearnedOLL", JSON.stringify([]));

    let array = JSON.parse(localStorage.getItem("AlgsLearnedOLL")) || [];

    if (!array.includes(ID)) {
        array.push(ID);
        localStorage.setItem("AlgsLearnedOLL", JSON.stringify(array));
    }
    else {
        array = array.filter(item => item !== ID);
        localStorage.setItem("AlgsLearnedOLL", JSON.stringify(array));
    }
    progressBar();
}