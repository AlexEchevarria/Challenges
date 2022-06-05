/*
 * Reto #22
 * CONJUNTOS
 * Fecha publicación enunciado: 01/06/22
 * Fecha publicación resolución: 07/06/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea una función que reciba dos array, un booleano y retorne un array.
 * - Si el booleano es verdadero buscará y retornará los elementos comunes de los dos array.
 * - Si el booleano es falso buscará y retornará los elementos no comunes de los dos array.
 * - No se pueden utilizar operaciones del lenguaje que lo resuelvan directamente.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la comunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

let sets = (arr1, arr2, boolValue) => {
    
    if(boolValue){
        
        let newArray = arr1.filter(word =>
            arr2.includes(word)
        )
        return newArray;

    }else{

        /* Con los 2 filter, manejamos los elementos que sean diferentes.
         * si por ejemplo no ponemos el newArray2, sólo aparece el 1 y faltaría el 4.
        */
        let newArray = arr1.filter(word => 
            !arr2.includes(word)
        )
        let newArray2 = arr2.filter(word =>
            !arr1.includes(word)
        )

        return newArray.concat(newArray2);
    }

}

console.log(sets([1,2,3], [2,3,4] , 1));