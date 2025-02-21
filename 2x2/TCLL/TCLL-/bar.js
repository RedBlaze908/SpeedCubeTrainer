function progressBar() {
    const array = JSON.parse(localStorage.getItem("AlgsLearned2x2")) || [];
    const progressBar = document.getElementById('progress-bar');
    let n = 0;
    for (let i = 0; i < array.length; ++i) {
        var temp = array[i];
        if (temp[0] == "+") ++n;
    }

    let temp2 = (n / 45) * 100;
    progressBar.style.width = temp2 + "%";
    progressBar.innerHTML = temp2.toFixed(0) + "%";
}