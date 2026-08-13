/*------------ From Conceptual Session ----------------*/

// Validation ----------->>
/**
 * validation ----> value valid kina check kora.
 * It means function a parameter hishebe jei argument jabe seta valid or not.
 * mane Number er jaigai Number na giye String or Boolean etc jawa.
 * othoba String er jaigai Number or Boolean jawa.
 * ei doroner case ghotle ulta palta ans na diye pure arror msg deya.
*/

function details(info) {
  if (typeof info !== 'object') {
    return 'Input should be an object.';
  }
  else if (!info.name || !info.age) {
    return 'Object must contain name and age properties.';
  }
  else if (typeof info.name !== "string" || typeof info.age !== "number") {
    return 'Name should be string and age should be number.';
  }
  else if (info.age <= 0) {
    return 'Age should be positive number.';
  }
  return `My name is ${info.name} and I'm ${info.age} years old.`;
}

const myInformation = {
  name: "Myen Uddin",
  age: 20,
  class: "Hon's",
}
// console.log(details(myInformation));



// Ana to vori ------------>>
function anaToVori(ana) {
  if (typeof ana !== 'number' || ana < 0) { //Check value validity
    return 'Please enter a valid number.'; 
  }
  const vori = ana * 0.0625;
  return vori;
}

const shornoAna = 20;
// console.log(anaToVori(shornoAna));


