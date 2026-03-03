/*
A teacher also wants to mark students who get a high score of 9 or more.
    * Extend the function so that it returns "Excellent" for scores greater than 8.
*/

export function rubricExcellent(calificacion) {
    if(calificacion >= 9){
        console.log("Excellent");
    } else if(calificacion >= 5 && calificacion < 9){
        console.log("Pass");
    }else{
        console.log("Fail");
    }
}

const calificacion = parseInt(process.argv[3]);

const rubric = rubricExcellent(calificacion);