const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];
  
const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

// Some y Every
// Array.prototype.some() // ¿Al menos una persona tiene 19 años o más?
const isAdult = people.some(person => ((new Date()).
  getFullYear()) - person.year >= 19);

console.log({isAdult});

// Array.prototype.every() // ¿Todxs tienen 19 años o más?
const allAdults = people.every(person => ((new Date()).
getFullYear()) - person.year >= 19);

console.log({allAdults});

// Array.prototype.find()
// Find es como Filter, pero sólo devuelve el que está buscando
// Encontrar el comentario con el ID 823423
const comment = comments.find(comment => comment.id === 823423);
console.log(comment);

// Array.prototype.findIndex()
//Encontrar el comentario con este ID
//Eliminar el comentario con el ID 823423
const index = comments.findIndex(comment => comment.id === 823423);
console.log(index);
comments.splice(index, 1);
console.table(comments)