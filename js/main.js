`use strict`
const btnGenerator = document.getElementById("btn-generator");
const boardContainer = document.querySelector(".board");

boardContainer.innerHTML = "";

for( let i = 1; i <= 100; i++){
    const boardCell = document.createElement("div");
    boardCell.innerHTML = i;
    boardCell.classList.add("board__number");
    boardCell.addEventListener("click", function(){
        console.log(this.innerHTML);
        boardCell.classList.add("lightblue");
    })
    boardContainer.append(boardCell);
}
