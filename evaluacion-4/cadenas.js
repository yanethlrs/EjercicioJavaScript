let nombre = "Yaneth";
let apellido = "Rodriguez";
let estudiante = nombre.concat(" ", apellido);
let estudianteMayus = estudiante.toUpperCase();
let estudianteMinus = estudiante.toLowerCase();
let longitud = estudiante.length;
let primera = nombre.charAt(0);
let ultima = apellido.slice(-1);
let espacios = estudiante.replace(/\s+/g, '');
let contenido = estudiante.includes(nombre);

console.log(estudiante);
console.log(estudianteMayus);
console.log(estudianteMinus);
console.log(longitud);
console.log(primera);
console.log(ultima);
console.log(espacios);
console.log(contenido);