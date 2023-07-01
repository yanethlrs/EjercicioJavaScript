let Datos = {
    nombre : "Yaneth",
    apellido : "Rodríguez",
    edad : 43,
    altura : 1.58,
    soyDesarrollador : true
}

let miedad = Datos.edad;

let lista = [Datos, amigo1 = {nombre: "Wisma", apellido: "Mendoza", edad:26, altura: 1.70, soyDesarrollador: true}, amigo2 = {nombre: "Yusmila", apellido: "Ramos", edad:44, altura: 1.56, soyDesarrollador: false}];

let lista2 = {...lista};

lista.sort((a,b)=>b.edad - a.edad);

console.log (miedad);
console.log (lista);
console.log (lista2)
