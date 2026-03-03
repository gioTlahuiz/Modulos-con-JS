/*
Ed would like a way to calculate the ages of his friends.
* Export a class that will return a string containing a given friend's name and age. It should:
* Take 4 arguments - a **name**, a **year**, a **month**, and a **day** - and construct an object with those 4 properties.
* Have a public method named `returnAge()` that will return the following string: `<name> is <age> today!`
*/

export class FriendAge{
    constructor(name,year,month,day){
        this.name = name;
        this.year = year;
        this.month = month;
        this.day = day;
    }

    returnAge(){
        const today = new Date();
        const birthDate = new Date(this.year, this.month -1, this.day);

        let age = today.getFullYear() - birthDate.getFullYear();

        const hasHadBirthday =
        today.getMonth() > birthDate.getMonth() ||
        (today.getMonth() === birthDate.getMonth() &&
        today.getDate() >= birthDate.getDate());

        if (!hasHadBirthday) {
            age--;
        }
        return `${this.name} is ${age} today!`
    }
}

// Leer argumentos desde la terminal
const name = process.argv[3];
const year = parseInt(process.argv[4]);
const month = parseInt(process.argv[5]);
const day = parseInt(process.argv[6]);

// Crear instancia correctamente usando "new"
const friend = new FriendAge(name, year, month, day);

// Llamar el método
const result = friend.returnAge();

// Imprimir resultado
if (typeof result === "number" && !isNaN(result)) {
    console.log("Successful");
}
console.log(result);


