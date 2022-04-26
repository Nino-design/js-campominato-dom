
//NUMBERO DI CELLE TOTALI
const cells = 100;

// CREAZIONE CELLE PER LA MATRICE 

for (let i = 1; i <= cells; i++) {
    //RICHIAMO SELETTORE
    const matrix = document.querySelector(".container");
    //CREAZIONE CELLA
    const newCell = document.createElement("div");
    //INSERIMENTO NUMERO NELLA CELLA
    newCell.innerHTML = `<span>${i}</span>`
    //AGGIUNTA CLASSE ALLA CELLA
    newCell.classList.add("cell");
    // AGGIUNTA CELLA ALLA MATRICE
    matrix.append(newCell);
    // AGGIUNTO EVENTO CAMBIO COLORE AL CLICK
    newCell.addEventListener("click", function() {
        this.classList.add("color");
    });
    
}    


const bombNumber = 16;

const bombs = generateNumber(bombNumber, cells);
console.log(bombs);

function generateNumber(number, totCells) {
    const bombArray = [];
    while (bombArray.length < number) {
        const randomNumber = Math.floor(Math.random() * totCells) + 1;
        if (!bombArray.includes(randomNumber)) {
            bombArray.push(randomNumber);
        }
    }
    return bombArray;
}

