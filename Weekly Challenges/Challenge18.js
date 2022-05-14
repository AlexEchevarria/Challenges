/*
 * Reto #18
 * TRES EN RAYA
 * Fecha publicación enunciado: 02/05/22
 * Fecha publicación resolución: 09/05/22
 * Dificultad: DIFÍCIL
 *
 * Enunciado: Crea una función que analice una matriz 3x3 compuesta por "X" y "O" y retorne lo siguiente:
 * - "X" si han ganado las "X"
 * - "O" si han ganado los "O"
 * - "Empate" si ha habido un empate
 * - "Nulo" si la proporción de "X", de "O", o de la matriz no es correcta. O si han ganado los 2.
 * Nota: La matriz puede no estar totalmente cubierta. Se podría representar con un vacío "", por ejemplo.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la comunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */


const matriz1 = [
    ["O", "O", "X"],
    ["O", "O", "X"],
    ["X", "O", "X"]
];
const matriz2 = [
    ["X", "O", "O"],
    ["O", "O", "X"],
    ["X", "", "X"]
];
const matriz3 = [
    ["X", "O", "O"],
    ["O", "X", "X"],
    ["X", "O", "X"]
];


const whoWon = (matriz) => {

    // Something is missing.
    // Any null message is bad.
    let countRows = 0;
    let xCount = 0;
    let oCount = 0;

    for (let row = 0; row < matriz.length; row++) {

        if (matriz[row][0] != "") countRows++;

        for (let col = 0; col < row; col++) {

            if (matriz[row][col] == "X") xCount++;
            if (matriz[row][col] == "O") oCount++;

        }
    }

    if (countRows != 3) return null;
    if (Math.abs(xCount - oCount) > 1) return null;


    // Lets check the win condition
    // TO WIN we need some combinations.
    let whoWin = "";
    // O Winning condition
    if (matriz[0][0] == "O" && matriz[1][0] == "O" && matriz[2][0] == "O") whoWin = "O Win";
    if (matriz[0][1] == "O" && matriz[1][1] == "O" && matriz[2][1] == "O") whoWin = "O Win";
    if (matriz[0][2] == "O" && matriz[1][2] == "O" && matriz[2][2] == "O") whoWin = "O Win";
    if (matriz[0][0] == "O" && matriz[0][1] == "O" && matriz[0][2] == "O") whoWin = "O Win";
    if (matriz[1][1] == "O" && matriz[1][1] == "O" && matriz[1][2] == "O") whoWin = "O Win";
    if (matriz[2][1] == "O" && matriz[2][1] == "O" && matriz[2][2] == "O") whoWin = "O Win";
    if (matriz[0][0] == "O" && matriz[1][1] == "O" && matriz[2][2] == "O") whoWin = "O Win";
    if (matriz[0][2] == "O" && matriz[1][1] == "O" && matriz[2][0] == "O") whoWin = "O Win";

    // X Winning Condition
    if (matriz[0][0] == "X" && matriz[1][0] == "X" && matriz[2][0] == "X") whoWin += "X Win";
    if (matriz[0][1] == "X" && matriz[1][1] == "X" && matriz[2][1] == "X") whoWin += "X Win";
    if (matriz[0][2] == "X" && matriz[1][2] == "X" && matriz[2][2] == "X") whoWin += "X Win";
    if (matriz[0][0] == "X" && matriz[0][1] == "X" && matriz[0][2] == "X") whoWin += "X Win";
    if (matriz[1][1] == "X" && matriz[1][1] == "X" && matriz[1][2] == "X") whoWin += "X Win";
    if (matriz[2][1] == "X" && matriz[2][1] == "X" && matriz[2][2] == "X") whoWin += "X Win";
    if (matriz[0][0] == "X" && matriz[1][1] == "X" && matriz[2][2] == "X") whoWin += "X Win";
    if (matriz[0][2] == "X" && matriz[1][1] == "X" && matriz[2][0] == "X") whoWin += "X Win";
    
    if (whoWin == "O WinX Win") whoWin = "Draw ";
    whoWin = whoWin.substring(0, 5);
    if (whoWin == "") return "Any value is missing on matrix";


    return whoWin;
}


console.log(whoWon(matriz1));
console.log(whoWon(matriz2));
console.log(whoWon(matriz3));