
// Speed limit = 70
// 5 -> 1 point
// Math.floor(1.3)
// 71, 72, 73, 74 is still Ok
// 12 points -> license suspended

function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed < (speedLimit + kmPerPoint)){
        console.log("Ok");
        return;
    }

    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    if (points >= 12)
        console.log("Licence Suspended");
    else
        console.log(`Point: ${points}`);
}

checkSpeed(130);