/*
 * Reto #21
 * CALCULADORA .TXT
 * Fecha publicación enunciado: 23/05/22
 * Fecha publicación resolución: 01/06/22
 * Dificultad: MEDIA
 *
 * Enunciado: Lee el fichero "Challenge21.txt" incluido en el proyecto, calcula su resultado e imprímelo.
 * - El .txt se corresponde con las entradas de una calculadora.
 * - Cada línea tendrá un número o una operación representada por un símbolo (alternando ambos).
 * - Soporta números enteros y decimales.
 * - Soporta las operaciones suma "+", resta "-", multiplicación "*" y división "/".
 * - El resultado se muestra al finalizar la lectura de la última línea (si el .txt es correcto).
 * - Si el formato del .txt no es correcto, se indicará que no se han podido resolver las operaciones.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la comunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */


const lineReader = require('line-reader');

const file = "Challenge21data.txt";
//Control de formato
const extension = (fileName) => {
    return fileName.split('.').pop();
}

let result = 0, value1 = 0, value2 = 0;
let signo = "";

if (extension (file) != "txt") console.error("Error: Formato de archivo incorrecto"); 
if (extension (file) == "txt"){
    
    lineReader.eachLine(file, (line, lastLine) => {
        
        if (parseInt(line) || parseFloat(line)){
            
            if (value1 == 0) value1 = line;
            if (value1 != 0 && value2 == 0 && signo != "") value2 = line;
            if (signo != "") result = eval(value1 + signo + value2);
            if (result != 0) value1 = result; signo = ""; value2 = 0;

        }else{
            signo = line;
        }

        if (lastLine) console.log(result)

    });

}






