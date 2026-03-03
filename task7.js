/*
A teacher also wants to mark students who get a perfect score of 11.
    * Extend the function so that it returns "Perfect" for a score of 11.
*/

export function rubricPerfect(calificacion) {
    if(calificacion == 11){
        console.log("Perfect");
    } else if(calificacion >= 9 && calificacion < 11){
        console.log("Excellent");
    }else if(calificacion >= 5 && calificacion < 9){
        console.log("Pass");
    }else{
        console.log("Fail")
    }
}

const calificacion = parseInt(process.argv[3]);

const rubric = rubricPerfect(calificacion);