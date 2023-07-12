class estudiante {
    nombre = "Yaneth";
    lista = ["JavaScript", "HTML", "CSS"];
    obtenDatos() {
        return {
            nombre: this.nombre,
            lista: this.lista,
        }
    }
}
const estud = new estudiante();
console.log(estud)
console.log(estud.obtenDatos())







