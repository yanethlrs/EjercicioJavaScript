const mensaje = val => {
    if (typeof val === "number"){
        return val * 2
    }
    throw new Error("Mensaje personalizado")
}

console.log (mensaje(55));

const valor = "HOLA"

try {
    const doble = mensaje (valor);
    console.log(doble)
}catch{
    console.log("ERROR: Debe ser un número")
}