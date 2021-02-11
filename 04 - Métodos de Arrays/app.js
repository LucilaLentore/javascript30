const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = [
  'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
  'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
  'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
  'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
  'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];

// Array.prototype.filter()
// 1. Filtra la lista de inventores para aquellos que nacieron en el siglo XVI.
  const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600));
  console.table(fifteen);

// Array.prototype.map()
// 2. Nombre y apellidos de los inventores.
  const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
  console.log(fullNames);

// Array.prototype.sort()
// 3. Ordena los inventores por fecha de nacimiento, de mayor a menor.
  const orderer = inventors.sort((a, b) => a.year > b.year ? 1 : -1); 
  console.table(orderer);

// Array.prototype.reduce()
// 4. ¿Cuántos años vivieron todos los inventores juntos?
const totalYears = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0);
console.log(totalYears)

// 5. Ordenar los inventores por años de vida.
const oldest = inventors.sort(function(a,b) {
  const lastGuy = a.passed - a.year;
  const nextGuy = b.passed - b.year;
  return lastGuy > nextGuy ? -1 : 1;
});
console.table(oldest);

// 6. Crear una lista de bulevares en París que contengan 'de' en cualquier lugar del nombre
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris --> Se trabaja en este sitio
const category = document.querySelector('.mv-category');
const links = Array.form(category.querySelectorAll('a'));
const de = links
          .map(link => link.textContent)
          .filter(streetName => streetName.includes('de'));

// 7. Ejercicio sort()
// Ordenar a las personas alfabéticamente por apellido
const alpha = people.sort((lastOne, nextOne) => {
  const [aLast, aFirst] = lastOne.split(', ');
  const [bLast, bFirst] = nextOne.split(', ');
  return aLast > bLast ? 1 : -1;
});
console.table(alpha);


// 8. Ejercicio reduce()
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
const transportation = data.reduce(function(obj, item){
  if (!obj[item]){
    obj[item] = 0;
  }
  obj[item]++;
  return obj;
}, {});
console.log(transportation);