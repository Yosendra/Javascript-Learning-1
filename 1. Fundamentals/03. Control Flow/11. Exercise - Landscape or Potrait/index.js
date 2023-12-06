
// if a function is returning a boolean value, 
// it recommended to prefix the function's name with 'is'

function isLandscape(width, height) {
    return (width > height);
}

function isPotrait(width, height) {
    return (width < height);
}

width = 300;
height = 600;

console.log("IsLandscape :", isLandscape(width, height));   // false
console.log("IsPotrait :", isPotrait(width, height));       // true

width = 1280;
height = 700;

console.log("IsLandscape :", isLandscape(width, height));   // true
console.log("IsPotrait :", isPotrait(width, height));       // false