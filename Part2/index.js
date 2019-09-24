let input1 = document.getElementById('idInput');
let input2 = document.getElementById('colorInput');

function setCard() {
   let card = document.getElementById(idInput.value);
   card.style.color = colorInput.value;
   console.log(card);
}
function gameFinished() {
    document.getElementById(reset);
    document.location.href = "";
}
