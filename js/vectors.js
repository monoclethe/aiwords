let vectors = {};

async function loadVectors() {
    console.log("Loading vectors...");
    let start = Date.now();
    const res = await fetch("js/vectors.json");
    vectors = await res.json();
    console.log("Done! (" + (Date.now() - start) + "ms)");
    
}

function add(a, b) {
    return a.map((x, i) => x + b[i]);
}

function multiply(a, b) {
    return a.map((x, i) => x * b);
}

function subtract(a, b) {
    return a.map((x, i) => x - b[i]);
}

function divide(a, b) {
    return a.map((x, i) => x / b);
}

function norm(a) {
    let total = 0;
    for (let i = 0; i < a.length; i++) {
        total += a[i] * a[i];
    }
    total = Math.sqrt(total);
    if (total != 0) {
        return(divide(a, total))
    } else {
        return(a);
    }
}

function cosine(a, b) {
    let dot = 0, na = 0, nb = 0;
    for (let i = 0; i < a.length; i++) {
        dot += a[i] * b[i];
        na += a[i] * a[i];
        nb += b[i] * b[i];
    }
    return dot / (Math.sqrt(na) * Math.sqrt(nb));
}

function getSimilar(v, topN = 10) {
    const scores = [];

    for (const [word, vec] of Object.entries(vectors)) {
        scores.push([word, cosine(v, vec)]);
    }

    scores.sort((a, b) => b[1] - a[1]);
    return scores.slice(0, topN);
}