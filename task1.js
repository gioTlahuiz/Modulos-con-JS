/*
1. Maria is calculating the cost of monthly payments. For every transaction there is a $3 fee and a 1% (0.01) interest fee. 
    * Given an input transaction amount, export a function that returns the value of what she should be paying.
        * This function should be able to take a number as input, and return a number as output.
*/

export 
function costCalculator(amount) {
    return amount + 3 + (amount * 0.01);
}
// Tomamos el número desde la terminal
const amount = parseFloat(process.argv[3]);

// Llamamos la función directamente 
const result = costCalculator(amount);

console.log(result);
