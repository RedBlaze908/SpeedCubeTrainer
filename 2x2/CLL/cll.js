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
                    height += 50;
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

    const array = JSON.parse(localStorage.getItem("AlgsLearned2x2")) || [];
    
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
            
                document.getElementById('case-selection').innerHTML = '<div class="steps"><div class="step"><div class"responsive-iframe-wrapper"></div><iframe src="../../3x3/3DCube/iframe.html?preseq=' 
                + setup[caseIndex].scramble + '&seq=' + setup[caseIndex].solution +
                '&stickerless=' + setup[caseIndex].remove +'" class="responsive-iframe" frameborder="0"></iframe></div></div>';

            }
        });
    });
    
});

function checkBtn(ID) {
    if (!localStorage.getItem("AlgsLearned2x2")) localStorage.setItem("AlgsLearned2x2", JSON.stringify([]));

    let array = JSON.parse(localStorage.getItem("AlgsLearned2x2")) || [];

    if (!array.includes(ID)) {
        array.push(ID);
        localStorage.setItem("AlgsLearned2x2", JSON.stringify(array));
    }
    else {
        array = array.filter(item => item !== ID);
        localStorage.setItem("AlgsLearned2x2", JSON.stringify(array));
    }
    progressBar();
}