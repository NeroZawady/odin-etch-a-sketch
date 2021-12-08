const mainContainer = document.querySelector("#mainContainer");
const newGrid = document.querySelector("button");
const divs = [];

createGrid(16);

newGrid.addEventListener("click", () => {
    destroyGrid();
    createGrid(promptSquares());
});

function destroyGrid() {
    while(divs.length > 0) {
        divs.pop().remove();
    }
}

function promptSquares() {
    let squares = +prompt("Squares per side: ");
    while(Number.isNaN(squares) || squares < 1 || squares > 100) {
        squares = +prompt("Invalid input. Squares per side (1-100): ");
    }
    return squares;
}

function createGrid(squares) {
    mainContainer.style.gridTemplate = " 1fr ".repeat(squares) + " / " + " 1fr ".repeat(squares);
    for(let i = 0; i < squares*squares; i++) {
        divs[i] = document.createElement("div");
        divs[i].addEventListener("mouseenter", () => {divs[i].style.backgroundColor = "black";});
        mainContainer.appendChild(divs[i]);
    }
}