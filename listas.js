let compra = ["pasta", "arroz", "leche", "azúcar", "sal", "café"];
compra.push("aceite de girasol");
compra.pop();

let peliculas = [
    {titulo: "Pelicula1",
     director: "director1",
     fecha: new Date(2010, 1, 1)
    },
    {titulo: "Pelicula2",
     director: "director2",
     fecha: new Date(1980, 3, 1)
    },
    {titulo: "Pelicula3",
     director: "director3",
     fecha: new Date(2015, 6, 4)
    },
]

let pelicula_nva = peliculas.filter(pelicula => pelicula.fecha > new Date (2010, 0, 1));
let directores = peliculas.map(pelicula => pelicula.director);
let titulos = peliculas.map(pelicula => pelicula.titulo);
let lista = directores.concat(titulos);
let lista2 = [...directores, ...titulos];

console.log(compra);
console.log(peliculas);
console.log(pelicula_nva);
console.log(directores);
console.log(titulos);
console.log(lista);
console.log(lista2);

