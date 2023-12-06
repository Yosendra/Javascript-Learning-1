
function showStars(rows) {
    for (let i = 1; i <= rows; i++) {
        let stars = "";

        for (let j = 1; j <= i; j++)
            stars += "*";

        console.log(stars);
    }
}

function showStarsV2(rows) {
    let stars = "";

    for (let row = 1; row <= rows; row++) {
        stars += "*";
        console.log(stars);
    }
}

showStars(5);

console.log("\n");

showStarsV2(5);