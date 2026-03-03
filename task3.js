/*
4. Ed would like a way to calculate an age from a given birth date.
    * Export a function that will take 3 arguments - a **year**, a **month**, and a **day** - then return an accurate age.
        * For example, `ageCalculator(2000, 12, 25)` should return the age of someone born on Christmas Day, 2000.
*/
export function ageCalculator(year, month, day) {
    const today = new Date();
    const birthDate = new Date(year, month - 1, day);

    let age = today.getFullYear() - birthDate.getFullYear();

    const hasHadBirthday =
        today.getMonth() > birthDate.getMonth() ||
        (today.getMonth() === birthDate.getMonth() &&
         today.getDate() >= birthDate.getDate());

    if (!hasHadBirthday) {
        age--;
    }

    return age;
}

// Leer argumentos desde la terminal
const year = parseInt(process.argv[3]);
const month = parseInt(process.argv[4]);
const day = parseInt(process.argv[5]);

// Ejecutar la función
const result = ageCalculator(year, month, day);

// Si todo salió bien, imprimir "Successful"
if (typeof result === "number" && !isNaN(result)) {
    console.log("Successful");
}