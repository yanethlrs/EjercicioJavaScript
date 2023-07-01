const fechahoy = new Date();
const fechanac = new Date(1979, 10, 7);
const varfecha = fechahoy > fechanac;
const dianac = fechanac.getDate();
const mesnac = fechanac.getMonth() + 1;
const annonac = fechanac.getFullYear();


console.log(fechahoy);
console.log(fechanac);
console.log(varfecha);
console.log(dianac);
console.log(mesnac);
console.log(annonac);

