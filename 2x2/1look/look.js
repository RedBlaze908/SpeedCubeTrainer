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
                    height += 450;
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
});