let tracker = [];

function play(pick) {
    let playerSpan = document.getElementById("player");
    let choice = document.getElementById(pick);
    if (playerSpan.innerText === "X") {
        playerSpan.innerText = "O";
        choice.innerText = "X"; 
        tracker[pick] = "X";
    } else {
        playerSpan.innerText = "X";
        choice.innerText = "O";
        tracker[pick] = "O";
    }
    let topLeft = tracker[0];
    let midLeft = tracker[3];
    let botLeft = tracker[6];
    let topMid = tracker[1];
    let mid = tracker[4];
    let botMid = tracker[7];
    let topRight = tracker[2];
    let midRight = tracker[5];
    let botRight = tracker[8];
    
    if (topLeft !== undefined && topLeft === topMid && topLeft === topRight) {
        alert(`Player ${topLeft} is the winner!`);
    } else if (midLeft !== undefined && midLeft === mid && midLeft === midRight) {
        alert(`Player ${midLeft} is the winner!`);
    } else if (botLeft !== undefined && botLeft === botMid && botLeft === botRight) {
        alert(`Player ${botLeft} is the winner!`);
    } else if (topLeft !== undefined && topLeft === midLeft && topLeft === botLeft) {
        alert(`Player ${topLeft} is the winner!`);
    } else if (topMid !== undefined && topMid === mid && topMid === botMid) {
        alert(`Player ${topMid} is the winner!`);
    } else if (topRight !== undefined &&topRight === midRight && topRight === botRight) {
        alert(`Player ${topRight} is the winner!`);
    } else if (topLeft !== undefined && topLeft === mid && topLeft === botRight) {
        alert(`Player ${topLeft} is the winner!`);    
    } else if (botLeft !== undefined && botLeft === mid && botLeft === topRight) {
        alert(`Player ${botLeft} is the winner!`);
    }
    
    let boardFull = true;
    for (let i = 0; i <= 8; i++) {
       if (tracker[i] === undefined) {
           boardFull = false;
       }
    } if (boardFull === true) {
        alert(`Cat's game, try again!`)
    }
    console.log(tracker);
}
function resetGame() {
    
}