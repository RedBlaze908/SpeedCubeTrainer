const setup = [
    {name: "f1", scramble: "F,Ri,Fi,R", solution: "U,R,Ui,Ri", remove: "UF,ULF,RF,DRF,UL,URB,ULB,UB"},
    {name: "f2", scramble: "Ri,F,R,Fi", solution: "F,Ri,Fi,R", remove: "ULF,RF,DRF,UL,URB,ULB,UB,UR"},
    {name: "f3", scramble: "Fi,U,F", solution: "Fi,Ui,F", remove: "ULF,RF,DRF,UF,URB,ULB,UB,UR"},
    {name: "f4", scramble: "R,Ui,Ri", solution: "R,U,Ri", remove: "ULF,RF,DRF,UL,URB,ULB,UF,UR"},
    {name: "f5", scramble: "R,U,Ri,U2,R,Ui,Ri,U", solution: "Ui,R,U,Ri,U2,R,Ui,Ri", remove: "ULF,RF,DRF,UL,URB,ULB,UF,UR"},
    {name: "f6", scramble: "Fi,Ui,F,U2,Fi,U,F,Ui", solution: "Ui,r,Ui,Ri,U,R,U,ri", remove: "ULF,RF,DRF,UB,URB,ULB,UF,UR"},
    {name: "f7", scramble: "R,U,Ri,U2,R,U2,Ri,U", solution: "Ui,R,U2,Ri,U2,R,Ui,Ri", remove: "ULF,RF,DRF,UB,URB,ULB,UF,UR"},
    {name: "f8", scramble: "ri,Ui,R2,Ui,R2,U2,r", solution: "ri,U2,R2,U,R2,U,r", remove: "ULF,RF,DRF,UL,URB,ULB,UF,UR"},
    {name: "f9", scramble: "Fi,U,F,Ui,R,U,Ri,U", solution: "Ui,R,Ui,Ri,U,Fi,Ui,F", remove: "ULF,RF,DRF,UL,URB,ULB,UF,UR"},
    {name: "f10", scramble: "R,Ui,Ri,Ui,R,Ui,Ri,U", solution: "Ui,R,U,Ri,U,R,U,Ri", remove: "ULF,RF,DRF,UB,URB,ULB,UF,UR"},
    {name: "f11", scramble: "Fi,U,F,Ui,R,U2,Ri,U", solution: "Ui,R,U2,Ri,U,Fi,Ui,F", remove: "ULF,RF,DRF,UB,URB,ULB,UF,UL"},
    {name: "f12", scramble: "R,U,Ri,U2,R,U,Ri,Ui,R,U,Ri", solution: "R,Ui,Ri,U,R,Ui,Ri,U2,R,Ui,Ri", remove: "ULF,RF,DRF,UB,URB,ULB,UR,UL"},
    {name: "f13", scramble: "r,U2,Ri,U,R,Ui,Ri,U,M", solution: "y',U,Ri,U,R,Ui,Ri,Ui,R", remove: "ULF,RF,DRF,UB,URB,ULB,UR,UL"},
    {name: "f14", scramble: "R,Ui,Ri,Ui,R,U,Ri,U", solution: "Ui,R,Ui,Ri,U,R,U,Ri", remove: "ULF,RF,DRF,UB,URB,ULB,UF,UL"},
    {name: "f15", scramble: "R,U,Ri,Ui,R,U,Ri,U2i,R,Ui,Ri", solution: "R,U,Ri,U2,R,Ui,Ri,U,R,Ui,Ri", remove: "ULF,RF,DRF,UB,URB,ULB,UR,UL"},
    {name: "f16", scramble: "Fi,U,F,U2,R,U,Ri", solution: "R,Ui,Ri,U2,Fi,Ui,F", remove: "ULF,RF,DRF,UB,URB,ULB,UF,UL"},
    {name: "f17", scramble: "R,Ui,Ri,U,R,U2,Ri", solution: "R,U2,Ri,Ui,R,U,Ri", remove: "ULF,RF,DRF,UB,URB,ULB,UF,UL"},
    {name: "f18", scramble: "R,U,Ri,Ui,R,U,Ri,F,Ri,Fi,R", solution: "yi,Ri,U2,R,U,Ri,Ui,R", remove: "ULF,RF,DRF,UB,URB,ULB,UR,UL"},
    {name: "f19", scramble: "R,U,Ri,Ui,R,U2,Ri,Ui", solution: "U,R,U2,Ri,U,R,Ui,Ri", remove: "ULF,RF,DRF,UL,URB,ULB,UF,UR"},
    {name: "f20", scramble: "R,U,Ri,F,Ri,Fi,R2,U,Ri,U", solution: "yi,Ui,Ri,U2,R,Ui,Ri,U,R", remove: "ULF,RF,DRF,UB,URB,ULB,UF,UR"},
    {name: "f21", scramble: "R,Ui,Ri,U2,R,U,Ri", solution: "U2,R,U,Ri,U,R,Ui,Ri", remove: "ULF,RF,DRF,UB,URB,ULB,UF,UR"},
    {name: "f22", scramble: "Fi,Li,U2,L,F", solution: "r,Ui,ri,U2,r,U,ri", remove: "ULF,RF,DRF,UL,URB,ULB,UF,UR"},
    {name: "f23", scramble: "R,Ui,Ri,U,R,Ui,Ri,U2,R,Ui,Ri", solution: "U,R,Ui,Ri,Ui,R,Ui,Ri,U,R,Ui,Ri", remove: "ULF,RF,DRF,UL,URB,ULB,UB,UR"},
    {name: "f24", scramble: "R,U,Ri,F,R,U,Ri,Ui,Fi", solution: "Ui,R,U,R2,F,R,Fi,R,Ui,Ri", remove: "ULF,RF,DRF,UL,URB,ULB,UB,UF"},
    {name: "f25", scramble: "Fi,R,U,Ri,Ui,Ri,F,R", solution: "Ri,Fi,R,U,R,Ui,Ri,F", remove: "ULF,RF,URF,UL,URB,ULB,UB,UF"},
    {name: "f26", scramble: "Fi,Ui,F,U,R,U,Ri,Ui", solution: "U,R,Ui,Ri,F,Ri,Fi,R", remove: "ULF,RF,URF,UL,URB,ULB,UB,UR"},
    {name: "f27", scramble: "R,U,Ri,Ui,R,U,Ri", solution: "R,Ui,Ri,U,R,Ui,Ri", remove: "ULF,RF,URF,UL,URB,ULB,UB,UF"},
    {name: "f28", scramble: "Ri,F,R,Fi,U,R,Ui,Ri", solution: "R,U,Ri,Ui,F,Ri,Fi,R", remove: "ULF,RF,URF,UL,URB,ULB,UB,UR"},
    {name: "f29", scramble: "F,Ri,Fi,R,F,Ri,Fi,R", solution: "Ri,F,R,Fi,U,R,Ui,Ri", remove: "ULF,RF,URF,UL,URB,ULB,UB,UR"},
    {name: "f30", scramble: "R,Ui,Ri,U,R,Ui,Ri", solution: "R,U,Ri,Ui,R,U,Ri", remove: "ULF,RF,URF,UL,URB,ULB,UB,UF"},
    {name: "f31", scramble: "R,U,Ri,F,Ri,Fi,R,U", solution: "Ui,Ri,F,R,Fi,R,Ui,Ri", remove: "ULF,UL,URB,ULB,UB,UF,UR,DRF"},
    {name: "f32", scramble: "R,Ui,Ri,U,R,Ui,Ri,U,R,Ui,Ri", solution: "U,R,Ui,Ri,U,R,Ui,Ri,U,R,Ui,Ri", remove: "ULF,UL,URB,ULB,UB,UF,UR,DRF"},
    {name: "f33", scramble: "R,U,Ri,U2,R,U,Ri,U", solution: "Ui,R,Ui,Ri,U2,R,Ui,Ri", remove: "ULF,UL,URB,ULB,UB,UF,UR,DRF"},
    {name: "f34", scramble: "R,Ui,Ri,U2,R,Ui,Ri,Ui", solution: "U,R,U,Ri,U2,R,U,Ri", remove: "ULF,UL,URB,ULB,UB,UF,UR,DRF"},
    {name: "f35", scramble: "Fi,U,F,Ui,R,Ui,Ri,U", solution: "Ui,R,U,Ri,U,Fi,Ui,F", remove: "ULF,UL,URB,ULB,UB,UF,UR,DRF"},
    {name: "f36", scramble: "R,Ui,Ri,U2,F,Ri,Fi,R,U2", solution: "U,Fi,Ui,F,Ui,R,U,Ri", remove: "ULF,UL,URB,ULB,UB,UF,UR,DRF"},
    {name: "f37", scramble: "R,Ui,R,U2,F,R2,Fi,U2,R2", solution: "R2,U2,F,R2,Fi,U2,Ri,U,Ri", remove: "ULF,UL,URB,ULB,UB,UF,UR,URF"},
    {name: "f38", scramble: "R,Ui,Ri,U,R,U2,Ri,U,R,Ui,Ri", solution: "R,Ui,Ri,Ui,R,U,Ri,U2,R,Ui,Ri", remove: "ULF,UL,URB,ULB,UB,UF,UR,URF"},
    {name: "f39", scramble: "R,Ui,Ri,Ui,R,U,Ri,U2,R,Ui,Ri", solution: "R,Ui,Ri,U,R,U2,Ri,U,R,Ui,Ri", remove: "ULF,UL,URB,ULB,UB,UF,UR,URF"},
    {name: "f40", scramble: "R,U,Ri,F,U,R,Ui,Ri,Fi,R,U,Ri", solution: "r,Ui,ri,U2,r,U,ri,R,U,Ri", remove: "ULF,UL,URB,ULB,UB,UF,UR,URF"},
    {name: "f41", scramble: "R,F,U,R,Ui,Ri,Fi,Ui,Ri", solution: "R,Ui,Ri,r,Ui,ri,U2,r,U,ri", remove: "ULF,UL,URB,ULB,UB,UF,UR,URF"},
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
                if(window.innerWidth >= 768 && window.innerWidth <= 1023) {
                    if (height >= 300) {
                        clearInterval(interval);
                    } else {
                        height += 480;
                        infoF2L.style.height = height + "px";
                    }
                }
                else {
                    if (height >= 300) {
                        clearInterval(interval);
                    } else {
                        height += 20;
                        infoF2L.style.height = height + "px";
                    }
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

    const array = JSON.parse(localStorage.getItem("AlgsLearnedF2L")) || [];

    for (let i = 0; i < array.length; i++) {
        let temp = document.getElementById(array[i]);
        if (temp !== null && !temp.checked) temp.checked = true;
    }

    progressBar();

    document.querySelectorAll('#f2lcase').forEach(element => {
        element.addEventListener('click', function(event) {
            const clickedImage = event.target;
    
            if (clickedImage.tagName === 'IMG') {
                const caseName = clickedImage.getAttribute('data-name');
                const caseIndex = setup.findIndex(c => c.name === caseName);
                //console.log(caseIndex);
            
                document.getElementById('case-selection').innerHTML = '<div class="steps"><div class="step"><div class"responsive-iframe-wrapper"></div><iframe src="../3DCube/iframe.html?preseq=' 
                + setup[caseIndex].scramble + '&seq=' + setup[caseIndex].solution +
                '&stickerless=' + setup[caseIndex].remove +'" class="responsive-iframe" frameborder="0"></iframe></div></div>';

            }
        });
    });
});

function checkBtn(ID) {
    if (!localStorage.getItem("AlgsLearnedF2L")) localStorage.setItem("AlgsLearnedF2L", JSON.stringify([]));

    let array = JSON.parse(localStorage.getItem("AlgsLearnedF2L")) || [];

    if (!array.includes(ID)) {
        array.push(ID);
        localStorage.setItem("AlgsLearnedF2L", JSON.stringify(array));
    }
    else {
        array = array.filter(item => item !== ID);
        localStorage.setItem("AlgsLearnedF2L", JSON.stringify(array));
    }
    progressBar();
}