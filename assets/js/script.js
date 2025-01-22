const resetBtn = document.getElementById("reset");
const dialog = document.getElementById("dialog");
const dialogDiv = document.querySelector(".dialogContain");

const board = document.querySelector("#board")
const cellEls = document.querySelectorAll(".cell");

//Array for the winning combos for Xs or Os
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

const oClass = "o";
const xClass = "x";

let oTurn


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
    oTurn = !oTurn
};

function boardHoverClass() {
    board.classList.remove(xClass)
    board.classList.remove(oClass)

    if (oTurn) {
        board.classList.add(oClass)
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

//Responds to User input. Logs the click, checks the turn and then applies the respond mark, then changes the turn
function clickHandler(event) {
    console.log("clicked")

    const cell = event.target
    const currentClass = oTurn ? oClass : xClass

    placeMark(cell, currentClass)
    if (checkWin(currentClass)) {
        console.log("winner")
    }

    turnHandler()
    boardHoverClass()
};

function startGame() {
    oTurn = false

    cellEls.forEach( cell => {
        cell.addEventListener("click", clickHandler, { once: true })
    });

    boardHoverClass()
}

startGame()