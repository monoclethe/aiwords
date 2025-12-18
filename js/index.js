const loadingScreen = document.getElementById("loadingScreen");
const mainScreen = document.getElementById("mainScreen");
const rankContainers = document.getElementsByClassName("rankContainer");
const rankBars = document.getElementsByClassName("rankBar");
const rankWords = document.getElementsByClassName("rankWord");
const addWord = document.getElementById("addWord");
const subWord = document.getElementById("subWord");
const wordTable = document.getElementById("wordTable");
const wordIn = document.getElementsByClassName("wordIn");
const w0 = document.getElementById("w0");
const w1 = document.getElementById("w1");
const w2 = document.getElementById("w2");
const w3 = document.getElementById("w3");
const w4 = document.getElementById("w4");
const w5 = document.getElementById("w5");
const w6 = document.getElementById("w6");
const w7 = document.getElementById("w7");
const w8 = document.getElementById("w8");
const w9 = document.getElementById("w9");
const b0 = document.getElementById("b0");
const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const b3 = document.getElementById("b3");
const b4 = document.getElementById("b4");
const b5 = document.getElementById("b5");
const b6 = document.getElementById("b6");
const b7 = document.getElementById("b7");
const b8 = document.getElementById("b8");
const b9 = document.getElementById("b9");
const aboutButton = document.getElementById("aboutButton");
const aboutPage = document.getElementById("aboutPage");

var tableLength = 1;
var aboutPageVisible = false;

document.getElementById("iw1").oninput = updateRank;
document.getElementById("in1").oninput = updateRank;

async function startup () {
    if (loadVects) {
        await loadVectors();
    }
    loadingScreen.style.display = "none";
    mainScreen.style.display = "flex";
    updateRank();
}

function updateRank () {
    let wordsIn = document.getElementsByClassName("wordIn");
    let weightsIn = document.getElementsByClassName("weightIn")
    let total = multiply(vectors["hello"], 0);
    let totalWeight = 0;
    for (let i = 0; i < weightsIn.length; i++) {
        let wordVector = vectors[wordsIn[i].value.toLowerCase()];
        let wordWeight = weightsIn[i].value;
        totalWeight += wordWeight;
        total = add(total, multiply(wordVector, wordWeight));
    }
    let result = getSimilar(total);

    let c1 = [255, 0, 0];
    let c2 = [255, 255, 0];

    w0.innerHTML = result[0][0];
    w1.innerHTML = result[1][0];
    w2.innerHTML = result[2][0];
    w3.innerHTML = result[3][0];
    w4.innerHTML = result[4][0];
    w5.innerHTML = result[5][0];
    w6.innerHTML = result[6][0];
    w7.innerHTML = result[7][0];
    w8.innerHTML = result[8][0];
    w9.innerHTML = result[9][0];

    b0.style.height = "calc(" + (result[0][1] * 100) + "% - 22px)";
    b1.style.height = "calc(" + (result[1][1] * 100) + "% - 22px)";
    b2.style.height = "calc(" + (result[2][1] * 100) + "% - 22px)";
    b3.style.height = "calc(" + (result[3][1] * 100) + "% - 22px)";
    b4.style.height = "calc(" + (result[4][1] * 100) + "% - 22px)";
    b5.style.height = "calc(" + (result[5][1] * 100) + "% - 22px)";
    b6.style.height = "calc(" + (result[6][1] * 100) + "% - 22px)";
    b7.style.height = "calc(" + (result[7][1] * 100) + "% - 22px)";
    b8.style.height = "calc(" + (result[8][1] * 100) + "% - 22px)";
    b9.style.height = "calc(" + (result[9][1] * 100) + "% - 22px)";

    b0.style.backgroundColor = "rgb(" + (c1[0] * result[0][1] + c2[0] * (1-result[0][1])) + ", " + (c1[1] * result[0][1] + c2[1] * (1-result[0][1])) + ", " + (c1[2] * result[0][1] + c2[2] * (1-result[0][1])) +  ")";
    b1.style.backgroundColor = "rgb(" + (c1[0] * result[1][1] + c2[0] * (1-result[1][1])) + ", " + (c1[1] * result[1][1] + c2[1] * (1-result[1][1])) + ", " + (c1[2] * result[1][1] + c2[2] * (1-result[1][1])) +  ")";
    b2.style.backgroundColor = "rgb(" + (c1[0] * result[2][1] + c2[0] * (1-result[2][1])) + ", " + (c1[1] * result[2][1] + c2[1] * (1-result[2][1])) + ", " + (c1[2] * result[2][1] + c2[2] * (1-result[2][1])) +  ")";
    b3.style.backgroundColor = "rgb(" + (c1[0] * result[3][1] + c2[0] * (1-result[3][1])) + ", " + (c1[1] * result[3][1] + c2[1] * (1-result[3][1])) + ", " + (c1[2] * result[3][1] + c2[2] * (1-result[3][1])) +  ")";
    b4.style.backgroundColor = "rgb(" + (c1[0] * result[4][1] + c2[0] * (1-result[4][1])) + ", " + (c1[1] * result[4][1] + c2[1] * (1-result[4][1])) + ", " + (c1[2] * result[4][1] + c2[2] * (1-result[4][1])) +  ")";
    b5.style.backgroundColor = "rgb(" + (c1[0] * result[5][1] + c2[0] * (1-result[5][1])) + ", " + (c1[1] * result[5][1] + c2[1] * (1-result[5][1])) + ", " + (c1[2] * result[5][1] + c2[2] * (1-result[5][1])) +  ")";
    b6.style.backgroundColor = "rgb(" + (c1[0] * result[6][1] + c2[0] * (1-result[6][1])) + ", " + (c1[1] * result[6][1] + c2[1] * (1-result[6][1])) + ", " + (c1[2] * result[6][1] + c2[2] * (1-result[6][1])) +  ")";
    b7.style.backgroundColor = "rgb(" + (c1[0] * result[7][1] + c2[0] * (1-result[7][1])) + ", " + (c1[1] * result[7][1] + c2[1] * (1-result[7][1])) + ", " + (c1[2] * result[7][1] + c2[2] * (1-result[7][1])) +  ")";
    b8.style.backgroundColor = "rgb(" + (c1[0] * result[8][1] + c2[0] * (1-result[8][1])) + ", " + (c1[1] * result[8][1] + c2[1] * (1-result[8][1])) + ", " + (c1[2] * result[8][1] + c2[2] * (1-result[8][1])) +  ")";
    b9.style.backgroundColor = "rgb(" + (c1[0] * result[9][1] + c2[0] * (1-result[9][1])) + ", " + (c1[1] * result[9][1] + c2[1] * (1-result[9][1])) + ", " + (c1[2] * result[9][1] + c2[2] * (1-result[9][1])) +  ")";

    b0.innerHTML = result[0][1].toFixed(2);
    b1.innerHTML = result[1][1].toFixed(2);
    b2.innerHTML = result[2][1].toFixed(2);
    b3.innerHTML = result[3][1].toFixed(2);
    b4.innerHTML = result[4][1].toFixed(2);
    b5.innerHTML = result[5][1].toFixed(2);
    b6.innerHTML = result[6][1].toFixed(2);
    b7.innerHTML = result[7][1].toFixed(2);
    b8.innerHTML = result[8][1].toFixed(2);
    b9.innerHTML = result[9][1].toFixed(2);
}

addWord.onclick = () => {
    tableLength++;
    let newTableRow = document.createElement("tr");
    newTableRow.id = "t" + tableLength;
    let newTableCellWord = document.createElement("td");
    let newWordInput = document.createElement("input");
    newWordInput.placeholder = "Word here...";
    newWordInput.value = "King";
    newWordInput.className = "wordIn";
    newWordInput.id = "iw" + tableLength;
    newWordInput.oninput = updateRank;
    newTableCellWord.appendChild(newWordInput);
    let newTableCellWeight = document.createElement("td");
    let newWeightInput = document.createElement("input");
    newWeightInput.type = "number";
    newWeightInput.className = "weightIn";
    newWeightInput.value = 1;
    newWeightInput.id = "in" + tableLength;
    newWeightInput.oninput = updateRank
    newTableCellWeight.appendChild(newWeightInput);
    newTableRow.appendChild(newTableCellWord);
    newTableRow.appendChild(newTableCellWeight);
    wordTable.appendChild(newTableRow);
}
subWord.onclick = () => {
    if (tableLength != 1) {
        document.getElementById("t" + tableLength).remove();
        tableLength--;
    }
}

aboutButton.onclick = () => {
    const popup = [
        { transform: "scale(0)"},
        { transform: "scale(1)"}
    ];
    const popaway = [
        { transform: "scale(1)"},
        { transform: "scale(0)"}
    ];
    const options = {
        duration: 250,
        easing: "ease",
        fill: "forwards"
    }
    if (!aboutPageVisible) {
        aboutPage.style.display = "block";
        aboutPage.animate(popup, options);
    } else {
        setTimeout(() => {
            aboutPage.style.display = "none";
        }, 250)
        aboutPage.animate(popaway, options);
    }
    aboutPageVisible = !aboutPageVisible;
}

startup();