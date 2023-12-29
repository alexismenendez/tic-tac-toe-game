const resetBtn = document.getElementById("reset");
const dialog = document.getElementById("dialog");
const dialogDiv = document.querySelector(".dialogContain");

const board = document.querySelector("#board")
const cellEls = document.querySelectorAll(".cell");

const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

const cirClass = "circle";
const xClass = "x";

let circleTurn


resetBtn.addEventListener("click", () => {
    dialog.showModal();
});

// closeButton.addEventListener("click", (event) => {
//     dialog.close();
// });

function placeMark (cell, currentClass) {
    cell.classList.add(currentClass)
};

function turnHandler() {
    circleTurn = !circleTurn
};

function boardHoverClass() {
    board.classList.remove(xClass)
    board.classList.remove(cirClass)

    if (circleTurn) {
        board.classList.add(cirClass)
    } else {
        board.classList.add(xClass)
    }
}

function checkWin(currentClass) {
    return winCombos.some(combination => {
        combination.every(index => {
            return cellEls[index].classList.contains(currentClass)
        })
    })
}

function clickHandler(event) {
    console.log("clicked")

    const cell = event.target
    const currentClass = circleTurn ? cirClass : xClass

    placeMark(cell, currentClass)
    if (checkWin(currentClass)) {
        console.log("winner")
    }

    turnHandler()
    boardHoverClass()
};

function startGame() {
    circleTurn = false

    cellEls.forEach( cell => {
        cell.addEventListener("click", clickHandler, { once: true })
    });

    boardHoverClass()
}

startGame()

