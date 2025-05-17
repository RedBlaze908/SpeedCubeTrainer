document.addEventListener('DOMContentLoaded', () => {
    
    let layers = 3;

    document.getElementById('run').addEventListener('click', () => {
        let setup = document.getElementById('setup').value;
        let moves = document.getElementById('moves').value;
        let iframe = document.getElementById('frame');


        setup = setup.replace(/ /g, ',').replace(/'/g, 'i');
        moves = moves.replace(/ /g, ',').replace(/'/g, 'i');

        iframe.src = "iframe.html?preseq=z2," + encodeURIComponent(setup) + "&seq=" + encodeURIComponent(moves) + "&stickerless=&layers="+ encodeURIComponent(layers);
    });

    document.getElementById('floatingCube').addEventListener('change', (event) => {
        layers = event.target.value;
    });
});