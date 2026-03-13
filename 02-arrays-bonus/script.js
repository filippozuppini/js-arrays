// const teachers = [
//   'Nathan',
//   'Ed',
//   'Fabio',
//   'Phil',
//   'Carlo',
//   'Lewis',
//   'Luca'
// ]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers


// const reversedTeachers = [];

// for (let i = teachers.length - 1; i >= 0 ;i--){

//   reversedTeachers.push(teachers[i])

// }

// console.log(reversedTeachers);






// const reversedTeachers = [];
// for (let i = teachers.length - 1; i > 0; i--){
//   const thisTeacher = teachers[i]
//   reversedTeachers.push(thisTeacher)
// }
// console.log(reversedTeachers);




// VARIANTE CON REVERSE
// const reversedTeachers = teachers.reverse();
// console.log(reversedTeachers);






// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri



//creo l'array longNames vuoto

// let longNames = [];


// // for per scorre tutti i nomi dentro la lista
// for (let i = 0; i < teachers.length; i++){
  
//   // verifica che ogni nome sia maggiore o uguale di 5 

//   if (teachers[i].length >= 5) {

//     // push alla nuova lista longNames
//     longNames.push(teachers[i])
  
//   }

// }

// console.log(longNames);







// 3. Rimuovi 'Ed' dall'array teachers

// teachers.splice(teachers.indexOf('Ed'), 1 );
// console.log(teachers);

















// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent


// let isFabioPresent = false;


// // scorro l'array
// for (let i = 0; i < teachers.length; i++ ){

//   //se fabio é presente = true
//   if (teachers[i] === 'Fabio'){
//     isFabioPresent = true;

//   }

// }

// console.log(isFabioPresent);












const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
];


// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa
//   separata da virgole e salvala nella variabile teachersString

// let teachersString = teachers.join(", ");

// let teachersString = "";


// // scorro la lista

// for (let i = 0; i < teachers.length; i++){

//   // Aggiungo a teacherstring gli elementi di teachers per
//   // ogni indice che viene passato dal ciclo for
//   teachersString += teachers[i];

//   //inserisco la virgola tra gli elementi fin che non arrivo all'ultimo
//   if (i < teachers.length -1) {
//     teachersString += ", ";
//   }

// }

// console.log(teachersString);










