/*
Ed would like a way to input the names of three of his friends.
    * Export a class that will take 3 arguments to construct an object with 3 properties.
        * The 3 properties in the constructor should be called `name1`, `name2`, and `name3`.
*/

export class FriendNames {
    constructor() {
      this.names = [];
    }
  }
const numberFriends = parseInt(process.argv[3]);

// Crear instancia
const names = new FriendNames();
// Agregar nombres como propiedades dinámicas
for (let i = 0; i < numberFriends; i++){ 
  names.names.push(process.argv[4 + i]); }

// Imprimir exactamente en el formato solicitado
console.log(names.names)