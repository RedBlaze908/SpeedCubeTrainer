const setup = [
    {name: "p1", scramble: "Ri,Ui,R,Ui,R,U,R2,U,R,Ui,R,Ui,Ri,U2", solution: "U2,R,U,Ri,U,Ri,Ui,R2,Ui,Ri,U,Ri,U,R", remove: ""},
    {name: "p2", scramble: "R2,Ui,Ri,Ui,R,U,R,U,R,Ui,R", solution: "Ri,U,Ri,Ui,R2,R,Ui,Ri,U,R,U,R2", remove: ""},
    {name: "p3", scramble: "M2,U,M2,U2,M2,U,M2", solution: "M2,U,M2,U2,M2,U,M2", remove: ""},
    {name: "p4", scramble: "M2,U2,M,U,M2,U,M2,U,M", solution: "M2,U,M2,U,Mi,U2,M2,U2,Mi,U", remove: ""},
    {name: "p5", scramble: "x,R2,D2,R,U,Ri,D2,R,Ui,R,xi", solution: "x,Ri,U,Ri,D2,R,Ui,Ri,D2,R2,xi", remove: ""},
    {name: "p6", scramble: "x,Ri,U,Ri,D2,R,Ui,Ri,D2,R2,xi", solution: "x,R2,D2,R,U,Ri,D2,R,Ui,R,xi", remove: ""},
    {name: "p7", scramble: "R2,Di,R,Ui,Ri,D,R,Ui,Ri,Di,R,U,Ri,D,R,U,R", solution: "Ri,Ui,Ri,Di,R,Ui,Ri,D,R,U,Ri,Di,R,U,Ri,D,R2", remove: ""},
    {name: "p8", scramble: "F,R,Ui,Ri,U,R,U,R2,Fi,R,U,R,Ui,Ri", solution: "R,U,Ri,Ui,Ri,F,R2,Ui,Ri,Ui,R,U,Ri,Fi", remove: ""},
    {name: "p9", scramble: "Ri,Ui,R,Ui,Ri,U,R,U,R2,Fi,R,U,R,Ui,Ri,F,U,R", solution: "Ri,Ui,Fi,R,U,Ri,Ui,Ri,F,R2,Ui,Ri,Ui,R,U,Ri,U,R", remove: ""},
    {name: "p10", scramble: "R,U,R2,Fi,R,U,R,Ui,Ri,F,R,Ui,Ri", solution: "R,U,Ri,Fi,R,U,Ri,Ui,Ri,F,R2,Ui,Ri", remove: ""},
    {name: "p11", scramble: "x,U2,ri,Ui,r,U2,Ri,F,Ri,Fi,R2,x,U2", solution: "U2,x,R2,F,R,Fi,R,U2,ri,U,r,U2,xi", remove: ""},
    {name: "p12", scramble: "R,U2,R,D,Ri,U,R,Di,Ri,Ui,Ri,U,R,U,Ri", solution: "R,Ui,Ri,Ui,R,U,R,D,Ri,Ui,R,Di,Ri,U2,Ri", remove: ""},
    {name: "p13", scramble: "R2,F,R,U,R,Ui,Ri,Fi,R,U2,Ri,U2,R,Ui", solution: "Ri,U2,R,U2,Ri,F,R,U,Ri,Ui,Ri,Fi,R2", remove: ""},
    {name: "p14", scramble: "F,R,Ui,Ri,Ui,R,U,Ri,Fi,R,U,Ri,Ui,Ri,F,R,Fi", solution: "F,R,Ui,Ri,Ui,R,U,Ri,Fi,R,U,Ri,Ui,Ri,F,R,Fi", remove: ""},
    {name: "p15", scramble: "R,U,Ri,U,R,U,Ri,Fi,R,U,Ri,Ui,Ri,F,R2,Ui,Ri,U2,R,Ui,Ri", solution: "R,U,Ri,U,R,U,Ri,Fi,R,U,Ri,Ui,Ri,F,R2,Ui,Ri,U2,R,Ui,Ri", remove: ""},
    {name: "p16", scramble: "r',D',F,r,Ui,ri,Fi,D,r2,U,ri,Ui,ri,F,r,Fi", solution: "r',D',F,r,Ui,ri,Fi,D,r2,U,ri,Ui,ri,F,r,Fi", remove: ""},
    {name: "p17", scramble: "Fi,U,Fi,Ui,Ri,Fi,R2,Ui,Ri,U,Ri,F,R,F", solution: "Fi,U,Fi,Ui,Ri,Fi,R2,Ui,Ri,U,Ri,F,R,F", remove: ""},
    {name: "p18", scramble: "D,Ri,Ui,R,U,Di,R2,U,Ri,U,R,Ui,R,Ui,R2", solution: "R2,U,Ri,U,Ri,Ui,R,Ui,R2,D,Ui,Ri,U,R,Di", remove: ""},
    {name: "p19", scramble: "R2,u,Ri,U,Ri,Ui,R,ui,R2,Fi,U,F,Ui", solution: "U,Fi,Ui,F,R2,u,Ri,U,R,Ui,R,ui,R2", remove: ""},
    {name: "p20", scramble: "R,U,Ri,Ui,D,R2,Ui,R,Ui,Ri,U,Ri,U,R2,Di", solution: "D,R2,Ui,R,Ui,R,U,Ri,U,R2,Di,U,R,Ui,Ri", remove: ""},
    {name: "p21", scramble: "R2,Ui,R,Ui,R,U,Ri,U,R2,Di,U,Ri,Ui,Ri,D", solution: "Di,R,U,Ri,Ui,D,R2,Ui,R,Ui,Ri,U,Ri,U,R2", remove: ""}
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

    const array = JSON.parse(localStorage.getItem("AlgsLearnedPLL")) || [];

    for (let i = 0; i < array.length; i++) {
        let temp = document.getElementById(array[i]);
        if (temp !== null && !temp.checked) temp.checked = true;
    }

    progressBar();

    document.querySelectorAll('#pllcase').forEach(element => {
        element.addEventListener('click', function(event) {
            const clickedImage = event.target;
    
            if (clickedImage.tagName === 'IMG') {
                const caseName = clickedImage.getAttribute('data-name');
                const caseIndex = setup.findIndex(c => c.name === caseName);
            
                document.getElementById('case-selection').innerHTML = '';

                document.getElementById('case-selection').innerHTML = '<div class="steps"><div class="step"><div class="responsive-iframe-wrapper"></div><iframe src="../3DCube/iframe.html?preseq=' 
                + setup[caseIndex].scramble + '&seq=' + setup[caseIndex].solution +
                '" class="responsive-iframe" frameborder="0"></iframe></div></div>';
                
            }
        });
    });
});

function checkBtn(ID) {
    if (!localStorage.getItem("AlgsLearnedPLL")) localStorage.setItem("AlgsLearnedPLL", JSON.stringify([]));

    let array = JSON.parse(localStorage.getItem("AlgsLearnedPLL")) || [];

    if (!array.includes(ID)) {
        array.push(ID);
        localStorage.setItem("AlgsLearnedPLL", JSON.stringify(array));
    }
    else {
        array = array.filter(item => item !== ID);
        localStorage.setItem("AlgsLearnedPLL", JSON.stringify(array));
    }
    progressBar();
}