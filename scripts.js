const mainContainer = document.querySelector("div#gridContainer");
const resetButton = document.querySelector("button#reset");
resetButton.addEventListener("click", resetGrid)

createGrid(256);

function resetGrid () {
    let desiredSquares = prompt("How many rows would you like?");
    let previousSquares = document.querySelectorAll("div.oneBoxStyle");
    if (inputChecker(desiredSquares)) {
        document.documentElement.style.setProperty('--row-numbers', desiredSquares);
        createGrid(desiredSquares * desiredSquares);
    }
    previousSquares.forEach(removeChild);
    
}

function removeChild(child) {
    mainContainer.removeChild(child);
}

function inputChecker(input) {
    if (input > 100 || isNaN(input)) {
        alert("Please enter an integer value between 0 and 100")
    }
    return true; 
}

function createBox () {
    let box = document.createElement("div");
    box.classList.add('oneBoxStyle');
    box.addEventListener("mouseover", changeColor);
    mainContainer.appendChild(box);
}

function changeColor (e) {
    //e.target.style.backgroundColor = "red";
    e.target.classList.add('borderLit')
}

function createGrid (totalBoxes) {
    for (i=0; i < totalBoxes; i++) {
        createBox();
    }
}


