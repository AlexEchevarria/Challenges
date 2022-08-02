/*
 * Reto #25
 * PIEDRA, PAPEL, TIJERA
 * Fecha publicación enunciado: 20/06/22
 * Fecha publicación resolución: 27/06/22
 * Dificultad: MEDIA
 *
 * Enunciado: Crea un programa que calcule quien gana más partidas al piedra, papel, tijera.
 * - El resultado puede ser: "Player 1", "Player 2", "Tie" (empate)
 * - La función recibe un listado que contiene pares, representando cada jugada.
 * - El par puede contener combinaciones de "R" (piedra), "P" (papel) o "S" (tijera).
 * - Ejemplo. Entrada: [("R","S"), ("S","R"), ("P","S")]. Resultado: "Player 2".
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la comunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

const manos = {
    R: "R",
    P: "P",
    S: "S"
}

let jugador1 = ["R", "S", "P"]
let jugador2 = ["S", "R", "S"]

function rps (jugador1, jugador2) {
    let p1wins = 0
    let p2wins = 0

    if(jugador1.length == jugador2.length){
        
        for(let i=0;i<jugador1.length;i++){
            
            if(jugador1[i] == manos.R && jugador2[i] == manos.S){
                p1wins++

            }else if(jugador1[i] == manos.P && jugador2[i] == manos.R){
                p1wins++
            
            }else if(jugador1[i] == manos.S && jugador2[i] == manos.P){
                p1wins++
            }else{
                p2wins++
            }

        }
        
    }
    
    if (p1wins > p2wins)
        return "P1Wins"
    if (p1wins < p2wins)
        return "P2Wins"
    if (p1wins == p2wins)
        return "Tie"
}

console.log(rps(jugador1,jugador2))
